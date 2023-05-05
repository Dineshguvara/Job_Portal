import React, { useState, useEffect} from 'react';
import { useNavigate, Link  } from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Button,
    Spacer,
    Heading,
    Flex
  } from '@chakra-ui/react'
import {  ArrowBackIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import profileUploadData from './ProfileUploadData'

function ProfileUpload() {

    return  (
        <>   
            <Box bg="white" p={5} mb={5}  style={{ borderRadius: "10px" }}>
                <Flex alignItems='center' gap={2}  >
                    <Link to="/">
                    <ArrowBackIcon w={6} h={6} /> 
                    </Link> &nbsp;
                    <Heading as="h3" size="lg" color="gray.600">
                        Manager Status  
                    </Heading>
                    <Spacer />
                    <Link to={'/create_pro_upload'}>
                        <Button mr={10} colorScheme='teal'> Profile Upload  &nbsp; ( + )</Button>
                    </Link>
                </Flex>
            </Box>
            < Box p={4} color="black" bg="white" style={{ borderRadius: "10px" }}> 
                
                <TableContainer  mt={8}>
                    <Table variant='striped' > 
                        <Thead>
                        <Tr>
                            <Th> #</Th>
                            <Th> Name</Th>
                            <Th> Job Id </Th>
                            <Th> Job Title </Th>
                            <Th> Email </Th>
                            <Th> Document  </Th>
                            <Th> Source </Th>      
                            <Th> Action </Th>      
                        </Tr>
                        </Thead>
                        <Tbody>  
                            {
                                 profileUploadData.map((item)=>{
                                    return(
                                        <Tr key={item.id}>
                                            <Td>{item.id}</Td>
                                            <Td>{item.name}</Td>
                                            <Td>{item.job_id}</Td>
                                            <Td>{item.job_title}</Td>
                                            <Td>{item.email}</Td>
                                            <Td>{item.document}</Td>
                                            <Td>{item.source}</Td>                                            
                                            <Td>
                                                <EditIcon/> &nbsp; &nbsp;  
                                                <DeleteIcon/>                                           
                                            </Td>
                                        </Tr>
                                    )
                                })       
                            }
                        </Tbody>                        
                    </Table>
                </TableContainer>
            </Box>
        </>

    )
}

export default ProfileUpload;