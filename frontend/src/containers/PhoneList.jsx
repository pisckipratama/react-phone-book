import React, { Component, Fragment } from 'react';
import Post from '../components/Post';

const API_URL = `http://localhost:3001/api/phonebooks`;

class PhoneList extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => {
        this.setState({
          list: json.listContact
        })
      });
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <table className="table table-stripped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.list.map((item, index) => {
                  return <Post key={item._id} num={index + 1} name={item.name} phone={item.phone}></Post>
                })
              }
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}

export default PhoneList;