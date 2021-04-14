import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Form, Input, Button } from 'antd';
import { addAdminData } from '../../../store/actions/adminActions';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

class CreateForm extends Component {
    onFinish(body) {
        this.props.dispatch(addAdminData(body))
    }
    render() {
        return (
            // this div is container div , will be used with evry page
            <div className="dashboard-content-container">
                <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={this.onFinish.bind(this)}
    //   onFinishFailed={onFinishFailed}
    >
    <Form.Item
        label="User ID"
        name="userId"
        rules={[{ required: true, message: 'Please enter data in Body!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please input your Title!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Body"
        name="body"
        rules={[{ required: true, message: 'Please enter data in Body!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    return {toggleStatus}
}

export default withRouter(connect(mapStateToProps)(CreateForm));