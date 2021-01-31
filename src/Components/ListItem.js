import React from 'react' 
import {connect} from 'react-redux' 

const ListItem = ({ list }) => {
    return (
        <li className="list-item">
            Title: {list.title}<br />
            Date: {list.date}<br />
            Content: {list.content}<br />
            Note: {list.note}<br />
            Completed: {list.status}<br />
        </li>
    )
}

export default (ListItem)