import React, { Component } from 'react';
import PhoneList from '../containers/PhoneList';
import PhoneForm from '../containers/PhoneForm';

export default class PhoneBox extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header text-center">
            PHONES BOOK
          </div>
          <div className="card-body">
            <PhoneList />
            <PhoneForm />
          </div>
          <div className="card-footer text-center">
            Dibuat dengan Cinta oleh Piscki F. Pratama
          </div>
        </div>
      </div>
    )
  }
}