import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './common/Layout';
import Dashboard from './pages/Dashboard';

import JobOpening from './pages/job_openings/JobOpening';
import JobOpeningForm from './pages/job_openings/JobOpeningForm';

import ProfileUpload from './pages/profile_upload/ProfileUpload';
import ProfileUploadForm from './pages/profile_upload/ProfileUploadForm';

import Feedback from './pages/feedback/Feedback';
import FeedbackForm from './pages/feedback/FeedbackForm'
import AddSkill from './pages/feedback/Skill';

function App() {
  return (
    <>
     <ChakraProvider>
      <Routes>
        <Route path='/' element={<Layout/>} >              
          <Route index  element={<Dashboard/>} />  

          <Route path='/job_open'  element={<JobOpening/>} />  
          <Route path='/create_job_open'  element={<JobOpeningForm/>} />  
            
          <Route path='/pro_upload'  element={<ProfileUpload/>} />   
          <Route path='/create_pro_upload'  element={<ProfileUploadForm/>} />  
           
          <Route path='/feedback'  element={<Feedback/>} />  
          <Route path='/create_feedback'  element={<FeedbackForm/>} />  
          <Route path='/create_skill'  element={<AddSkill/>} />  

        </Route>
      </Routes>
     </ChakraProvider>
    </>
  );
}

export default App;
