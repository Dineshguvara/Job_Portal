import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    Skills: [
        {
           skill:
           {
            label:"none",
            value:"none"
           } ,

        }
      
   ],

}

 export const skillsSlice = createSlice({
    name:"SetSkill",
    initialState,
    reducers:{
        setSkills: (state, { payload }) => (state = { ...state, Skills: addSkill(state,payload) }),
        
    }
}) 

 
function addSkill(state,data) {
    return state.Skills.skill.concat(data)
}

export const { setSkills } = skillsSlice.actions;
export default skillsSlice.reducer