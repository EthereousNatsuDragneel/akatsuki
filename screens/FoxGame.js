import React, {Component} from 'react'
import {Button,Text,Image,TouchableOpacity,ImageBackground} from 'react-native'
export default class FoxGame extends Component{
constructor(props){
super(props)
this.state={fox:null,player:null,msg:null,rock:"./images/Rock.png",paper:"./images/Paper.png",scissor:"./images/Scissor.png",bg:"./images/JungleBackgroundForGames.jpg",foxChoice:"./images/questionMark.png",userChoice:"./images/questionMark.png",win:0}}
generateFox=()=>{var x=Math.floor(Math.random()*100)+1
this.setState({fox:x%3})}
componentDidMount(){this.generateFox()}
battle=()=>{if(this.state.fox==0){
if(this.state.user==0){this.setState({msg:"DRAW"})}
if(this.state.user==1){this.setState({msg:"WIN",win:this.state.win+1})}
if(this.state.user==2){this.setState({msg:"LOSE"})}
}if(this.state.fox==1){
if(this.state.user==0){this.setState({msg:"LOSE"})}
if(this.state.user==1){this.setState({msg:"DRAW"})}
if(this.state.user==2){this.setState({msg:"WIN",win:this.state.win+1})}
}if(this.state.fox==2){
if(this.state.user==0){this.setState({msg:"WIN",win:this.state.win+1})}
if(this.state.user==1){this.setState({msg:"LOSE"})}
if(this.state.user==2){this.setState({msg:"DRAW"})}}}
render(){return(<ImageBackground source={{uri:this.state.bg}} style={{width:100%,height:70%}}>
<Text style={{fontSize:25,textAlign:"center",top:25}}>ROCK PAPER SCISSOR</Text>
<Text style={{fontSize:25,textAlign:"left",top:40,left:10}}>PLAYER</Text><Text style={{fontSize:25,textAlign:"right",top:40}}>FOX</Text>
<Text style={{fontSize:25,top:60,textAlign:"center"}}>WINS: {this.state.win}</Text>
<Image source={{uri:this.state.userChoice}} style={{left:25%,top:50%,width:40%,height:40%}}/>
<Image source={{uri:this.state.foxChoice}} style={{left:75%,width:40%,top:50%,height:40%}}/>
<TouchableOpacity style={{top:85%,left:80%}} onPress={()=>{this.setState({user:0,userChoice:rock,foxChoice:fox})
this.generateFox()
this.battle()}}><Image source={{uri:this.state.rock}} style={{width:30%,height:30%}}/></TouchableOpacity>
<TouchableOpacity onPress={()=>{this.setState({user:1,userChoice:paper,foxChoice:fox})
this.generateFox()
this.battle()}} style={{top:85%,left:50%}}><Image source={{uri:this.state.paper}} style={{width:30%,height:30%}}/></TouchableOpacity>
<TouchableOpacity onPress={()=>{this.setState({user:2,userChoice:scissor,foxChoice:fox})
this.generateFox()
this.battle()}} style={{top:85%,left:20%}}><Image source={{uri:this.state.scissor}} style={{width:30%,height:30%}}/></TouchableOpacity>
</View>)}}