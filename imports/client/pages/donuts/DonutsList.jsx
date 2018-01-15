import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Donuts} from '/imports/db';

class DonutsList extends React.Component {
    constructor() {
        super();
        this.removeDonut = this.removeDonut.bind(this);
        this.editDonut = this.editDonut.bind(this);
    }

    isDonutOwner = (donut) => {
        return donut.userId === Meteor.userId()
    };

    editDonut = (_id) => {
        FlowRouter.go('donuts.edit', {_id: _id});
    };

    removeDonut = (_id) => {
        Meteor.call('donut.remove', _id);
    };

    render() {
        const {isLoading, donuts} = this.props;

        if (isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h1 className="text-center"> List of all Donuts!</h1>
                <div className="text-center">
                    <a className="btn btn-success" href="" onClick={() => FlowRouter.go('donuts.create')}>Create a donut</a>
                </div>
                {
                    donuts.map(donut => {
                        return (
                            <div key={donut._id}>
                                <div className="container">
                                    <div className="m-10">
                                        <p className="list-group-item">Name: {donut.name}</p>
                                        <p className="list-group-item">Price: {donut.price}</p>
                                        <p className="list-group-item list-group-item-danger">Is Comestible? : {donut.isComestible ? 'Comestible' : 'Not Comestible'}</p>
                                        {this.isDonutOwner(donut) &&
                                            <a className="btn btn-warning m-5" href="" onClick={() => this.editDonut(donut._id)}>Edit</a>}
                                            {this.isDonutOwner(donut) &&
                                                <a className="btn btn-danger pull-right m-5" href="" onClick={() => this.removeDonut(donut._id)}>Remove</a>}
                                            </div>
                                        </div>
                                    </div>
                                )
                    })
                }
                </div>
                )
            }
        }

        export default withTracker(() => {
            const handle = Meteor.subscribe('donuts');

            return {
                loading: !handle.ready(),
                donuts: Donuts.find().fetch()
            }
        })(DonutsList);
