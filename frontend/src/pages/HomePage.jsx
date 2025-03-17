import React, { use, useEffect } from 'react'
import {Button, Container, SimpleGrid, Text, useDisclosure, VStack} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product';
import Productcard from '../components/Productcard';




const HomePage = () => {
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    console.log("useEffect called");
    fetchProducts();
  },[fetchProducts]);

 
  console.log(products);
  return (
   <Container maxW="container.xl" py={12}>
    <VStack spacing={8}>
      <Text fontSize={{base: "2xl", sm: "3xl"}}
        fontWeight={"bold"}>
          Current Products</Text>

      <SimpleGrid
        columns={{base:1,md:2, lg:3}} spacing={10} width={"100%"}> 

        {products.map((product) => (
          <Productcard key={product._id} product={product} />
        ))}

        </SimpleGrid>


        {products.length === 0 && (
          <div>
            <Text fontSize={{base: "m", sm: "xl"}}
            fontWeight={"bold"}> No Products Found</Text>
            
            <Link to='/create'><Button>Create Product</Button></Link>
          </div>
        )} 

        
    </VStack>
    </Container>
  )
}

export default HomePage