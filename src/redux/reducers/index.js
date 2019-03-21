import { combineReducers } from "redux";
import agencies from "./agencies";
import launches from './launches';
import rockets from './rockets';
import keys from './keys';

export default combineReducers({ 
    agencies,
    launches,
    rockets,
    keys
});