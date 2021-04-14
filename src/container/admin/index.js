import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import CreateForm from './createForm/create';
import {ProtectedRoute} from '../../routes/ProtectedRoute'
import listingData from './listingData/listingData';
import EditForm from './editForm/editForm';

class AdminIndex extends Component {
    render() {
        return (
                <div className="dashboard-content-container">
                    <Switch>
                        <Route exact path="/admin/create" component={CreateForm} />
                        <Route path="/admin/listing" component={listingData} />
                        <ProtectedRoute path='/admin/EmployeeForm' component={EditForm}/>
                    </Switch>
                </div>
        )
    }
}
function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    const {auth} = state.LoginReducer;
    return {toggleStatus,auth}
}

export default withRouter(connect(mapStateToProps)(AdminIndex));