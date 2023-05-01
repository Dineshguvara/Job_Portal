import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        
    value:"small",
    
    candidateName: [
        {
            label:"waren",
            value:"waren"
        },
        {
            label:"waren1",
            value:"waren1"
        }
    ],
    skills: [
        {
            value: 'html',
            label: 'HTML'
        },
        {
            value: 'css',
            label: 'CSS'
        },
        {
            value: 'js',
            label: 'JAVASCRIPT'
        },
    ],
}

export const newSlice = createSlice({
    name:"poste",
    initialState,
    reducers:{
        setNavSize: (state) =>{
            const index = state.value;
            if(index === "small"){
                state.value="large"
            }else{
                state.value="small"
            }            
        },      
        addSkills: (state, { payload }) => (state = { ...state, skills: addSkill(state,payload) }),
    }
}) 

function addSkill(state,data) {
    return state.skills.concat(data)
}

 
export const { addSkills, setNavSize} = newSlice.actions;
export   default newSlice.reducer