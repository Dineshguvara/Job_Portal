import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    names: [
      
    ],
 

}

 export const setNameSlice = createSlice({
    name:"SetName",
    initialState,
    reducers:{
        setName: (state, { payload }) => (state = { ...state, names: addName(state,payload) }),
      
    }
}) 

function addName(state,data) {
    
    return state.names.concat(data)
}

 
export const { setName } = setNameSlice.actions;
export default setNameSlice.reducer