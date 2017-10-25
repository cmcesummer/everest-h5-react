import React, { Component } from 'react'
import '../stepTwo.less'
// import InputItem from './comp/InputItem.js'
import CompanyName from './comp/CompanyName.js'
import ButtonNext from './comp/Button.js'
import { connect } from 'react-redux'
import { setAjaxMessageFnc } from '@/redux/actions/creditCard.js'

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }
  componentDidMount() {
    this.props.setAjaxMessageFnc();
    
    this.setState({
      num: this.state.num + 1
    })
    console.log(this.state.num)
    this.setState({
      num: this.state.num + 1
    })
    console.log(this.state.num)
    setTimeout(() => {
      this.setState({
        num: this.state.num + 1
      })
      console.log(this.state.num)
      this.setState({
        num: this.state.num + 1
      })
      console.log(this.state.num)
    },0)
  }
  render() {
    return (
      <div className="step">

        <CompanyName stateName="employerName" name="工作单位" type="text" placeholder="请填写您签署劳动合同的单位名称" maxLength='40' />
        <CompanyName stateName="department" name="任职部门" type="text" placeholder="任职部门" maxLength="20" />
        <CompanyName stateName="occupation" value={this.props.creditCard.information.occupation} name="职业/岗位" type="text" placeholder="职业/岗位" maxLength="15" />
        <CompanyName stateName="employerAddressDetail" type="text" placeholder="卡片将邮寄至单位地址，请详细填写" maxLength="40" />
        <ButtonNext />

        <br />
        <span>cardType: {this.props.creditCard.cardType}</span>  <br />
        {/* {console.log(this.props.creditCard)}
        {console.log(this.props.creditCard.information.occupation)} */}
        <span>{this.props.creditCard.information.occupation}</span>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  cardType: state.creditCard.cardType,
  creditCard: state.creditCard
})

const mapDispatchToProps = dispatch => {
  return {
    setAjaxMessageFnc() {
      dispatch(setAjaxMessageFnc())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo)