import React from "react";

function Entry(props) {
  return (
    <tr>
    <th><img src={props.image} alt={props.name} /></th>
    <th>{props.name}</th>
    <th>{props.email}</th>
    <th>{props.phone}</th>
</tr>
  )
}

export default Entry;