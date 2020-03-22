import React, { Component } from 'react';

import SearchForm from './SearchForm';
import PhoneList from '../containers/PhoneList';
import AddButton from './AddButton';
import axios from 'axios';

const API_URL = `http://localhost:3001/api/phonebooks`;

class PhoneBookBox extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] };
  }
  
  componentDidMount() {
    this.loadContacts()
  }
  
  loadContacts() {
    return axios.get(API_URL)
    .then((result) => {
      if (result.data.error) console.log(result.data.message)
      let listContact = result.data.listContact.map(contact => {
        return {...contact, status: true};
      })
      this.setState({ data: listContact })
    }).catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <div>
        <div className="card text-center">
          <div className="card-header">
            <h1>Phone Book Apps</h1>
          </div>
        </div>

        <AddButton></AddButton>
        <SearchForm></SearchForm>
        
          <PhoneList></PhoneList>
      </div>
    )
  }
}

export default PhoneBookBox;