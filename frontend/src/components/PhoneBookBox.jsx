import React, { Component } from 'react';

import SearchForm from './SearchForm';
import PhoneList from './PhoneList';
import AddButton from './AddButton';

class PhoneBookBox extends Component {
  render() {
    return (
      <div>
        <div class="card text-center">
          <div class="card-header">
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