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
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import {  ArrowBackIcon } from "@chakra-ui/icons";
 


function EmployeeForm() {
 
  let navi = useNavigate();

    const [jobTitle, setJobTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [primarySkill, setPrimarySkill] = useState("");
 

  const{register, handleSubmit, formState:{errors} }= useForm();

  const { empid } = useParams()    

  useEffect(() => {
    if(empid){
      fetch("http://localhost:8002/jobOpen/" + empid).then((res)=>{
        return res.json();
      }).then((resp)=>{         
        setJobTitle(resp.job_title);
        setDescription(resp.description);
        setLocation(resp.location);       
      }).catch((err)=>{
        console.log(err.message);
      })
    }
    }, [])    

    const formSubmiter = async (data) =>{   
       
      if (empid) {
        fetch("http://localhost:8002/jobOpen/"+ empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((res)=>{      
         navi("/job_open")
      }).catch((err)=>{
        console.log(err.message)
      })
    } else {
      fetch("http://localhost:8002/jobOpen",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((resp)=>{      
         navi("/job_open")
      }).catch((err)=>{
        console.log(err.message)
      })
      
    }
  }  
  

  return (
    <>
    <Box bg="white" p={5} mb={5}  style={{ borderRadius: "10px" }}>
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
      
       <FormControl isInvalid={errors.job_title}>
          <FormLabel color="gray.600"> Job Title </FormLabel>
          <Input
            type="text"
            placeholder="Enter Job Title"
            {...register("job_title", {
              required: " Job Title is required",
            })}
            value={jobTitle}
              onChange={e=>setJobTitle(e.target.value)}
          />
          <FormErrorMessage>
            {errors.job_title && errors.job_title.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.primary_skill}>
          <FormLabel color="gray.600"> Primary Skills </FormLabel>
          <Textarea
            type="text"
            placeholder="Enter Primary Skills"
            {...register("primary_skill", {
              required: "Primary Skills is required",
            })}
            value={primarySkill}
            onChange={e=>setPrimarySkill(e.target.value)}
          />
          <FormErrorMessage>
            {errors.primary_skill && errors.primary_skill.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.location}>
          <FormLabel color="gray.600"> Location </FormLabel>
          <Textarea
            type="text"
            placeholder="Enter Location"
            {...register("location", {
              required: "Location is required",
            })}
            value={location}
            onChange={e=>setLocation(e.target.value)}
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
            value={description}
            onChange={e=>setDescription(e.target.value)}
          />
          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>
        </FormControl>

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
