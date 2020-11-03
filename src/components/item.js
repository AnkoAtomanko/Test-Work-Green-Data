import React from 'react'
import props from './leftContainer'

const Item = (props) => {
    return (
        <tbody>
        <tr>
            <th scope="row"> {props.id} </th>
            <td> {props.name}</td>
            <td>{props.patronymic}</td>
            <td>{props.surname}</td>
            <td>{props.position}</td>
            <td>{props.birght}</td>
            <td>{props.gender}</td>
            <td>{props.fired}</td>
        </tr>
        </tbody>

    );
 }

 export default Item;