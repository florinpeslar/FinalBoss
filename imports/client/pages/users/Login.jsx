import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Login extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        const {email, password} = data;

        Meteor.loginWithPassword(email, password, (err) => {
            if (!err) {
                FlowRouter.go('donuts');
            } else {
                alert(err.reason);
            }
        });
    };

    render() {
        return (

        <div>


            <div className="container text-center">
                
                <a className="navbar-brand" href="/">
                    <img src={"img/logo.png"}/>
                </a>

                <h1>Login</h1>
                <main className="cc-main">

                    <AutoForm schema={LoginSchema} onSubmit={this.onSubmit}>
                        <AutoField name="email"/>
                        <ErrorField name="email"/>

                        <AutoField name="password" type="password"/>
                        <ErrorField name="password"/>

                        <button type="submit" className="btn btn-success">
                            Login
                        </button>
                    </AutoForm>
                </main>

            </div>
        </div>
    )
}
}

const LoginSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String}
});

export default Login;
