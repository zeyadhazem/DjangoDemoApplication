/**
 * Created by zeyadsaleh on 2017-05-03.
 */
import {
    UPDATE_SEARCH_RESULTS
} from "../constants"
const INIIAL_STATE = [];


export default function results (state = INIIAL_STATE, action)
{
    switch (action.type)
    {
        case (UPDATE_SEARCH_RESULTS):
            return action.results;
        default:
            return state;
    }
}