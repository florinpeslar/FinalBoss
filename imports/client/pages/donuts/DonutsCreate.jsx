import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import DonutsSchema from '/imports/db/donuts/schema';

export default class DonutsCreate extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        Meteor.call('donut.create', data, (err) => {
            if(!err) {
                FlowRouter.go('donuts.list');
            }
        });
    };

    render() {
        return (

            <div>
                <main>
                    <div className="container">
                        <h1 className="text-center">Create a Donut!</h1>

                        <div className="list-group">
                            <AutoForm schema={DonutsSchema} onSubmit={this.onSubmit}>
                                <AutoField name="name" className="list-group-item"/>
                                <ErrorField name="name"/>

                                <AutoField name="price" className="list-group-item"/>
                                <ErrorField name="price"/>

                                <AutoField name="isComestible" className="list-group-item"/>
                                <ErrorField name="isComestible"/>

                                <button type="submit" className="btn btn-success mt-5 pull-right">
                                    Create donut
                                </button>
                            </AutoForm>
                        </div>
                    </div>
                </main>
            </div>


        )
    }
}
