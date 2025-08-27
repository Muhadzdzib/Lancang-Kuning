import { Box, Flex, Image, keyframes } from "@chakra-ui/react";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const animation = `${scroll} 45s linear infinite`;

const InfiniteScrollIcons = () => {
  const icons = [
    "./assets/iconcampus/uir.png",
    "./assets/iconcampus/amikom.png",
    "./assets/iconcampus/iblam.png",
    "./assets/iconcampus/islamkadiri.png",
    "./assets/iconcampus/itbwiga.png",
    "./assets/iconcampus/kuningan.png",
    "./assets/iconcampus/pamulang.png",
    "./assets/iconcampus/puang.png",
    "./assets/iconcampus/selamatsri.png",
    "./assets/iconcampus/stiba.png",
    "./assets/iconcampus/umk.png",
    "./assets/iconcampus/ump.png",
    "./assets/iconcampus/unas.png",
    "./assets/iconcampus/unbl.png",
    "./assets/iconcampus/unesa.png",
    "./assets/iconcampus/uniga.png",
    "./assets/iconcampus/unmul.png",
    "./assets/iconcampus/unpad.png",
    "./assets/iconcampus/untad.png",
    "./assets/iconcampus/untag.png",
    "./assets/iconcampus/untirta.png",
      "./assets/iconcampus/uir.png",
    "./assets/iconcampus/amikom.png",
    "./assets/iconcampus/iblam.png",
    "./assets/iconcampus/islamkadiri.png",
    "./assets/iconcampus/itbwiga.png",
    "./assets/iconcampus/kuningan.png",
    "./assets/iconcampus/pamulang.png",
    "./assets/iconcampus/puang.png",
    "./assets/iconcampus/selamatsri.png",
    "./assets/iconcampus/stiba.png",
    "./assets/iconcampus/umk.png",
    "./assets/iconcampus/ump.png",
    "./assets/iconcampus/unas.png",
    "./assets/iconcampus/unbl.png",
    "./assets/iconcampus/unesa.png",
    "./assets/iconcampus/uniga.png",
    "./assets/iconcampus/unmul.png",
    "./assets/iconcampus/unpad.png",
    "./assets/iconcampus/untad.png",
    "./assets/iconcampus/untag.png",
    "./assets/iconcampus/untirta.png",
  ];

  return (
    <Box overflow="hidden" w="11.8%" mx="auto" py={6}>
      <Flex
        gap={12}
        animation={animation}
        whiteSpace="nowrap"
        align="center"
        w="fit-content" // penting! biar panjangnya sesuai isi
      >
        {/* batch pertama */}
        {icons.map((src, i) => (
          <Image key={i} src={src} alt={`campus-${i}`} boxSize="60px" flexShrink={0} />
        ))}

        {/* batch kedua (clone) */}
        {icons.map((src, i) => (
          <Image key={`clone-${i}`} src={src} alt={`campus-clone-${i}`} boxSize="60px" flexShrink={0} />
        ))}
      </Flex>
    </Box>
  );
};

export default InfiniteScrollIcons;
