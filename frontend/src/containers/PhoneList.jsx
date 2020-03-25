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

    return(
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
        </tbody>
      </table>
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