/**
 * Created by zeyadsaleh on 2017-05-03.
 */
import {
    UPDATE_CURRENT_QUERY_TERM,
    CLEAR_CURRENT_QUERY
} from "../constants"
const INIIAL_STATE = "";

export default function currentQuery (state = INIIAL_STATE, action)
{
    switch (action.type)
    {
        case (UPDATE_CURRENT_QUERY_TERM):
            return action.query;
        case (CLEAR_CURRENT_QUERY):
            return INIIAL_STATE;
        default:
            return state;
    }
}