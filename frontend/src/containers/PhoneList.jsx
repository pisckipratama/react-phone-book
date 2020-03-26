import React, { Component } from 'react';
import Phone from './PhoneActive';
import { connect } from 'react-redux';
import { loadPhone } from '../actions'

class PhoneList extends Component {

  componentDidMount() {
    this.props.loadPhone();
  }

  render() {
    console.log(this.props)
    const nodes = this.props.phones.map((item, index) => {
      return (
        <Phone key={index} id={item.id} Name={item.Name} Phone={item.Phone} sent={item.sent}></Phone>
      )
    })

    return (
      <div className="card">
        <div className="card-body">
          <p className="text-muted">{this.props.phones.length <= 1 ? 'Contact' : 'Contacts'} ({this.props.phones.length === 0 ? 'Not Found' : this.props.phones.length})</p>
          <table className="table table-stripped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {nodes}
              <tr>
                <td>3</td>
                <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
                <td><button className="btn btn-primary">save</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  phones: state.phones
})

const mapDispatchToProps = (dispatch) => ({
  loadPhone: () => dispatch(loadPhone())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneList)