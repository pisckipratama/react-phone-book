import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postPhone } from '../actions'

class PhoneForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Name: "",
      Phone: "",
      id: "",
      showForm: false,
      showSearch: false,
      edit: false
    }

    this.handleIDChange = this.handleIDChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIDChange(event) {
    this.setState({ id: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ Name: event.target.value });
  }

  handlePhoneChange(event) {
    this.setState({ Phone: event.target.value })
  }

  handleSubmit(event) {
    if (this.state.id && this.state.Name && this.state.Phone) {
      this.props.postPhone(this.state.id, this.state.Name, this.state.Phone)
      this.setState({ id: "", Name: "", Phone: "" });
    }
    event.preventDefault();
  }

  showForm() {
    return (
      <div>
        <div className="card w-50">
          <div className="card-header">
            <h6> <i className="fa fa-plus"></i> Add Contact</h6>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label htmlFor="id" className="col-sm-2 col-form-label">ID</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="id" name="id" value={this.state.id} onChange={this.handleIDChange} placeholder="ID" />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="Name" name="Name" value={this.state.Name} onChange={this.handleNameChange} placeholder="Name" />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="Phone" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="Phone" name="Phone" value={this.state.Phone} onChange={this.handlePhoneChange} placeholder="Phone" />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary">Add</button> &nbsp;
                  <button className="btn btn-danger" onClick={() => this.setState({ showForm: false })}>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {!this.state.showForm &&
          <button className="btn btn-info rounded-pill" onClick={() => this.setState({ showForm: true })}> <i className="fa fa-user-plus"></i> Create Contact</button>
        }
        {this.state.showForm ? this.showForm() : null}
        <br /> <br />
        <div className="card w-50">
          <div className="card-header">
            <h6><i className="fa fa-search"></i> Search</h6>
          </div>
          <div className="card-body">
            <form>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div class="col">
                  <input type="text" className="form-control" placeholder="Last name" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  postPhone: (id, Name, Phone) => dispatch(postPhone(id, Name, Phone))
})

export default connect(
  null,
  mapDispatchToProps
)(PhoneForm);