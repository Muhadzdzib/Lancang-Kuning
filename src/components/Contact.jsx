import { useState, useEffect, useRef } from "react";
import {
  Box,
  Input,
  Textarea,
  Button,
  VStack,
  Text,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { supabase } from "../supabaseClient"; // 🔹 config supabase

export default function Contact() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [komentar, setKomentar] = useState([]);
  const boxRef = useRef(null);

  // ambil komentar dari Supabase
  useEffect(() => {
    fetchKomentar();
  }, []);

  async function fetchKomentar() {
    const { data, error } = await supabase
      .from("komentar")
      .select("*")
      .order("id", { ascending: false });
    if (error) console.error(error);
    else setKomentar(data);
  }

  // simpan komentar ke Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("komentar")
      .insert([{ nama, pesan }]);

    if (error) {
      console.error(error);
    } else {
      setNama("");
      setPesan("");
      fetchKomentar(); // refresh komentar
    }
  };

  return (
    <Box
      ref={boxRef}
      id="message"
      bg="#212121"
      paddingLeft="15%"
      paddingRight="15%"
      color="#E9E9E9"
      minH="100vh"
      pt="100px"
      position="relative"
      overflow="hidden"
    >
      <Text
        textAlign="center"
        fontSize="3xl"
        fontWeight="bold"
        mb={8}
        color="yellow.400"
      >
        <Text as="span" color="#DF9C36">
          Message for Fun
        </Text>
      </Text>

      {/* Background komentar berjalan */}
      <Box position="absolute" top={0} left={0} w="100%" h="100%" zIndex={0}>
        {komentar.map((k, i) => (
          <BouncingText
            key={i}
            text={`${k.nama} says "${k.pesan}"`}
            containerRef={boxRef}
            color={["#DF9C36", "white", "#E53E3E", "#61c230ff", "#6e36dfff"][i % 5]}
          />
        ))}
      </Box>

      {/* Form komentar */}
      <VStack
        as="form"
        onSubmit={handleSubmit}
        spacing={4}
        position="relative"
        zIndex={10}
        maxW="500px"
        w="100%"
        mx="auto"
        p={8}
        borderRadius="lg"
        bg="rgba(255, 255, 255, 0.1)"
        boxShadow="lg"
        backdropFilter="blur(2px)"
        border="1px solid rgba(255, 255, 255, 0.2)"
      >
        <Input
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
          bg="rgba(255,255,255,0.2)"
          border="none"
          _placeholder={{ color: "gray.300" }}
        />
        <Textarea
          placeholder="Pesan"
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          required
          bg="rgba(255,255,255,0.2)"
          border="none"
          _placeholder={{ color: "gray.300" }}
        />
        <Button type="submit" bg="#DF9C36" color="#212121" w="full">
          Kirim
        </Button>
      </VStack>

      {/* Social Media Icons */}
      <HStack spacing={6} justify="center" mt={6}>
        <Link href="https://wa.me/628xxxxxx" isExternal>
          <IconButton
            aria-label="WhatsApp"
            icon={<FaWhatsapp />}
            variant="ghost"
            size="lg"
            color="green.400"
            _hover={{ color: "green.500", transform: "scale(1.2)" }}
          />
        </Link>
        <Link href="https://www.instagram.com/pmm4uir_lancangkuning/" isExternal>
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant="ghost"
            size="lg"
            color="pink.400"
            _hover={{ color: "pink.500", transform: "scale(1.2)" }}
          />
        </Link>
        <Link href="https://facebook.com/xxxx" isExternal>
          <IconButton
            aria-label="Facebook"
            icon={<FaFacebook />}
            variant="ghost"
            size="lg"
            color="blue.400"
            _hover={{ color: "blue.500", transform: "scale(1.2)" }}
          />
        </Link>
        <Link href="https://twitter.com/xxxx" isExternal>
          <IconButton
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
            size="lg"
            color="cyan.400"
            _hover={{ color: "cyan.500", transform: "scale(1.2)" }}
          />
        </Link>
      </HStack>
    </Box>
  );
}

// 🔹 Komponen teks bouncing
function BouncingText({ text, containerRef, color }) {
  const controls = useAnimation();
  const textRef = useRef(null);

  const [pos, setPos] = useState({
    x: 0,
    y: Math.random() * 200,
    dx: 1 + Math.random() * 1,
    dy: 1 + Math.random() * 1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const box = containerRef.current;
      const el = textRef.current;
      if (!box || !el) return;

      const boxWidth = box.offsetWidth;
      const boxHeight = box.offsetHeight;

      const leftPadding = boxWidth * 0.15;
      const rightPadding = boxWidth * 0.15;
      const bounceWidth = boxWidth - leftPadding - rightPadding;

      const textWidth = el.offsetWidth || 100;
      const textHeight = el.offsetHeight || 20;

      setPos((prev) => {
        let { x, y, dx, dy } = prev;

        x += dx;
        y += dy;

        if (x <= 0) dx = -dx;
        if (x >= bounceWidth - textWidth) dx = -dx;

        if (y <= 0) dy = -dy;
        if (y >= boxHeight - textHeight) dy = -dy;

        controls.start({ x: x + leftPadding, y });

        return { x, y, dx, dy };
      });
    }, 30);

    return () => clearInterval(interval);
  }, [controls, containerRef]);

  return (
    <motion.div
      ref={textRef}
      animate={controls}
      style={{
        position: "absolute",
        fontSize: "16px",
        color,
        pointerEvents: "none",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </motion.div>
  );
}
