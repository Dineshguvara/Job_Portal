import { combineReducers  } from "@reduxjs/toolkit";
import posteReducer from "./navSlice"
import SetNameReducer from "./setNameSlice"
import SetJobIdReducer from "./jobIdSlice"
import SetJobTitleReducer from "./jobTitleSlice";
import SetSkillReducer from "./skillsSlice";

const rootReducer = combineReducers({
    poste: posteReducer,
    SetName: SetNameReducer,
    SetJobId:SetJobIdReducer,
    SetJobTitle:SetJobTitleReducer,
    SetSkill:SetSkillReducer
});
 
export default rootReducer;