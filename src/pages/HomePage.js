import React, { useState,Component } from 'react';
import { List, Table, TimePicker } from 'antd';
import dayjs from 'dayjs';
import TableList from '../containers/HomeComponent/TableList';
import ListBody from '../containers/HomeComponent/ListBody';

class Home extends React.Component {
  componentDidMount(){
    document.body.className = 'body-home';
  }
  render(){
    return(
      <div>
        <TableList/>
        <ListBody/>
      </div>
    );
  }
}
export default Home;


