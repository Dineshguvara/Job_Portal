import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  Flex,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Select } from "chakra-react-select";
import { useSelector } from "react-redux";

// const skill = [
//   {
//     value: "naukri",
//     label: "Naukri",
//   },
//   {
//     value: "linkedin",
//     label: "LinkedIn",
//   },
//   {
//     value: "indeed",
//     label: "Indeed",
//   },
// ];

function FeedbackForm() {
  let navi = useNavigate();

  const { skills, candidateName } = useSelector((state) => state.poste);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    fields: itemFields,
    append: appendItem,
    remove: removeItem,
  } = useFieldArray({
    control,
    name: "Skill",
  });

  if (itemFields.length === 0) {
    appendItem();
  }

  const formSubmiter = (data) => {
    console.log(data);
    
  };

  return (
    <>
      <Box bg="white" p={5} mb={5} style={{ borderRadius: "10px" }}>
        <Flex alignItems="center" gap={2}>
          <Link to="/feedback">
            <ArrowBackIcon w={6} h={6} />
          </Link>{" "}
          &nbsp;
          <Heading as="h3" size="lg" color="gray.600">
            Feedback Form
          </Heading>
        </Flex>
      </Box>
      <form onSubmit={handleSubmit(formSubmiter)}>
        <Box p={4} color="black" bg="white" style={{ borderRadius: "10px" }}>
          <Stack spacing={4}>
            <Controller
              control={control}
              name="candidate_name"
              rules={{
                required: "Please Select Candidate Name.",
              }}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { error },
              }) => (
                <FormControl isInvalid={!!error}>
                  <FormLabel color="gray.600"> Candidate Name </FormLabel>
                  <Select
                    name={name}
                    ref={ref}
                    onChange={(e) => {
                      onChange(e);
                    }}
                    onBlur={onBlur}
                    value={value}
                    options={candidateName}
                    getOptionLabel={(e) => e.label}
                    getOptionValue={(e) => e.value}
                    placeholder="Select Candidate Name"
                    closeMenuOnSelect={true}
                  />
                  <FormErrorMessage>{error && error.message}</FormErrorMessage>
                </FormControl>
              )}
            />
            <TableContainer mt={8} style={{ overflowX:"visible", overflowY:"visible" }}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th> Skills </Th>
                    <Th>  Candidate Rating </Th>      
                    <Th>  Interview Rating </Th> 
                    <Th> Action </Th>
                  </Tr>
                </Thead>
                <Tbody>
                {
                  itemFields &&
                  itemFields.map((item, index) => {
                    return (
                      <Tr key={item.id}>                        
                        <Td>         
                          <Controller
                            control={control}
                            name={`Skill.${index}.skill`}
                            rules={{
                              required: "Please Select Skill.",
                            }}
                            render={({
                              field: { onChange, onBlur, value, name, ref },
                               fieldState: { error },
                            }) => (
                              <FormControl isInvalid={errors.Skill?.[index]?.skill}>
                                
                                <Select
                                 className="z-index"
                                  name={name}
                                  ref={ref}
                                  onChange={(e) => {
                                    onChange(e);
                                  }}
                                  onBlur={onBlur} 
                                  value={value}
                                  options={skills}
                                  getOptionLabel={(e) => e.label}
                                  getOptionValue={(e) => e.value}
                                  placeholder=" Skill"
                                  closeMenuOnSelect={true}
                                  size="sm"
                                />
                                <FormErrorMessage>{errors.Skill?.[index]?.skill?.message}</FormErrorMessage>
                              </FormControl>
                            )}
                          />
                        </Td>
                        
                        <Td isNumeric>
                        <FormControl isInvalid={errors.Skill?.[index]?.canRat}>
                            
                            <Input
                              type="number"
                              placeholder="Enter Ratings"
                              {...register(`Skill.${index}.canRat`, {
                                required: "Rating is required",
                              })}
                              
                            />
                            <FormErrorMessage>
                                {errors.Skill?.[index]?.canRat?.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Td>

                        <Td isNumeric>
                        <FormControl isInvalid={errors.Skill?.[index]?.invRat}>
                            
                            <Input
                              type="number"
                              placeholder="Enter Ratings"
                              {...register(`Skill.${index}.invRat`, {
                                required: "Rating is required",
                              })}
                              
                            />
                            <FormErrorMessage>
                                {errors.Skill?.[index]?.invRat?.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Td>
                        <Td>
                          <Button colorScheme="red" size="sm" onClick={()=>removeItem(index)}>
                            Delete
                          </Button>
                        </Td>
                      </Tr>                       
                    );
                  })}

                </Tbody>
              </Table>
            </TableContainer>              
          </Stack>  
            
          <Button  colorScheme="blue" float="right" mt={5}  onClick={()=>appendItem()}> Add Skill </Button>
          <Link to={"/create_skill"}> 
          <Button  colorScheme="blue" float="right" mt={5} mr={3 }  >  New Skill </Button>  
          </Link>
           
          <Flex mt={10}>
            <Button type="submit" colorScheme="teal"> 
              Submit
            </Button>            
            &nbsp;
            <Link to="/pro_upload">
             
              <Button colorScheme="red">Back</Button> 
            </Link>
          </Flex>
        </Box>
      </form>
    </>
  );
}

export default FeedbackForm;
