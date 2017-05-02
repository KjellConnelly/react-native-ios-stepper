import React, { Component, } from 'react'
import {View, Text, Button, Platform, ScrollView, TouchableOpacity} from 'react-native'

export default class Stepper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value,
      minValue: this.props.minValue,
      maxValue: this.props.maxValue,
    }
  }

  onPress(value) {
    let newValue = undefined
    if ( ((this.state.value + value) >= this.state.minValue) && ((this.state.value + value) <= this.state.maxValue) ) {
      newValue = this.state.value + value
    }
    if (newValue != undefined) {
      this.setState({value: newValue})
    }
  }

  render() {
    return (
      <View style={{borderColor:this.props.color,...styles.view}}>
        <TouchableOpacity disabled={this.state.value <= this.state.minValue} style={{flex:1,paddingBottom:2}} onPress={this.onPress.bind(this, -1)}>
          <Text style={{...styles.text, color:(this.state.value > this.state.minValue ? this.props.color : this.props.disabledColor)}}>
            -
          </Text>
        </TouchableOpacity>
        <View style={{width:1,height:27,backgroundColor:this.props.color}}/>
        <TouchableOpacity disabled={this.state.value >= this.state.maxValue} style={{flex:1,paddingBottom:2}} onPress={this.onPress.bind(this, 1)}>
          <Text style={{...styles.text, color:(this.state.value < this.state.maxValue ? this.props.color : this.props.disabledColor)}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Stepper.propTypes = {
  color: React.PropTypes.string,
  disabledColor: React.PropTypes.string,
  value: React.PropTypes.number,
  minValue: React.PropTypes.number,
  maxValue: React.PropTypes.number.isRequired,
}

Stepper.defaultProps = {
  color: "rgb(0,122,255)",
  disabledColor: "rgb(181, 181, 181)",
  value: 0,
  minValue: 0,
}

const styles = {
  view: {
    borderRadius:4,
    borderWidth:1,
    width:97,
    height:27,
    flexDirection:"row",
    alignItems:"center",
  },
  text: {
    textAlign:"center",
    fontSize:20,
  }
}
