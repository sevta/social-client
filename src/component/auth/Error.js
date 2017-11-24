import React, { Component } from 'react';

class Error extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div>
            {this.props.error.length < 5 ? this.props.error.map((error , i) => (
               <p key={i+1}>{error.param} {error.msg}</p>
            )) : (
               <p>{this.props.error}</p>
            )}
         </div>
      );
   }
}

export default Error;