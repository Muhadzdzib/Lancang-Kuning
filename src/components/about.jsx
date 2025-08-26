// AboutSection.jsx
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box
      id="about"
      bg="#212121"
      color="#E9E9E9"
      minH="100vh"
      px={{ base: 6, md: 100 }} // margin kiri kanan (responsive)
      py={16}

    >
      <Flex
        paddingTop="7.5%"
        paddingLeft="10%"
        paddingRight="10%"
        direction={{ base: "column", md: "row" }} // HP: kolom, Desktop: baris
        align="center"
        justify="center"
        gap={12}
      >
        {/* Logo / Gambar */}
        <Image
          src="./assets/img/Bersama.jpg"
          alt="Lancang Kuning Logo"
          maxW={{ base: "100%", md: "50%" }}
          mx="auto"
          borderRadius="2.5%"
          filter="grayscale(75%)"
            transition="1s ease"
            _hover={{ filter: "grayscale(0%)" }}
        />

        {/* Teks */}
        <Box textAlign={{ base: "center", md: "left" }} maxW="600px">
          <Heading
            as="h2"
            size="xl"
            color="#DF9C36"
            mb={4}
            fontFamily="Poppins"
            textAlign="right"
          >
            About us
          </Heading>

          <Text fontSize={{ base: "md", md: "lg" }} lineHeight="taller" textAlign="right">
            Lancang Kuning adalah kelompok 1 dari 5 kelompok modul nusantara
            yang ada di program pertukaran mahasiswa merdeka batch IV inbound
            Universitas Islam Riau.
          </Text>

          <Text mt={4} fontSize={{ base: "md", md: "lg" }} lineHeight="taller" textAlign="right">
            Hasil dari diskusi bersama anggota, nama “Lancang Kuning” dipilih
            dan ditetapkan pada 07 Agustus 2024 di depan Dekanat Universitas
            Islam Riau.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutSection;
    