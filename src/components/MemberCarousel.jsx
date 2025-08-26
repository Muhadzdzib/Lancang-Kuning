import { Box, Text, Image, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const members = [
  {
    name: "Dr. Ir. Ira Handayani, S.T., M.T",
    faculty: "Teknik Perminyakan",
    img: "./assets/member/ibuira.jpg",
    logo: "./assets/iconcampus/uir.png"
  },
  {
    name: "Nada Islami",
    faculty: "Teknik Perminyakan",
    img: "./assets/member/Nada.jpg",
    logo: "./assets/iconcampus/uir.png"
  },
  {
    name: "Fajri",
    faculty: "PPKN",
    img: "./assets/member/Fajri.jpg",
    logo: "./assets/iconcampus/untirta.png"
  },
  {
    name: "Kartika Sandra Kirani Anggara",
    faculty: "Ilmu Hukum",
    img: "./assets/member/Kartika.jpg",
    logo: "./assets/iconcampus/iblam.png"
  },
  {
    name: "Galang Hardy Muhadzdzib",
    faculty: "Teknik Komputer",
    img: "./assets/member/galang.jpg",
    logo: "./assets/iconcampus/unm.png"
  },
  {
    name: "Liadi Suranta Saputra Sembiring ",
    faculty: "Teknik Elektro",
    img: "./assets/member/Putra.jpg",
    logo: "./assets/iconcampus/untag.png"
  },

    {
    name: "Moh. Rafli Panjili",
    faculty: "Teknik PWK",
    img: "./assets/member/panjili.jpg",
    logo: "./assets/iconcampus/uml.png"
  },
  {
    name: "Faisal Erlangga",
    faculty: "Administrasi Bisnis",
    img: "./assets/member/faisal.jpg",
    logo: "./assets/iconcampus/unmul.png"
  },
  {
    name: "Azhar Khairullah",
    faculty: "Sistem Informasi",
    img: "./assets/member/.jpg",
    logo: "./assets/iconcampus/kuningan.png"
  },
  {
    name: "Riyan Ramadani",
    faculty: "Ilmu Hukum",
    img: "./assets/member/Riyan.jpg",
    logo: "./assets/iconcampus/ump.png"
  },
  {
    name: "Az Zahra Ammanda Putri",
    faculty: "Prodi ?",
    img: "./assets/member/manda.jpg",
    logo: "./assets/iconcampus/pamulang.png"
  },
  {
    name: "Mafazatun Nafala",
    faculty: "Psikologi",
    img: "./assets/member/faza.jpg",
    logo: "./assets/iconcampus/umk.png"
  },

   {
    name: "Nurul Hudaya",
    faculty: "Prodi ?",
    img: "./assets/member/hudaya.jpg",
    logo: "./assets/iconcampus/puang.png"
  },
  {
    name: "Resti Nurillah",
    faculty: "Pai",
    img: "./assets/member/resti.jpg",
    logo: "./assets/iconcampus/uniga.png"
  },
  {
    name: "Sayekti Milan",
    faculty: "Ilmu Komunikasi",
    img: "./assets/member/milan.jpg",
    logo: "./assets/iconcampus/unesa.png"
  },
  {
    name: "Khasna Kamila",
    faculty: "Sastra Rusia",
    img: "./assets/member/.jpg",
    logo: "./assets/iconcampus/unpad.png"
  },
  {
    name: "Fitriyah",
    faculty: "Prodi ?",
    img: "./assets/member/fitriyah.jpg",
    logo: "./assets/iconcampus/stiba.png"
  },
  {
    name: "Dina Agustina",
    faculty: "Pendidikan Bahasa Inggris",
    img: "./assets/member/Dina.jpg",
    logo: "./assets/iconcampus/islamkadiri.png"
  },

    {
    name: "Najwa Aisy Rahmah",
    faculty: "Gizi",
    img: "./assets/member/icy.jpg",
    logo: "./assets/iconcampus/unbl.png"
  },
  {
    name: "Nur Alia",
    faculty: "Prodi ?",
    img: "./assets/member/alia.jpg",
    logo: "./assets/iconcampus/untad.png"
  },
  {
    name: "Maya Churil Maula",
    faculty: "Hubungan Internasional",
    img: "./assets/member/maya.jpg",
    logo: "./assets/iconcampus/amikom.png"
  },
  {
    name: "Naila Sabrina",
    faculty: "Prodi",
    img: "./assets/member/naila.jpg",
    logo: "./assets/iconcampus/unas.png"
  },
  {
    name: "Aulia Ratu Azzahra",
    faculty: "Psikologi",
    img: "./assets/member/zahra.jpg",
    logo: "./assets/iconcampus/selamatsri.png"
  },
  {
    name: "Safira Rahma",
    faculty: "Prodi ?",
    img: "./assets/member/safira.jpg",
    logo: "./assets/iconcampus/untirta.png"
  }
  
  
];

export default function MemberCarousel() {
  return (
    <Box 
      paddingLeft="15%"
      paddingRight="15%"
      id="member"   // id ini harus sama dengan target di Header.jsx
      bg="#212121"
      color="#DF9C36"
      minH="100vh"
      pt="50px"   // biar konten ga ketutup navbar
      >
        
      {/* Judul */}
      <Text
        textAlign="center"
        fontSize="3xl"
        fontWeight="bold"
        mb={8}
        color="#DF9C36"
      >
        Member <Text as="span" color="#E9E9E9">of Lancang Kuning</Text>
      </Text>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {members.map((member, idx) => (
          <SwiperSlide key={idx}>
            <Box
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              shadow="lg"
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            >
              {/* Foto */}
              <Image
                src={member.img}
                alt={member.name}
                objectFit="cover"
                w="100%"
                h="100%%"
              />

              {/* Logo kiri atas */}
              <Image
                src={member.logo}
                alt="logo"
                boxSize="50px"
                position="absolute"
                top={3}
                left={3}
              />

              {/* Fakultas kanan atas */}
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="white"
                bg="blackAlpha.600"
                px={2}
                py={1}
                borderRadius="md"
                position="absolute"
                top={3}
                right={3}
              >
                {member.faculty}
              </Text>

              {/* Nama di bawah */}
              <VStack
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                textAlign="center"
                spacing={1}
                py={3}
                bgGradient="linear(to-t, blackAlpha.700, transparent)"
              >
                <Text
                  fontWeight="bold"
                  fontSize="md"
                  color="white"
                  textShadow="0px 2px 6px rgba(0,0,0,0.8)"
                >http://localhost:5173/
                  {member.name}
                </Text>
              </VStack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
