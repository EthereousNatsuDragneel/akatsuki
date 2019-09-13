import React, {Component} from 'react'
import {View,Text,Image} from 'react-native'
export default class ItemsScreen extends Component{
constructor(props){
super(props)
this.state={banana:0,carrot:0,medicine:0,water:0}}
render(){return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
<Text style={{fontSize:50,textAlign:"center",color:"white"}}>ITEMS</Text>
</View>)}}