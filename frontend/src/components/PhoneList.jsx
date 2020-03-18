import React, { Component } from 'react';

class PhoneList extends Component {
  render() {
    return (
      <div className="container">
        <table className="table table-stripped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Piscki</td>
              <td>081394595415</td>
              <td>
                <a href="https://pisckipratama.github.io" className="btn btn-info"><i className="fa fa-edit"></i> Edit</a> &nbsp;
                <a href="https://pisckipratama.github.io" className="btn btn-danger"><i className="fa fa-trash"></i> Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default PhoneList;