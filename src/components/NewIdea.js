
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import  database from '../database';

class NewIdea extends Component {

    renderFields(field){
        return(
            <div>
                <label> {field.title} </label>
                <input
                type="text"
                {...field.input}
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
        database.ref('ideas').push(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                <Field
                title="Tytuł"
                name="title"
                component={this.renderFields}
                />
                <Field
                title="Opis"
                name="description"
                component={this.renderFields}
                />
                <Field
                title="Kategoria"
                name="category"
                component={this.renderFields}
                />
                <Field
                title="Szczegóły"
                name="detail"
                component={this.renderFields}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
            </ form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title){
        errors.title="Podaj tytuł";
    }

    return errors;

}

export default reduxForm({
    validate: validate,
    form: 'IdeaNewForm'
})(NewIdea);