import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';

class NewIdea extends Component {


    render() {
        return (
            <form>
                
                    <label> Tytuł </label>
                    <input />
                    <label> Opis </label>
                    <input />
                    <label> Kategorie </label>
                    <input />
                    <label> Szczegóły</label>
                    <inpust />
                <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
            </ form>
        );
    }
}

export default reduxForm({
    form: 'IdeaNewForm'
})(NewIdea);