import  React, {useState, useEffect} from "react";
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
import { useNavigate, Link } from "react-router-dom";
import {  ArrowBackIcon } from "@chakra-ui/icons";
import { Select } from "chakra-react-select";
import { useDispatch } from "react-redux";
import { setId } from "../../features/jobIdSlice";
import { setJobTitle } from "../../features/jobTitleSlice";
import { setSkills } from "../../features/skillsSlice";

const Skills = [
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

function EmployeeForm() {
 
  let navi = useNavigate();

  const{register, control,  handleSubmit, formState:{errors} }= useForm();

  const dispatch = useDispatch();

  const formSubmiter = async (data) =>{          
     
      dispatch(setId(data));
      dispatch(setJobTitle(data));
      dispatch(setSkills(data));
      
      navi("/create_feedback")
  }  
  

  return (
    <>
    < Box bg="white" p={5} mb={5}  style={{ borderRadius: "10px" }}>
      <Flex alignItems='center' gap={2}  >
          <Link to="/job_open">
          <ArrowBackIcon w={6} h={6} /> 
          </Link> &nbsp;
          <Heading as="h3" size="lg" color="gray.600">
            Job Opening Form
          </Heading>          
      </Flex>
    </Box>
    <form onSubmit={handleSubmit(formSubmiter)}>
     < Box p={4} color="black" bg="white" style= {{ borderRadius: "10px" }}>
       <Stack spacing={4}>
      
       {/* <FormControl isInvalid={errors.job_id}>
          <FormLabel color="gray.600"> Job Id </FormLabel>
          <Input
            type="text"
            placeholder="Enter Job Id"
            {...register("job_id", {
              required: " Job id is required",
            })}
          />
          <FormErrorMessage>
            {errors.job_id && errors.job_id.message}
          </FormErrorMessage>
        </FormControl>

       <FormControl isInvalid={errors.job_title}>
          <FormLabel color="gray.600"> Job Title </FormLabel>
          <Input
            type="text"
            placeholder="Enter Job Title"
            {...register("job_title", {
              required: " Job Title is required",
            })}
            
          />
          <FormErrorMessage>
            {errors.job_title && errors.job_title.message}
          </FormErrorMessage>
        </FormControl> */}

        <Controller
          control={control}
          name="skill"
          rules={{
            required: "Please Select Skills",
          }}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
          }) => (
            <FormControl isInvalid={!!error}>
              <FormLabel color="gray.600"> Primary Skills </FormLabel>
              <Select
              
                name={name}
                ref={ref}
                onChange={(e) => {
                  onChange(e);
                }}
                onBlur={onBlur}
                value={value}
                options={Skills}
                getOptionLabel={(e) => e.label}
                getOptionValue={(e) => e.value}
                placeholder="Select Skill"
                closeMenuOnSelect={true}
                isMulti
              />
              <FormErrorMessage>
                {error && error.message}
              </FormErrorMessage>
            </FormControl>
          )}
        />

        {/* <FormControl isInvalid={errors.location}>
          <FormLabel color="gray.600"> Location </FormLabel>
          <Input
            type="text"
            placeholder="Enter Location"
            {...register("location", {
              required: "Location is required",
            })}
            
          />
          <FormErrorMessage>
            {errors.location && errors.location.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.description}>
          <FormLabel color="gray.600"> Description </FormLabel>
          <Textarea
            type="text"
            placeholder="Enter Description"
            {...register("description", {
              required: "Description is required",
            })}
            
          />
          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>
        </FormControl> */}

       </Stack>
       <Flex mt={10}>
       <Button type="submit" colorScheme="blue">
           Submit
         </Button> &nbsp;
       <Link to="/job_open"> <Button colorScheme="red" >Back</Button> </Link>
       </Flex>
      </Box>
    </form> 
    </>
  );
}

export default EmployeeForm;
