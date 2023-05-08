import React  from "react";
import {
  TableContainer,
  Table,
  Tr,
  Th,
  Td,
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
  Thead,
  Tbody,
  
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Select } from "chakra-react-select";
import { useSelector, useDispatch } from "react-redux";
 

function FeedbackForm() {

  let navi = useNavigate();

  const dispatch = useDispatch();

  const { names } = useSelector((state) => state.SetName);

  const { Skills } = useSelector((state) => state.SetSkill);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

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
      <form key={1} onSubmit={handleSubmit(formSubmiter)}>
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
                    options={names}
                    getOptionLabel={(e) => e.name}
                    getOptionValue={(e) => e.name}
                    placeholder="Select Candidate Name"
                    closeMenuOnSelect={true}
                  />
                  <FormErrorMessage>{error && error.message}</FormErrorMessage>
                </FormControl>
              )}
            />            

            <TableContainer  mt={10}>
              <Table variant='simple' > 
                  <Thead>
                    <Tr>                      
                       
                      <Th>  Primary Skills </Th>
                      <Th>  Candidate Rating </Th>      
                      <Th>  Interview Rating </Th>                                                                           
                    </Tr>
                  </Thead>
                  <Tbody>  
                      {Skills &&
                        Skills.map((item, index)=>{
                        return( 
                          <>
                            {item.skill.map((pet, index) => {
                              return (
                                 <Tr key={index} >
                                    <Td> {pet.label}</Td>
                                    <Td>
                                      <FormControl isInvalid={errors.can_rate}>                                      
                                        <Input
                                          type="text"
                                          placeholder="Enter Candidate Rating"
                                          {...register("can_rate", {
                                            required: "Candidate Rating is required",
                                          })}                                        
                                        />
                                        <FormErrorMessage>
                                          {errors.can_rate && errors.can_rate.message}
                                        </FormErrorMessage>
                                      </FormControl>  
                                    </Td>
                                    <Td> 
                                      <FormControl isInvalid={errors.inv_rate}>                          
                                        <Input
                                          type="text"
                                          placeholder="Enter Interviewer Rating"
                                          {...register("inv_rate", {
                                            required: "Interviewer Rating is required",
                                          })}                              
                                        />
                                        <FormErrorMessage>
                                          {errors.inv_rate && errors.inv_rate.message}
                                        </FormErrorMessage>
                                      </FormControl>
                                    </Td>
                                 </Tr>
                              );
                            })}
                          </>
                         )     
                        })                         
                      }
                  </Tbody>                        
              </Table>
            </TableContainer>

          {/* <Controller
            control={control}
            name="skills"
            rules={{
              required: "Please Select Skills",
            }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error}>
                <FormLabel color="gray.600">  Primary Skills </FormLabel>
                <Select
                  name={name}
                  ref={ref}
                  onChange={(e) => {
                    onChange(e);
                  }}
                  onBlur={onBlur}
                  value={value}
                  options={Skills}
                  getOptionLabel={(e) => e.skill.label}
                  getOptionValue={(e) => e.skill.value}
                  placeholder="Select Skills"
                  closeMenuOnSelect={true}
                  isMulti
                />
                <FormErrorMessage>
                  {error && error.message}
                </FormErrorMessage>
              </FormControl>
            )}
          /> 

          <FormControl isInvalid={errors.can_rate}>
            <FormLabel color="gray.600"> Candidate Rating </FormLabel>
            <Input
              type="text"
              placeholder="Enter Candidate Rating"
              {...register("can_rate", {
                required: "Candidate Rating is required",
              })}
              
            />
            <FormErrorMessage>
              {errors.can_rate && errors.can_rate.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.inv_rate}>
            <FormLabel color="gray.600"> Interviewer Rating </FormLabel>
            <Input
              type="text"
              placeholder="Enter Interviewer Rating"
              {...register("inv_rate", {
                required: "Interviewer Rating is required",
              })}
              
            />
            <FormErrorMessage>
              {errors.inv_rate && errors.inv_rate.message}
            </FormErrorMessage>
          </FormControl> */}
      
          </Stack >
          <Flex mt={10}>
            <Button type="submit" colorScheme="teal">
              Submit
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Link to="/pro_upload">
              <Button colorScheme="red">Back</Button>
            </Link>
          </Flex>
        </Box >
      </form >
    </>
  );
}



export default FeedbackForm;
