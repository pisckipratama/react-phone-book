import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="card border-dark mb-3">
          <div className="card-header">Search Form</div>
          <div className="card-body text-dark">
            <form>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <input type="email" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group col-md-4">
                  <input type="password" className="form-control" placeholder="Phone" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchForm;