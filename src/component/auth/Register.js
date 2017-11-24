import React, { Component } from 'react'
import axios from 'axios'
import { config } from '../../config'
import Error from './Error'

class Register extends Component {
   constructor(props) {
      super(props)
      this.state = {
         username: '',
         email: '',
         password: '',
         passowrd2: '',
         error: false,
         success: false,
         success_txt: '',
         error_txt: []
      }
      this.register = this.register.bind(this)
      this.onChange = this.onChange.bind(this)
   }

   onChange = e => {
      this.setState({
         [e.target.name]: e.target.value,
         error: false
      } , () => console.log(this.state))
   }

   register = e => {
      const { username , email , password , password2 } = this.state
      e.preventDefault()
      axios.post(config.api('social/register') , {
         username: username,
         email: email,
         password: password,
         password2: password2
      }).then(res => {
         if (res.status === 200) {
            console.log('success create users' , res)
            this.setState({
               error: false,
               error_txt: '',
               success: true,
               success_txt: res.data.message
            })
         }
      }).catch(err => {
         const status = err.response.status
         if (status === 400) {
            this.setState({
               error: true,
               error_txt: err.response.data.message
            })
         }
      })
   }
   
   render() {
      const { error , error_txt , success , success_txt } = this.state
      return (
         <div>
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <form onSubmit={this.register}>
                        <div className="form-group">
                           <label>Username</label>
                           <input type="text" className="form-control" name='username' onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="email">Email</label>
                           <input type="email" className="form-control" id='email' name='email' onChange={this.onChange}/>
                        </div>
                        <div className="form-grop">
                           <label htmlFor="password">Password</label>
                           <input type="password" className="form-control" id='password' name='password' onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="passowrd2">Confirm Password</label>
                           <input type="password" className="form-control" id='password2' name='password2' onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                           <input type="submit" className="btn btn-primary" value='Register'/>
                        </div>
                     </form>
                  </div>
                  <div className="col-md-6">
                     { error ?  <Error error={error_txt} /> : null }
                     { success ? (<p>{success_txt}</p>) : null }
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Register;