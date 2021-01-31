import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Containers/Home'
import Lists from './Containers/Lists'
import {fetchLists} from './Actions/fetchLists'
import {connect} from 'react-redux'
class App extends Component {

    componentDidMount() {
      this.props.fetchLists()
    }



  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Route exact path='/' component={Home} /> 
            <Route exact path='/lists' component={Lists} />  
          </div>
        </Switch>
      </Router>
    );
  }
}

export default connect(null, {fetchLists})(App)
