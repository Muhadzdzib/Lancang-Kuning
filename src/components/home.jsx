// src/components/HomeSection.jsx
import { Box, Image, Text } from "@chakra-ui/react";
import CampusMarquee from "./CampusScroll";

const HomeSection = () => {
  return (
    <Box
      paddingLeft="15%"
      paddingRight="15%"
      id="home"   // id ini harus sama dengan target di Header.jsx
      bg="#212121"
      color="#DF9C36"
      minH="100vh"
      pt="120px"   // biar konten ga ketutup navbar
      textAlign="center"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
    <Image src="../../public/assets/logo/Lancangkuning.png" maxW={{ base: "100px", md: "200px", lg: "300px" }} alt="Logo Lancang Kuning" />
      <Text fontSize="4xl" mb={2} fontFamily="Poppins">
        Lancang Kuning
      </Text>
      <Text fontSize="xl" maxW="600px" mb={6} color="#E9E9E9">
        Kelompok modul nusantara dari program pertukaran mahasiswa merdeka inbound universitas islam riau. 
      </Text>
      <CampusMarquee />
    </Box>
  );
};

export default HomeSection;
