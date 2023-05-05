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
import feedbackData from "./FeedbackData";

function Feedback() {

    return  (
        <>   
            <Box bg="white" p={5} mb={5}  style={{ borderRadius: "10px" }}>
                <Flex alignItems='center' gap={2}  >
                    <Link to="/">
                    <ArrowBackIcon w={6} h={6} /> 
                    </Link> &nbsp;
                    <Heading as="h3" size="lg" color="gray.600">
                        Feedback
                    </Heading>
                    <Spacer />
                    <Link to={'/create_feedback'}>
                        <Button mr={10} colorScheme='teal'>  Add New  &nbsp; ( + )</Button>
                    </Link>
                </Flex>
            </Box>
            < Box p={4} color="black" bg="white" style={{ borderRadius: "10px" }}> 
                
                <TableContainer  mt={8}>
                    <Table variant='striped' > 
                        <Thead>
                          <Tr>
                            <Th>  # </Th>
                            <Th>  Name </Th>
                            <Th>  Primary Skills </Th>
                            <Th>  Candidate Rating </Th>      
                            <Th>  Interview Rating </Th>                                        
                            <Th>   Action  </Th>                                        
                          </Tr>
                        </Thead>
                        <Tbody>  
                            {
                                feedbackData.map((item)=>{
                                    return(
                                        <Tr key={item.id}>
                                            <Td>{item.id}</Td>
                                            <Td>{item.name}</Td>
                                            <Td>{item.skills}</Td>
                                            <Td>{item.candidate_rating}</Td>
                                            <Td>{item.interviewer_rating}</Td>                                            
                                            <Td>
                                                <EditIcon/> &nbsp;  &nbsp;
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

export default Feedback;