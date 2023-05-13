import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  feeds:[
    
  ]
};

export const feedBack = createSlice({
  name: "feedBack",
  initialState,
  reducers: 
   {
    setFeed: (state, { payload }) => {
    state.feeds.push(payload);
    },

    setFeeds: (state, { payload }) => (state = { ...state, feeds: addfeeds(state,payload) })
   },
   
});
function addfeeds(state,data) {
  return state.feeds.concat(data)
}
 
export const { setFeed, setFeeds } = feedBack.actions;
export default feedBack.reducer;
