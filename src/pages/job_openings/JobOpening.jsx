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
import { useSelector, useDispatch } from 'react-redux';
import  clearState  from '../../features/jobOpens';
function JobOpenings() {
    
    const { jobs } = useSelector((state) => state.jobsOpen);
    const dispatch = useDispatch();
    

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
                    {/* <Button colorScheme="blue" onClick={()=> dispatch(clearState()) }>
                        Clear Job Data
                    </Button> */}
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
                            {  jobs  &&                                
                                jobs.map((item, index)=>{
                                  
                                return(
                                    <Tr key={index}>
                                        <Td>{index+1}</Td>                                        
                                        <Td>{item.job_id}</Td>
                                        <Td>{item.job_title}</Td>
                                        <Td >
                                        {item.skill &&
                                        item.skill.map((pet, idx) => {                                            
                                            return(
                                                <>  {pet.label},&nbsp;  </>
                                            )
                                        })} 
                                        </Td>
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