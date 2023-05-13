import { combineReducers  } from "@reduxjs/toolkit";
import posteReducer from "./navSlice"
import jobsOpenReducer from "./jobOpens"
import proUpsReducer from "./profileUpload"
import feedBackReducer from "./feedBack" 


const rootReducer = combineReducers({
    poste: posteReducer,    
    jobsOpen:jobsOpenReducer,
    proUps:proUpsReducer,
    feedBack:feedBackReducer
});
 
export default rootReducer;