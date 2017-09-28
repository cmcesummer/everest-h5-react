import React, { Component } from 'react'
// import '../stepTwo.less'
import error from "./image/jingshi@2x.png"
import deleteImage from "@/assets/image/delete.png"

export default class InputItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onerror: false
    }
  }

  componentDidMount() {
    
  }

  

  render() {
    const style = {
      display:'none'
    }
     
    return (
      <div className="input-list-item">
        <div style={this.props.name ? null : style}>{this.props.name ? this.props.name : ''}</div>
        <div>
          <input type={this.props.type}  placeholder={this.props.placeholder} className={this.props.onerror ? 'error' : ''}
            value={this.props.value}  maxLength={this.props.maxLength}
            onFocus={this.props.onFocus} onBlur={this.props.onBlur} onChange={this.props.onChange}/>
        </div>
        <div onClick={this.props.onClear}>
          {this.props.onerror ? <img src={error} alt="error" /> : ''}
          {this.props.ondelete ? <img src={deleteImage} alt="delete" /> : ''}
          
        </div>
      </div>
    )
  }
}