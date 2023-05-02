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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Select } from "chakra-react-select";
import { useSelector, useDispatch } from "react-redux";
import { addSkills } from "../../features/newSlice";
 
function FeedbackForm() {

  let navi = useNavigate();

  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { skills, candidateName } = useSelector((state) => state.poste);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  }  = useForm({
    mode: "onBlur",
  });
   
  const {
    register: registers,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  }  = useForm();

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

  const formSubmiter2 =  (data) => {
    console.log(JSON.stringify(data));
    dispatch(addSkills(data));
    onClose();
};

  const formSubmiter = (data) => {
    console.log(JSON.stringify(data));
    
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
      <form key={1}  onSubmit={handleSubmit(formSubmiter)}>
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
            
          <Button  colorScheme="blue" float="right" mt={5}  onClick={()=>appendItem()}> Add  Skill </Button>
          {/* <Link to={"/create_skill"}> 
          <Button  colorScheme="blue" float="right" mt={5} mr={3 }  >  New Skill </Button>  
          </Link> */}
          
          <Button  colorScheme="blue" float="right" mt={5} mr={3 } onClick={onOpen} > Create  Skill </Button>  
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>               
              <ModalCloseButton />

              <ModalBody>
                <form key={2}  onSubmit={handleSubmit2(formSubmiter2)}>
                  <Box p={4} color="black" bg="white" style={{ borderRadius: "10px" }}>
                      <Stack spacing={4}>                   

                      <FormControl isInvalid={errors2.label}>
                          <FormLabel color="gray.600"> Name </FormLabel>
                          <Input
                          type="text"
                          placeholder="Label"
                          {...registers("label", {
                              required: "Enter Label",
                          })}
                          />
                          <FormErrorMessage>
                          {errors2.label && errors2.label.message}
                          </FormErrorMessage>
                      </FormControl>   

                      <FormControl isInvalid={errors2.value}>
                          <FormLabel color="gray.600"> Value </FormLabel>
                          <Input
                          type="text"
                          placeholder="Value"
                          {...registers("value", {
                              required: "Enter Value",
                          })}
                          />
                          <FormErrorMessage>
                          {errors2.value && errors2.value.message}
                          </FormErrorMessage>
                      </FormControl>     
                      <Button colorScheme='green' type="submit" > Save </Button> &nbsp;               
                      </Stack>
                  </Box>
                </form>
              </ModalBody>

              {/* <ModalFooter>               
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>               
              </ModalFooter> */}
            </ModalContent>
          </Modal>

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
