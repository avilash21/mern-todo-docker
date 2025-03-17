import { Button, color, Container, DarkMode, Flex, HStack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from "react-icons/fi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
        <Container maxWidth={"100%"}  name ="aa" px={4} bg={useColorModeValue("gray.400", "gray.900")} >
            <Flex justifyContent={"space-between"} h={16} alignItems={"center"}>
                <Text
                    fontSize={{base: "xl", sm: "2xl"}}
                    fontWeight={"bold"}
                    
                 >
                    <Link to="/">Product Store 🛒 </Link>
                </Text>
            

            <HStack>
                <Link to='/create'><Button link ><FiPlus /></Button></Link>
                <Button onClick={toggleColorMode} >
                    {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
                    </Button>
            </HStack>
            </Flex>
        </Container>
  )
}

export default Navbar