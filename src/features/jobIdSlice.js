import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    jobs: [
         
      
   ],

}

 export const jobIdSlice = createSlice({
    name:"SetJobId",
    initialState,
    reducers:{
        setId: (state, { payload }) => (state = { ...state, jobs: addJobId(state,payload) }),
    }
}) 

 
function addJobId(state,data) {
    return state.jobs.concat(data)
}

export const { setId } = jobIdSlice.actions;
export default jobIdSlice.reducer