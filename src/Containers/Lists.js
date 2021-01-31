import React from 'react' 
import {Link} from 'react-router-dom' 

class Lists extends React.Component {
    
    render() {
        
        const list = this.props.lists.map(list =>
            <li key={list.id} list={list}>
                <Link to={`/lists/${list.id}`}>{list.title}</Link>
            </li> )
        
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default Lists