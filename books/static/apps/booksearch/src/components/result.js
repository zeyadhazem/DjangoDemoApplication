/**
 * Created by zeyadsaleh on 2017-05-03.
 */
import React from "react";

const BookResultType = ({resultProp}) =>
{
    return (
        <div className="book-result-type">
            <h3><a href={`/books/${ resultProp.pk }`}>
                { resultProp.title_s }
                </a> by { resultProp.author_s } (Book)
            </h3>
        </div>
    );
};

const AuthorResultType = ({resultProp}) =>
{
    return (
        <div className="author-result-type">
            <h3><a href={`/authors/${ resultProp.pk }`}>
                { resultProp.last_name_s }, { resultProp.first_name_s }
            </a>
                {/*by { resultProp.author_s } (Book)*!/*/}
            </h3>
        </div>
    );
};




class Result extends React.Component
{
    _renderResultType ()
    {
        switch (this.props.result.type)
        {
            case ("book"):
                return <BookResultType resultProp={ this.props.result }/>;
            case ("author"):
                return <AuthorResultType resultProp={ this.props.result }/>;
            default:
                return <div>Unknown Result Type</div>
        }
    }

    render()
    {
        return (
            <div className="actual-result">
                    { this._renderResultType() }
            </div>
        );
    }

}

export default Result