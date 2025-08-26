// src/components/Header.jsx
import {
  Flex,
  Link,
  Image,
  IconButton,
  Stack,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menus = ["home", "about", "member", "gallery", "message"];

  return (
    <Box
      as="nav"
      bg="rgba(255, 255, 255, 0.2)"
      backdropFilter="blur(10px)"
      px={8}
      py={4}
      position="fixed"
      paddingLeft="15%"
      paddingRight="15%"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      boxShadow="sm"
    >
      <Flex justify="space-between" align="center">
        {/* Logo */}
        <Image
          src="/assets/logo/Lancangkuning.png"
          maxW={{ base: "10", md: "25", lg: "50" }}
          alt="Logo Lancang Kuning"
        />

        {/* Menu Desktop */}
        <Flex gap={6} display={{ base: "none", md: "flex" }}>
          {menus.map((item) => (
           <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}            // 👈 penting: memantau posisi scroll
              activeClass="active"  // 👈 kasih class aktif
            >
              <Link
                className="nav-link"
                color="white"
                fontWeight="semibold"
                cursor="pointer"
                _hover={{ color: "#DF9C36" }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </ScrollLink>
          ))}
        </Flex>

        {/* Hamburger untuk Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          bg="transparent"
          color="white"
          _hover={{ bg: "gray.600" }}
        />
      </Flex>

      {/* Menu Mobile Dropdown */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4} mt={2}>
            {menus.map((item) => (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={onClose} // biar menu nutup setelah klik
              >
                <Link
                  color="white"
                  fontWeight="semibold"
                  cursor="pointer"
                  _hover={{ color: "#DF9C36" }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </ScrollLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};


export default Header;
