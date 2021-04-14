import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class EditForm extends Component {
    render() {
        return (
            // this div is container div , will be used with evry page
            <div className="dashboard-content-container">
               
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    return {toggleStatus}
}

export default withRouter(connect(mapStateToProps)(EditForm))