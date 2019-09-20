import React, {Component} from 'react'
import {Image,View,Text,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
class Left2 extends Component{
render(){return(<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
<Text style={{fontSize:50}}>Works</Text>
</View>)}}
export default connect(null,null)(Left2)