import React from 'react';

const Phone = (props) => {
  let edit = false;

  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>
        {edit ? <input type="text" /> : props.Name }
      </td>
      <td>{props.Phone}</td>
      <td><button type="button" className="btn btn-secondary btn-sm" onClick={edit = true}> <i className="fa fa-edit"></i> Edit</button>
        &nbsp;
        <button type="button" className={props.sent ? 'btn btn-danger btn-sm' : 'btn btn-primary btn-sm'} onClick={props.sent ? props.onDelete : props.resend}>
          <i className={props.sent ? 'fa fa-trash' : 'fa fa-retweet'}></i> {props.sent ? 'Delete' : 'Resend'}
        </button><br />
        {!props.sent &&
          <span style={{ color: "red", fontSize: "8px" }}>
            network failed, please check your connections
          </span>
        }
      </td>
    </tr>
  )
}

export default Phone;