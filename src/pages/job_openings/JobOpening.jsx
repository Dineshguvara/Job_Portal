import React, { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';
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
  } from '@chakra-ui/react';
import {  ArrowBackIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import jobOpenData from "./JobOpeningData"

function JobOpenings() {
  
    return  (
        <>   
            <Box bg="white" p={5} mb={5}  style={{ borderRadius: "10px" }}>
                <Flex alignItems='center' gap={2}  >
                    <Link to="/">
                    <ArrowBackIcon w={6} h={6} /> 
                    </Link> &nbsp;
                    <Heading as="h3" size="lg" color="gray.600">
                        Jobs Openings
                    </Heading>
                    <Spacer />
                    <Link to={'/create_job_open'}>
                        <Button mr={10} colorScheme='teal'> Add New  &nbsp; ( + )</Button>
                    </Link>
                </Flex>
            </Box>
            < Box p={4} color="black" bg="white" style={{ borderRadius: "10px" }}> 
                
                <TableContainer  mt={8}>
                    <Table variant='striped' > 
                        <Thead>
                        <Tr>
                            <Th> # </Th>
                            <Th> Job Id </Th>
                            <Th> Job Title </Th>
                            <Th> Primary Skills  </Th>
                            <Th> Location</Th>
                            <Th> Description  </Th>                                                   
                            <Th> Action  </Th>                                                   
                        </Tr>
                        </Thead>
                        <Tbody >  
                            {    
                                
                            jobOpenData.map((item)=>{
                                return(
                                    <Tr key={item.id}>
                                        <Td>{item.id}</Td>
                                        <Td>{item.job_id}</Td>
                                        <Td>{item.job_title}</Td>
                                        <Td>{item.primary_skills}</Td>
                                        <Td>{item.location}</Td>
                                        <Td>{item.description}</Td>
                                        <Td>
                                            <EditIcon/> &nbsp;  
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

export default JobOpenings;