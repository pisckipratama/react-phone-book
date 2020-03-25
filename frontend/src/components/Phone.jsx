import React from 'react';

const Phone = (props) => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.Name}</td>
      <td>{props.Phone}</td>
      <td>
        <button type="button" className="btn btn-info">Edit</button> &nbsp;
        <button type="button" className="btn btn-danger" onClick={props.sent ? props.onDelete : props.resend}>
          {props.sent ? 'Hapus' : 'Kirim Ulang'}
        </button>
      </td>
      {!props.sent &&
        <td style={{ color: "red", fontSize: "8px" }}>
          network failed, please check your connections
        </td>
      }
    </tr>
  )
}

export default Phone;