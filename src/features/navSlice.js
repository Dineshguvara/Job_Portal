import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        
    value:"small",
    
  
}

export const navSlice = createSlice({
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
        }       
    }
}) 


 
export const { setNavSize} = navSlice.actions;
export   default navSlice.reducer