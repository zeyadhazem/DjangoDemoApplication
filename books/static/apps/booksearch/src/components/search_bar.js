/**
 * Created by zeyadsaleh on 2017-05-03.
 */
import React from "react";
import { connect } from "react-redux"
import {
    updateQueryTerm
} from "../actions/query_actions"


class SearchBar extends React.Component
{
    onInputChange(event){
        this.props.updateQueryTerm(event.target.value);
    }

    render()
    {
        return (
            <div>
                <input type="text" placeholder="Search" onChange={event => this.onInputChange(event)}/>
            </div>
        );
    }

}

export default SearchBar