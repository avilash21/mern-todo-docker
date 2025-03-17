import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import Homepage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";

function App(){
 
 return(
  <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.700")}>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/create" element={<CreatePage/>}/>
  </Routes>
  </Box>

 ); 
}

export default App;