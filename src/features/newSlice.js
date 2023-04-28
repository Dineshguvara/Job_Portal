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
        addDistricts: (state, { payload }) => (state = { ...state, districts: payload}),
    }
}) 

 

 
export const { addDistricts, setNavSize} = newSlice.actions;
export   default newSlice.reducer