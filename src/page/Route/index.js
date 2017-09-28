import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Routte extends Component {
  constructor(props) {
    super(props);
     
  
  }
 

  render() {
    return (
      <div>
        <h1>Routte</h1>
        {this.props.children}
      </div>
    )
  }
}

 
export default (Routte)