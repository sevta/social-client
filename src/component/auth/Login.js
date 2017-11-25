import React, { Component } from 'react'
import './auth.css'
import axios from 'axios'
import { config } from '../../config'

class Login extends Component {
   constructor() {
      super()
      this.state = {
         error: false,
         error_txt: '',
         username: '',
         password: ''
      }
      this.onChange = this.onChange.bind(this)
      this.login = this.login.bind(this)
   }

   login = e => {
      e.preventDefault()
      axios.post(config.api('auth/login') , {
         username: this.state.username,
         password: this.state.password
      }).then(res => {
         // handle success login herr
         if (res.status === 200) {
            this.setState({ error: true , error_txt: res.data.message })
         }
      }).catch(err => {
         // handle err response here
         if (err.response.status === 400) {
            this.setState({ error: true , error_txt: err.response.data.message })
         }
      })
   }

   onChange = e => {
      this.setState({ [e.target.name]: e.target.value , error: false , error_txt: ''})
   }

   render() {
      const { error , error_txt , username } = this.state
      return (
         <div>
            {error && (
               <h5 style={{
                  position: 'absolute',
                  top: 30,
                  left: 30,
                  background: '#fff',
                  transition: 'all .3s ease',
                  padding: 5,
                  borderRadius: 30
               }}>{error_txt}</h5>
            )}
            <div className='container-login'>
               <form onSubmit={this.login}>
                  <div className="login">
                     <input type="text" className='login-form' placeholder='Username' name='username' onChange={this.onChange}/>
                     <input type="password" className='login-form' placeholder='Password' name='password' onChange={this.onChange}/>
                     <input type='submit' className="btn btn-login" onClick={this.login} value='Login' />
                  </div>
               </form>
            </div>
         </div>
      );
   }
}

export default Login;