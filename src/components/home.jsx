// src/components/HomeSection.jsx
import { Box, Image, Text } from "@chakra-ui/react";
import CampusMarquee from "./CampusScroll";

const HomeSection = () => {
  return (
    <Box
      paddingLeft="15%"
      paddingRight="15%"
      id="home"
      bg="#212121"
      color="#DF9C36"
      minH="100vh"
      pt="120px"
      textAlign="center"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      overflow="hidden"
    >
      {/* Blob blur background */}
      <Box
        position="absolute"
        top="-150px"
        left="-150px"
        w="400px"
        h="400px"
        bgGradient="radial(teal.500, transparent)"
        filter="blur(120px)"
        opacity={0.4}
      />
      <Box
        position="absolute"
        bottom="-150px"
        right="-150px"
        w="400px"
        h="400px"
        bgGradient="radial(yellow.500, transparent)"
        filter="blur(120px)"
        opacity={0.4}
      />

      {/* Konten */}
      <Image 
        src="./assets/logo/Lancangkuning.png" 
        maxW={{ base: "100px", md: "200px", lg: "300px" }} 
        alt="Logo Lancang Kuning" 
        zIndex={1}
      />
      <Text fontSize="4xl" mb={2} fontFamily="Poppins" zIndex={1}>
        Lancang Kuning
      </Text>
      <Text fontSize="xl" maxW="600px" mb={6} color="#E9E9E9" zIndex={1}>
        Kelompok modul nusantara dari program pertukaran mahasiswa merdeka inbound universitas islam riau.
      </Text>
      <Box zIndex={1}>
        <CampusMarquee />
      </Box>
    </Box>

      );
    };

export default HomeSection;
