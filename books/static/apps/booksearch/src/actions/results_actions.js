/**
 * Created by zeyadsaleh on 2017-05-04.
 */
import {
    UPDATE_SEARCH_RESULTS
} from "../constants"


export function updateSearchResults (results)
{
    return {
        type: UPDATE_SEARCH_RESULTS,
        results
    }
}
