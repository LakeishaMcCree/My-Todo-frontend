import React from 'react'  
import { connect } from 'react-redux'
import ListItem from '../Components/ListItem'


class Lists extends React.Component {
    
    render() {
        const lists = this.props.lists.map((list, i) => <ListItem key={i} list={list} />)
        
        return (

            <div>
                <h3>Todo List: </h3>
                <ul className="collection">
                    {lists}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lists: state.lists
    }
}
export default connect(mapStateToProps)(Lists)