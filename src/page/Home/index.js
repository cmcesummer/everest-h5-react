import React, {Component} from 'react'
import {history, Link  } from 'react-router-dom'

export default class Home extends Component {
  constructor(props) {
    super(props);
    
  }

  

  goRoute() {
     
    this.props.history.push({pathname:'/roat/2',});
    // console.log(this);
  }

  goRoutes() {
    
   this.props.history.push({pathname:'/creditCard/two'});
   // console.log(this);
 }

  render() {
    return (

      <ul className="home_index">
        <li>
          <Link to="/roat/2">pathname roat</Link>
        </li>
        <li>
          <Link to="/creditCard/two">pathname roat</Link>
        </li>
      </ul>
    )
  }

}