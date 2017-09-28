import React, { Component } from 'react'
import {connect} from 'react-redux';

class Buttons extends Component {
  constructor(props) {
    super(props)
     
  }

  handle() {
    console.log(this.props.creditCard.information)
  }

  render() {
    const height = {
      height: '2rem'
    }
    return (
      <div style={height}>
        <button onClick={this.handle.bind(this)}>show props</button>
        {/* <span>{this.props.creditCard.information}</span>  */}
      </div>       
    )
  }

}

const mapStateToProps = state => {
  return {
    creditCard: state.creditCard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)