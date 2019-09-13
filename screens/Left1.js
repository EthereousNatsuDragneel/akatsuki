import React, {Component} from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
export default class Left1 extends Component{
constructor(props){
super(props)
this.state={Tree:require("./images/Tree.png")}}
render(){return(<View style={{flex:1}}><View style={{height:'70%',width:'100%',backgroundColor:"green",flexDirection:"row"}}>

<Image source={this.state.Tree} style={{top:32,left:32,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:32,left:288,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:32,left:224,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:32,left:160,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:32,left:96,height:64,width:64,position:'absolute'}}/>

<Image source={this.state.Tree} style={{top:96,left:32,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:96,left:288,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:96,left:224,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:96,left:160,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:96,left:96,height:64,width:64,position:'absolute'}}/>

<Image source={this.state.Tree} style={{top:288,left:32,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:288,left:96,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:288,left:160,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:288,left:224,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:288,left:288,height:64,width:64,position:'absolute'}}/>
