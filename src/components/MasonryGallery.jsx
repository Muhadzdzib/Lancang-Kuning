import { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
  "./assets/img/Design1.png",
  "./assets/img/Design2.png",
  "./assets/img/Design3.png",
  "./assets/img/Design4.png",
  "./assets/img/Design5.png",
  "./assets/img/Design6.png",

  "./assets/img/1.jpg",
  "./assets/img/2.jpg",
  "./assets/img/5.jpg", 

  "./assets/img/7.jpg",
  "./assets/img/9.jpg",
  "./assets/img/10.jpg",
  "./assets/img/11.jpg", 
  "./assets/img/12.jpg",

  "./assets/img/13.jpg",
  "./assets/img/14.jpg",
  "./assets/img/16.jpg",
  "./assets/img/17.jpg", 
  "./assets/img/18.jpg",
  "./assets/img/29.jpg",
  "./assets/img/19.jpg",
  "./assets/img/24.jpg",
  "./assets/img/31.jpg",
  "./assets/img/32.jpg",
    "./assets/img/26.jpg",
 
  "./assets/img/30.jpg",
  "./assets/img/33.jpeg",
  "./assets/img/35.jpeg",
  "./assets/img/34.jpeg",
  "./assets/img/25.jpg",






  
];

export default function MasonryGallery() {
  const [index, setIndex] = useState(-1);

  const breakpointColumns = {
    default: 3, // desktop
    1024: 2,    // tablet
    640: 1      // hp
  };

  return (
    <Box 
        paddingLeft="15%"
        paddingRight="15%"
        id="gallery"   // id ini harus sama dengan target di Header.jsx
        bg="#212121"
        color="#DF9C36"
        minH="100vh"
        pt="25px" >
      {/* Judul */}
      <Text
        textAlign="center"
        fontSize="3xl"
        fontWeight="bold"
        mb={8}
        color="#DF9C36"
      >
        <Text as="span" color="#DF9C36">Moments</Text>
      </Text>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {photos.map((src, idx) => (
          <Box
            key={idx}
            mb={4}
            borderRadius="lg"
            overflow="hidden"
            shadow="md"
            cursor="pointer"
            _hover={{ transform: "scale(1.03)", transition: "0.3s" }}
            onClick={() => setIndex(idx)}
          >
            <Image
              src={src}
              alt={`Gallery ${idx}`}
              filter="grayscale(100%)"
              _hover={{
                filter: "grayscale(0%)",
           
              }}
            />
          </Box>
        ))}
      </Masonry>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map((src) => ({ src }))}
      />

      {/* CSS khusus untuk masonry */}
      <style>
        {`
          .masonry-grid {
            display: flex;
            margin-left: -16px; /* spacing antar kolom */
            width: auto;
          }
          .masonry-grid_column {
            padding-left: 16px; /* spacing antar kolom */
            background-clip: padding-box;
          }
        `}
      </style>
    </Box>
  );
}
