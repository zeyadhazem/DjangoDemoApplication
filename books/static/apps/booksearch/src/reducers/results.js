import {
    UPDATE_SEARCH_RESULTS
} from "../constants";

const INITIAL_STATE = null;

export default function results (state = INITIAL_STATE, action)
{
    switch (action.type)
    {
        case (UPDATE_SEARCH_RESULTS):
            return [];
        default:
            return state;
    }
}