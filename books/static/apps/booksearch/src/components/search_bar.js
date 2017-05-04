/**
 * Created by zeyadsaleh on 2017-05-03.
 */
import React from "react";
import { connect } from "react-redux";
import {
    updateQueryTerm
} from "../actions/query_actions";


class SearchBar extends React.Component
{
    onInputChange(event){
        this.props.updateQueryTerm(event.target.value);
    }

    render()
    {
        console.log("my query", this.props.myQuery)

        return (
            <div>
                <input type="text"
                       placeholder="Search"
                       value={ this.props.myQuery }
                       onChange={event => this.onInputChange(event)}/>
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        myQuery: state.currentQuery
    };
}

const mapDispatchToProps ={
    updateQueryTerm
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);