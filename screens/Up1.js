import React, {Component} from 'react'
import {Image,View,TouchableOpacity,Text} from 'react-native'
import {connect} from 'react-redux'
class Up1 extends Component{
render(){return(<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
<Text style={{fontSize:50}}>Works</Text>
</View>)}}
export default connect(null,null)(Up1)