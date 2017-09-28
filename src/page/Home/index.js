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
      <div className="home_index">
     
        <span onClick={this.goRoute.bind(this)}>home_index</span>
        <br/>
        <span onClick={this.goRoutes.bind(this)}>stepTwo</span>

    
          
      </div>
    )
  }

}