import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Table, Space } from 'antd';
import { getAdminData } from '../../../store/actions/adminActions';

const columns = [
  {
    title: 'User ID',
    dataIndex: 'userid',
    key: 'userid',
  },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Edit</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  
class ListingData extends Component {
    
  componentDidMount() {
    this.props.dispatch(getAdminData());
  }
    render() {
      let adminTableData=[];
      if(this.props.adminList.data && this.props.adminList.data.length >0) {
        this.props.adminList.data.map((data) => {
          adminTableData.push({userid:data.id,name:data.title})

        })
      }
        return (
            // this div is container div , will be used with evry page
            <div className="dashboard-content-container">
                <Table columns={columns} dataSource={adminTableData} />
            </div>
        )
    }
}

function mapStateToProps(state) {
  const {isPageLoading, successMessage, errorMessage, adminList, blockedUser} = state.appReducer;
  return { isPageLoading, successMessage, errorMessage, adminList, blockedUser };
}

export default withRouter(connect(mapStateToProps)(ListingData))