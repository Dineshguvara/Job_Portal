import { combineReducers  } from "@reduxjs/toolkit";
import posteReducer from "./navSlice"
import jobsOpenReducer from "./jobOpens"
import proUpsReducer from "./profileUpload"
 


const rootReducer = combineReducers({
    poste: posteReducer,    
    jobsOpen:jobsOpenReducer,
    proUps:proUpsReducer
});
 
export default rootReducer;