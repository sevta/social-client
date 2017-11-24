import React, { Component } from 'react'
import { Switch , Route } from 'react-router-dom'
import Register from './component/auth/Register'
import Login from './component/auth/Login'

class Roots extends Component {
   render() {
      return (
         <Switch>
            <Route exact path='/register' component={Register} />
            <Route path='/login' component={Login} />
         </Switch>
      );
   }
}

export default Roots;