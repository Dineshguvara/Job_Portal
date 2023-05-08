import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    Skills: [
        {
            skill:[{
                label:"sucess",
                value:"sucess",
            },
            {
                label:"done",
                value:"done",
            }
            
            ]
        },
        // {
        
        // label:"sucess",
        // value:"sucess",
         
        // },
        // {
        
        //     label:"sucess1",
        //     value:"sucess1",
             
        // }

      
    ],
}

export const skillsSlice = createSlice({
    name:"SetSkill",
    initialState,
    reducers:{
        setSkills: (state, { payload }) => (state = { ...state, Skills:addSkill(state,payload) }),
       
    } 
}) 

 
function addSkill(state,data) {
    return state.Skills.concat(data)
}

export const { setSkills } = skillsSlice.actions;
export default skillsSlice.reducer