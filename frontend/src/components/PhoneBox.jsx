import React, { Component } from 'react';
import PhoneList from '../containers/PhoneList';
import PhoneForm from '../containers/PhoneForm';

export default class PhoneBox extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="card">
          <div className="card-header text-center">
            <h1> <i className="fa fa-address-book"></i> Phones Book App</h1>
          </div>
          <div className="card-body">
            <PhoneForm /> <br/>
            <PhoneList />
          </div>
          <div className="card-footer text-center">
            Dibuat dengan Cinta oleh Piscki F. Pratama
          </div>
        </div>
      </div>
    )
  }
}