import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Register extends React.Component {
    constructor() {
        super();

    }

    onSubmit = (data) => {
        const {email, password} = data;

        Accounts.createUser({
            email,
            password,
        }, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            }
            else {
                alert(err.reason);
            }
        })
    };

    render() {
        return (
            <div>
                <div className="container text-center">
                    <a className="navbar-brand" href="/">
                    <img src={"img/logo.png"}/>
                </a>

                <main>
                    <h1>Register Form</h1>
                    <div>
                        <AutoForm schema={RegisterSchema} onSubmit={this.onSubmit}>
                            <AutoField name="email"/>
                            <ErrorField name="email"/>

                            <AutoField name="password" type="password"/>
                            <ErrorField name="password"/>

                            <AutoField name="confirm_password" type="password"/>
                            <ErrorField name="confirm_password"/>

                            <button type="submit" className="btn btn-success">
                                Register
                            </button>
                        </AutoForm>
                    </div>
                </main>
            </div>
        </div>
    )
}
}

const RegisterSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String},
    confirm_password: {
        type: String,
        custom() {
            if (this.value !== this.field('password').value) {
                return 'passwordMismatch';
            }
        }
    }
});

export default Register;
