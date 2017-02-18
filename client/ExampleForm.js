import React from 'react';
import Form from './Form';

class ExampleForm extends Form {

    constructor(props) {
        super(props);

        this.validationRules = {
            email: 'email'
        }
    }

    render() {
        return <form action="">
            <div className="form-group row">
                <label htmlFor="example-text-input" className="col-2 col-form-label">Text</label>
                <div className="col-10">
                    <input className="form-control" name="text" type="text" value={this.state.text} onChange={(e) => this.setValue(e.target.name, e.target.value)} id="example-text-input"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="example-email-input" className="col-2 col-form-label">Email</label>
                <div className="col-10">
                    <input className="form-control" name="email" type="email" value={this.state.email} onChange={(e) => this.setValue(e.target.name, e.target.value)}
                           id="example-email-input"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="example-url-input" className="col-2 col-form-label">URL</label>
                <div className="col-10">
                    <input className="form-control" type="url" defaultValue={this.state.url} id="example-url-input"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="example-password-input" className="col-2 col-form-label">Password</label>
                <div className="col-10">
                    <input className="form-control" type="password" defaultValue={this.state.password}
                           id="example-password-input"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="example-number-input" className="col-2 col-form-label">Number</label>
                <div className="col-10">
                    <input className="form-control" type="number" defaultValue={this.state.number}
                           id="example-number-input"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="example-date-input" className="col-2 col-form-label">Date</label>
                <div className="col-10">
                    <input className="form-control" type="date" defaultValue={this.state.date} id="example-date-input"/>
                </div>
            </div>
        </form>;
    }


}

export default ExampleForm;