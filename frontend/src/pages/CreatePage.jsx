import React from 'react'
import { Box, Button, Container, Heading, Input, useColorMode, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = React.useState({
    name: '',
    price: '',
    image: ''
  });
  const toast = useToast();
  const {createProducts} = useProductStore();
  const handleAddProduct = async () => {
    const {success,message,data} = await createProducts(newProduct);
    if(!success){
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
      })}
      else{
        toast({
          title:"Success",
          description: message,
          status:"success",
          duration:5000,
          isClosable:true,
        });
      }
      setNewProduct({name:'',price:'',image:''});
    }



  return (
      <Container maxW={'container.sm'} maxH={'container.sm'}  display="flex" justifyContent="center" alignItems="center" minH="100vh" >
        <VStack spacing={8}>
          <Heading textAlign={"center"}>Create New Product</Heading>
          <Box w={'full'} maxW={'md'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} rounded={'lg'} p={6} overflow={'hidden'}>
            <VStack>
              <Input placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>
              <Input placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} />  
              <Input placeholder="Image URL" value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})} />
              <Button colorScheme="blue" onClick={handleAddProduct}>Create</Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
  )
}

export default CreatePage