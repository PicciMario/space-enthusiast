import { combineReducers } from "redux";
import agencies from "./agencies";
import launches from './launches';
import rockets from './rockets';

export default combineReducers({ 
    agencies,
    launches,
    rockets
});