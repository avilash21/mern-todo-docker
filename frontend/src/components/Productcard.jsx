import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, HStack, IconButton, Image, Input, Text, useColorModeValue, useDisclosure, useToast, VStack} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';




const Productcard = ({product}) => {

    const textcolor = useColorModeValue("gray.800", "white");
    const {deleteProducts,updateProducts} = useProductStore();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleDeleteProduct = async (id) => {
        const {success,message} = await deleteProducts(id);
        if(!success){
            toast({
                title:"Error",
                description:message,
                status:"error",
                duration:5000,
                isClosable:true
            });
            return;
        }
        else{
            toast({
                title:"Success",
                description:message,
                status:"success",
                duration:5000,
                isClosable:true
            });
        }
    };    

    const [UpdatedProduct, setUpdatedProduct] = useState(product);
    const handleUpdateProduct = async () => {
        const {success,message} = await updateProducts(product._id, UpdatedProduct);
        if(!success){
            toast({
                title:"Error",
                description:message,
                status:"error",
                duration:5000,
                isClosable:true
            });
            return;
        }
        else{
            toast({
                title:"Success",
                description:message,
                status:"success",
                duration:5000,
                isClosable:true
            });
        }
        onClose();
    };

  return (
    <Box rounded={"lg"} shadow={"lg"} overflow={"hidden"} transition={"transform 0.2s"}> 
        <Image src={product.image} alt={product.name} objectFit={"cover"} height={64} width={"100%"} />
        <Box p={4}>
            <Heading as={'h3'} size={'md'} color={textcolor}>{product.name}</Heading>
            <Text fontSize={"sm"} color={"gray.500"}>${product.price}</Text>
            <HStack spacing={2} justifyContent={'right'}>
            <IconButton icon={<EditIcon />} aria-label={"Edit Product"} onClick={onOpen} colorScheme='blue'/>
            <IconButton icon={<DeleteIcon />} aria-label={"Delete Product"} onClick={() => handleDeleteProduct(product._id)} colorScheme='red'/> 
            </HStack>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Update Product</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <VStack>
                                          <Input placeholder="Name" value={UpdatedProduct.name} onChange={(e)=> setUpdatedProduct({...UpdatedProduct,name:e.target.value})}/>
                                          <Input placeholder="Price"  value={UpdatedProduct.price} onChange={(e)=> setUpdatedProduct({...UpdatedProduct,price:e.target.value})}/>  
                                          <Input placeholder="Image URL" value={UpdatedProduct.image} onChange={(e)=> setUpdatedProduct({...UpdatedProduct,image:e.target.value})}/>
                                        </VStack>
                          </ModalBody>
        
                          <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={handleUpdateProduct}>Update </Button>
                            <Button variant='ghost' onClick={onClose} >Cancel</Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
        

    </Box>

    

  )
}

export default Productcard