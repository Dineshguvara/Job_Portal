import React, {useState, useEffect} from "react";
import {
  Box,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  Flex,
  Textarea,
  Heading
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import {  ArrowBackIcon } from "@chakra-ui/icons";
import { Select } from "chakra-react-select";
import { useSelector } from "react-redux";
 

const sorc = [
  {
    value: "naukri",
    label: "Naukri",
  },
  {
    value: "linkedin",
    label: "LinkedIn",
  },
  {
    value: "indeed",
    label: "Indeed",
  }
]


function FeedbackForm() {

  let navi = useNavigate();

  const { candidateName } = useSelector((state) => state.poste); 

  const{register, control, handleSubmit, formState:{errors} }= useForm();

  const formSubmiter =  (data) =>{   
    console.log(data);
    navi('/');
  }  
  

  return (
    <>
    <Box bg="white" p={5} mb={5}  style={{ borderRadius: "10px" }}>
      <Flex alignItems='center' gap={2}  >
          <Link to="/pro_upload">
          <ArrowBackIcon w={6} h={6} /> 
          </Link> &nbsp;
          <Heading as="h3" size="lg" color="gray.600">
            Feedback Form
          </Heading>
          
      </Flex>
    </Box>
    <form onSubmit={handleSubmit(formSubmiter)}>
     < Box p={4} color="black" bg="white" style= {{ borderRadius: "10px" }}>
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
                <FormErrorMessage>
                    {error && error.message}
                </FormErrorMessage>
                </FormControl>
            )}
        />

       </Stack>
       <Flex mt={10}>
       <Button type="submit" colorScheme="blue">
          Submit
        </Button> &nbsp;
       <Link to="/pro_upload"> <Button colorScheme="red" >Back</Button> </Link>
       </Flex>
      </Box>
    </form> 
    </>
  );
}

export default FeedbackForm;
