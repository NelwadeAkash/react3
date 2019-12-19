import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import Login from './Login';
import About from './About';
import Home from './Home';
import Register from './Register';
import Courselist from '../Courselist';
import Logout from './Logout';
import { ProtectedRoute } from '../Router/ProtectedRoute';
import BuyCourse from '../BuyCourse';
//import Login from./Loginin';



export class RouterElement extends Component {
    render() {
        return (
            <div>
               <Router>
                 <Switch>
                   <Route exact path='/' component={Login} />
                   <Route exact path='/login' component={Login}/>
                   <ProtectedRoute exact path='/about' component={About}/>
                   <ProtectedRoute exact path='/home' component={Home}/>
                   <ProtectedRoute exact path='/home/:name' component={BuyCourse}/>
                   <ProtectedRoute exact path='/Courselist' component={Courselist}/>
                   <ProtectedRoute exact path='/Courselist/:name' component={BuyCourse}/>
                   <Route exact path='/Register' component={Register}/>
                   <ProtectedRoute exact path='/Logout' component={Logout}/>
                 </Switch>
               </Router>
            </div>
        )
    }
}

export default RouterElement
