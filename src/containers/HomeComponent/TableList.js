import React, { useState } from 'react';
import './Home.css'
import { TimePicker } from 'antd';
import dayjs from 'dayjs';

const TableList = () => {
  const onchangeTime = () => {
    console.log("True");
  };
  return (
    <div>
      <div className='container daily-head'>
        <div className='container'>
          <div className='row'>
            <div className='col-7'>
              <h1 className='title'>Daily planner</h1>
            </div>
            <div className='col-5 month'>
              <div className="container">
                <div className="row">
                  <div className="col"> 
                    <button className="btn-month">JAN</button>
                  </div>
                  <div className="col">
                    <button className="btn-month">FEB</button>
                  </div>
                  <div className="col">
                    <button className="btn-month">MAR</button>
                  </div>
                  <div className="col">
                    <button className="btn-month">APR</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button className="btn-month">MAY</button>
                  </div>
                  <div className="col">
                    <button className="btn-month">JUN</button>
                  </div>
                  <div className="col">
                    <button className="btn-month">JUL</button>
                  </div>
                  <div className="col">
                    <button className="btn-month">AUG</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button className="btn-month">SEB</button>
                  </div>
                  <div className="col">
                    <button className="btn-month">OCT</button>
                  </div>
                  <div className="col">
                    <button className="btn-month">NOV</button>
                  </div>
                  <div className="col">
                    <button className="btn-month">DEC</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-6 mood'>
              <p>Mood</p>
            </div>
            <div className='col-6 day'>
              <div className='col day-text'>DATE : </div>
              <div className='col'><button className="btn-month">S</button></div>
              <div className='col'><button className="btn-month">M</button></div>
              <div className='col'><button className="btn-month">T</button></div>
              <div className='col'><button className="btn-month">W</button></div>
              <div className='col'><button className="btn-month">T</button></div>
              <div className='col'><button className="btn-month">F</button></div>
              <div className='col'><button className="btn-month">S</button></div>
            </div>
          </div>

        </div>
      </div>
      <div className='container'>
        
        {/* ส่วนของ body */}
        {/* <div className='table-body'>
          <table className='table-list'>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">List to do</th>
                <th scope="col">Start</th>
                <th scope="col">End</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <input type='checkbox' />
                </th>
                <td></td>
                <td><TimePicker onChange={onchangeTime} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} /></td>
                <td><TimePicker onChange={onchangeTime} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} /></td>
              </tr>
              <tr>
                <th scope="row">
                  <input type='checkbox' />
                </th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">
                  <input type='checkbox' />
                </th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  )
};

export default TableList;