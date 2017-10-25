import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CreditCardTwo from '@/page/CreditCard/StepTwo'
import Swipe from '@/page/CreditCard/comp/Swipe'


class CreditCard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>



        <Swipe></Swipe>



        <Route path={`${this.props.match.url}/two`} component={CreditCardTwo}></Route>
      </div>
    )
  }
}




export default CreditCard