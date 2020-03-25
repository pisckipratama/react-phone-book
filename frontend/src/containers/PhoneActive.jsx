import { connect } from 'react-redux';
import { deletePhone, resendPhone } from '../actions'
import Phone from '../components/Phone';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(deletePhone(ownProps.id)),
  resend: () => dispatch(resendPhone(ownProps.id, ownProps.Name, ownProps.Phone))
})

export default connect (
  null,
  mapDispatchToProps
)(Phone);