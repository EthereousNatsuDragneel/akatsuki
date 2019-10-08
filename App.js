import React, {Component} from 'react'
import {View,Button,Text,Image,TouchableOpacity,ImageBackground} from 'react-native'

export default class FoxGame extends Component{
constructor(props){
super(props)
this.state={wins:0,fox:require("./images/QuestionMark.png"),user:require("./images/QuestionMark.png"),random:null,jungle:require("./images/JungleBackgroundForGames.jpg"),rock:require("./images/Rock.png"),Paper:require("./images/Paper.png"),Scissor:require("./images/Scissor.png")}}
generateFox=()=>{var x=Math.floor(Math.random()*100)+1
this.setState({random:x%3})}
rock=()=>{this.generateFox()
if(this.state.random==2){this.setState(previousState=>({wins:previousState.wins+1,fox:previousState.Scissor}))}
else if(this.state.random==1){this.setState(previousState=>({fox:previousState.Paper}))}
else{this.setState(previousState=>({fox:previousState.Rock}))}
this.setState(previousState=>({user:previousState.Rock}))}
paper=()=>{this.generateFox()
if(this.state.random==0){this.setState(previousState=>({wins:previousState.wins+1,fox:previousState.Rock}))}
else if(this.state.random==1){this.setState(previousState=>({fox:previousState.Paper}))}
else{rethis.setState(previousState=>({fox:previousState.Rock}))}
this.setState(previousState=>({user:previousState.Paper}))}
scissor=()=>{this.generateFox()
if(this.state.random==1){this.setState(previousState=>({wins:previousState.wins+1,fox:previousState.Paper}))}
else if(this.state.random==2){this.setState(previousState=>({fox:previousState.Scissor}))}
else{this.setState(previousState=>({fox:previousState.Rock}))}
this.setState(previousState=>({user:previousState.Scissor}))}
render(){return(<ImageBackground source={this.state.jungle} style={{flex:1}}><View style={{height:'70%',width:'100%'}}>
<Text style={{fontSize:25,textAlign:"center",top:25}}>ROCK PAPER SCISSOR</Text>
<Text style={{fontSize:25,top:60,textAlign:"center"}}>{this.state.wins}</Text>
<Image source={this.state.user} style={{height:128,width:128,left:64,top:160,position:'absolute'}}/>
<Image source={this.state.fox} style={{left:256,top:160,height:128,width:128,position:'absolute'}}/>

</View><View style={{flex:1,flexDirection:"row"}}>
<View style={{flex:"stretch"}}><TouchableOpacity onPress={()=>this.rock()}><Image source={this.state.Rock}/></TouchableOpacity></View>
<View style={{flex:"stretch"}}><TouchableOpacity onPress={()=>this.paper()}><Image source={this.state.Paper}/></TouchableOpacity></View>
<View style={{flex:"stretch"}}><TouchableOpacity onPress={()=>this.scissor()}><Image source={this.state.Scissor}/></TouchableOpacity></View>
</View></ImageBackground>)}}