import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    jobTitle: [
      
   ],

}

 export const jobTitleSlice = createSlice({
    name:"SetJobTitle",
    initialState,
    reducers:{
        setJobTitle: (state, { payload }) => (state = { ...state, jobTitle: addJobTitle(state,payload) }),
    }
}) 

 
function addJobTitle(state,data) {
    return state.jobTitle.concat(data)
}

export const { setJobTitle } = jobTitleSlice.actions;
export default jobTitleSlice.reducer