import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  proUp:[
    
  ]
};

export const ProfileUpload = createSlice({
  name: "proUps",
  initialState,
  reducers: {
    setPro: (state, { payload }) => {
      state.proUp.push(payload);
      console.log(payload)
    },
    setPros: (state, { payload }) => (state = { ...state, proUp: addPros(state,payload) }),
  },
});
function addPros(state,data) {
  return state.proUp.concat(data)
}
 
export const { setPro, setPros } = ProfileUpload.actions;
export default ProfileUpload.reducer;
