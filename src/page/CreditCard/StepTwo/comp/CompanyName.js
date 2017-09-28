import React, { Component } from 'react'
import InputItem from '@/components/CreditCard/InputItem.js'
import {testChineseNum} from '@/assets/js/util.js'
import commonReg from '@/assets/js/commonReg.js'
// import { Toast } from 'antd-mobile';
import { connect } from 'react-redux'
import {setmessage} from '@/redux/actions/creditCard.js'


class CompanyName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onerror: false,
      value: props.creditCard.information[props.stateName] || '',
      ondelete: false
    }
  }

  setDeleteShow() {
    this.setState({
      ondelete: true
    })
  }

  setDeleteHide() {
    this.setState({
      ondelete: false
    })
  }

  setErrorShow() {
    this.setState({
      onerror: true
    })
  }

  setErrorHide() {
    this.setState({
      onerror: false
    })
  }


  onFocus(e) {
    this.setDeleteShow();
    this.setErrorHide();
    
  }

  onBlur(e) {
    setTimeout(() => this.setDeleteHide(), 0)
    const val = e.target.value
    
    if(!val || val.length < 4 || val.length > 40 || !testChineseNum(val, 4)) {
      setTimeout(() => this.setErrorShow(), 0)
      return
    }

    this.props.setmessage(this.props.stateName, val)    
  }

  onChange(e) {
    this.setState({
      value: e.target.value.replace(commonReg.emoji, '')
    })
    //this.props.setmessage('name', this.state.value)    
  }

  clearVal() {
    this.setState({
      value: ''
    })
  }

  render() {
    return <InputItem type={this.props.type}  placeholder={this.props.placeholder} name={this.props.name} maxLength={this.props.maxLength}
      onerror={this.state.onerror}  value={this.state.value} ondelete={this.state.ondelete}
      onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} onChange={this.onChange.bind(this)}
      onClear={this.clearVal.bind(this)}></InputItem>
  }
}

const mapStateToProps = state => {
  return {
    creditCard: state.creditCard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setmessage: (key,val) => {
      dispatch(setmessage(key,val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyName)

//
