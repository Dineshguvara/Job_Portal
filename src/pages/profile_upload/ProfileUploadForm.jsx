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
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../../features/setNameSlice";
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


function ProfileUploadForm() {

  let navi = useNavigate();

  const dispatch = useDispatch();

  const{register, control, handleSubmit, formState:{errors} }= useForm();

  const { jobs } = useSelector((state) => state.SetJobId);
  const { jobTitle } = useSelector((state) => state.SetJobTitle);

  const formSubmiter =  (data) =>{   
    console.log(data);
    dispatch(setName(data));
    navi('/create_feedback');
  }  

  return (
    <>
    <Box bg="white" p={5} mb={5}  style={{ borderRadius: "10px" }}>
      <Flex alignItems='center' gap={2}  >
          <Link to="/pro_upload">
          <ArrowBackIcon w={6} h={6} /> 
          </Link> &nbsp;
          <Heading as="h3" size="lg" color="gray.600">
            Profile Upload Form
          </Heading>
          
      </Flex>
    </Box>

    <form onSubmit={handleSubmit(formSubmiter)}>
     < Box p={4} color="black" bg="white" style= {{ borderRadius: "10px" }}>
       <Stack spacing={4}>

        <FormControl isInvalid={errors.name}>
          <FormLabel color="gray.600"> Name </FormLabel>
          <Input
            type="text"
            placeholder="Enter Name Here"
            {...register("name", {
              required: "Name is required",
            })}             
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        {/* <Controller
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
          name="job_title"
          rules={{
            required: "Please Select Job Title",
          }}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
          }) => (
            <FormControl isInvalid={!!error}>
              <FormLabel color="gray.600"> Job Title </FormLabel>
              <Select
                name={name}
                ref={ref}
                onChange={(e) => {
                  onChange(e);
                }}
                onBlur={onBlur}
                value={value}
                options={jobTitle}
                getOptionLabel={(e) => e.job_title}
                getOptionValue={(e) => e.job_title}
                placeholder="Select Job Title"
                closeMenuOnSelect={true}
              />
              <FormErrorMessage>
                {error && error.message}
              </FormErrorMessage>
            </FormControl>
          )}
        />

        <FormControl isInvalid={errors.email} >
          <FormLabel color="gray.600"> Email </FormLabel>
          <Input
            type="email"
            placeholder="Enter Email Here"
            {...register("email", {
              required: "Email is required",
            })}
             
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.document} >
          <FormLabel color="gray.600"> Document </FormLabel>
          <Input
            type="file"
             
            {...register("document", {
              required: "Document is required",
            })}
             
          />
          <FormErrorMessage>
            {errors.document && errors.document.message}
          </FormErrorMessage>
        </FormControl>
          
        <Controller
          control={control}
          name="source"
          rules={{
            required: "Please Select Source",
          }}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
          }) => (
            <FormControl isInvalid={!!error}>
              <FormLabel color="gray.600"> Source </FormLabel>
              <Select
                name={name}
                ref={ref}
                onChange={(e) => {
                  onChange(e);
                }}
                onBlur={onBlur}
                value={value}
                options={sorc}
                getOptionLabel={(e) => e.label}
                getOptionValue={(e) => e.value}
                placeholder="Select Source"
                closeMenuOnSelect={true}
              />
              <FormErrorMessage>
                {error && error.message}
              </FormErrorMessage>
            </FormControl>
          )}
        /> */}
         

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

export default ProfileUploadForm;
