import React from "react";
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

  const { jobs } = useSelector((state) => state.jobsOpen);

  const { proUp } = useSelector((state) => state.proUps);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const itemChange = (e) => {
    setValue("email", e.email);
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
      <form key={1} onSubmit={handleSubmit(formSubmiter)}>
        <Box p={4} color="black" bg="white" style={{ borderRadius: "10px" }}>
          <Stack spacing={4}>

            <Controller
              control={control}
              name="job_id"
              rules={{
                required: "Please Select Job id",
              }}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { error },
              }) => (
                <FormControl isInvalid={!!error}>
                  <FormLabel color="gray.600"> Job Id </FormLabel>
                  <Select
                    name={name}
                    ref={ref}
                    onChange={(e) => {
                      onChange(e);

                    }}
                    onBlur={onBlur}
                    value={value}
                    options={jobs}
                    getOptionLabel={(e) => e.job_id}
                    getOptionValue={(e) => e.job_id}
                    placeholder="Select Job Id"
                    closeMenuOnSelect={true}
                  />
                  <FormErrorMessage>
                    {error && error.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="name"
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
                      itemChange(e);
                    }}
                    onBlur={onBlur}
                    value={value}
                    options={proUp}
                    getOptionLabel={(e) => e.name}
                    getOptionValue={(e) => e.name}
                    placeholder="Select Candidate Name"
                    closeMenuOnSelect={true}
                  />
                  <FormErrorMessage>{error && error.message}</FormErrorMessage>
                </FormControl>
              )}
            />

            <TableContainer mt={10}>
              <Table variant='simple' >
                <Thead>
                  <Tr>

                    <Th>  Primary Skills </Th>
                    <Th>  Candidate Rating </Th>
                    <Th>  Interview Rating </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr   >
                    <Td>
                      <FormControl isInvalid={errors.email}>
                        <FormLabel color="gray.600"> Job Title </FormLabel>
                        <Input
                          type="text"
                          placeholder="Enter Job Title"
                          {...register("email", {
                            required: " Job Title is required",
                          })}
                        />
                        <FormErrorMessage>
                          {errors.email && errors.email.message}
                        </FormErrorMessage>
                      </FormControl>

                    </Td>
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
                  {/* {proUp &&
                        proUp.map((item, index)=>{
                        return( 
                          <>
                            {item.job_id.skill  && 
                              item.job_id.skill.map((pet, index) => {
                              return (
                                 <Tr key={index} >
                                    <Td>                                            
                                    <FormControl  >
                                        <Input
                                         
                                          name="skill"        
                                        
                                        />
                                        
                                      </FormControl>
                                    </Td>
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
                      } */}
                </Tbody>
              </Table>
            </TableContainer>
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
