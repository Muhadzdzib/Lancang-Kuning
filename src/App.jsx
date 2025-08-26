import { Box } from "@chakra-ui/react";
import Header from "./components/header";
import HomeSection from "./components/home";
import "./App.css";
import AboutSection from "./components/about";
import MemberCarousel from "./components/MemberCarousel";
import MasonryGallery from "./components/MasonryGallery";
import Contact from "./components/Contact";






function App() {
  return (
    <Box bg="gray.50">
      <Header />
      <HomeSection />
      <AboutSection />
       <MemberCarousel />
        <MasonryGallery />
          <Contact /> 
       
    </Box>
    
  );
}

export default App;
