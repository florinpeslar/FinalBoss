import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import DonutsSchema from '/imports/db/donuts/schema';

export default class DonutsEdit extends React.Component {
    constructor() {
        super();
        this.donutId = FlowRouter.current().params._id;
        this.state = {
            donut: null,
            loading: true
        }
    }

    componentDidMount() {
        Meteor.call('donut.find', this.donutId, (err, donut) => {
            this.setState({
                donut,
                loading: false
            })
        })
    }


    onSubmit = (data) => {
        Meteor.call('donut.edit', this.donutId, data, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            }
        });
    };

    render() {
        const {loading, donut} = this.state;
        if (loading) {
            return <div>Loading...</div>
        }
        return (
            <main>
                <h1 className="text-center">Edit Donut</h1>
                <div className="container">
                    <div className="list-group">
                        <AutoForm schema={DonutsSchema} onSubmit={this.onSubmit} model={donut}>
                            <AutoField name="name" className="list-group-item" />
                            <ErrorField name="name"/>

                            <AutoField name="price" className="list-group-item" />
                            <ErrorField name="price"/>

                            <AutoField name="isComestible" className="list-group-item" />
                            <ErrorField name="isComestible"/>

                            <button type="submit" className="btn btn-success m-5">
                                Edit donut
                            </button>
                        </AutoForm>
                    </div>
                </div>
            </main>
        )
    }
}
