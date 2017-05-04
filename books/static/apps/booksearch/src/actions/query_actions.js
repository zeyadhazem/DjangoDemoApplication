/**
 * Created by zeyadsaleh on 2017-05-03.
 */
import {
    UPDATE_CURRENT_QUERY_TERM
} from "../constants"

import {
    updateSearchResults
} from "./results_actions"


const SERVER_BASE_URL = "http://127.0.0.1:8000/search";

export function perfomSearch (query)
{
    console.log("Performing search for " + query);

    return (dispatch) => // Fat arrow means return function dispatch
    {
        let querystring = query ? `?q=${query}` : "";

        return fetch(`${SERVER_BASE_URL}${querystring}`, {
            headers: {
                "Accept" : "application/json"
            }
        }).then((response) => {
            return response.json();
        }).then( (payload) => {
            return dispatch(updateSearchResults(payload));
        });
    }
}

export function updateQueryTerm (query)
{
    return {
        type: UPDATE_CURRENT_QUERY_TERM,
        query
    }
}