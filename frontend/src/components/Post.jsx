import React from 'react';

function PhoneList(props) {
  return (
    <tr>
      <th scope="row">{props.num}</th>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>
        <a href="https://pisckipratama.github.io" className="btn btn-info"><i className="fa fa-edit"></i> Edit</a> &nbsp;
                <a href="https://pisckipratama.github.io" className="btn btn-danger"><i className="fa fa-trash"></i> Delete</a>
      </td>
    </tr>
  )
}

export default PhoneList;