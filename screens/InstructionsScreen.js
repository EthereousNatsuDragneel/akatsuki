import React, {Component} from 'react'
import {View,Text} from 'react-native'
export default class InstructionsScreen extends Component{
constructor(props){
super(props)
this.state={ins:"Your friend is not feeling well. Talk to him."}}
render(){return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
<Text style={{fontSize:30,color:"white",textAlign:"center",flex:0.8}}>{this.state.ins}</Text>
</View>)}}