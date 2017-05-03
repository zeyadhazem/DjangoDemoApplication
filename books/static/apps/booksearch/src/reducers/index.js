/**
 * Created by zeyadsaleh on 2017-05-03.
 */
import { combineReducers } from "redux";
import currentQuery from "./current_query";
import results from "./results";


const rootReducer = combineReducers ({
    results,
    currentQuery
});

export default rootReducer;