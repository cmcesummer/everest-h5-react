import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import { connect } from 'react-redux'
import {changeCardType} from '@/redux/actions/creditCard.js'

class SwipeComponent extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    data: ['', '', ''],
 
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['http://youxin-ssls.oss-cn-hangzhou.aliyuncs.com/img/jinkabanner-0728.png', 
        'http://youxin-ssls.oss-cn-hangzhou.aliyuncs.com/img/baijinkabanner-0728.png'],
      });
    }, 300);
  }


  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <Carousel
        className="my-carousel"
        style={{height:'4.67rem',marginBottom:'.4rem'}}
        autoplay={false}
    
        selectedIndex={this.props.creditCard.cardType}
        swipeSpeed={35}
        //beforeChange={(from, to) => console.log(this.props.creditCard)}
        afterChange={index => this.props.changeCardType(Number(index))}
      >
        {this.state.data.map(ii => (
          <img
            src={ii}
          
            key={ii}
            alt="icon"
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              this.setState({
                initialHeight: null,
              });
            }}
          />
        ))}
      </Carousel>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    creditCard: state.creditCard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCardType: (type) => {
       
      dispatch(changeCardType(type))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SwipeComponent)