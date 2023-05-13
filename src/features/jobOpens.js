import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  jobs:[
    {
      id:1,       
      job_id:3,
      job_title:"software developer",
      skill: [
        {label:"html",value:"html"},
        {label:"css",value:"css"},
      ],      
      location: "madurai",
      description: "need good developer"
    },
    {
      id:2,       
      job_id:6,
      job_title:"ios developer",
      skill: [
        {label:"js",value:"js"},
        {label:"php",value:"php"},
      ],      
      location: "salem",
      description: "need ios developer"
    }
  ]
};

export const jobOpens = createSlice({
  name: "jobsOpen",
  initialState,
  reducers: {
    setJob: (state, { payload }) => {
      state.jobs.push(payload);
      
    },
    setJobs: (state, { payload }) => (state = { ...state, jobs: addjobs(state,payload) }),
  },
  clearState:(state, {payload})=>{
    state.jobs = payload;
  }
});
function addjobs(state,data) {
  return state.jobs.concat(data)
}
 
export const { setJob, setJobs, clearState } = jobOpens.actions;
export default jobOpens.reducer;
