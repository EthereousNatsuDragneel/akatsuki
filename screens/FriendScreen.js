import React, {Component} from 'react'
import {View,Dimensions,Image,Button,ImageBackground,TouchableOpacity,Text,Alert} from 'react-native'
const {width,height}=Dimensions.get("window")
export default class FriendScreen extends Component{
constructor(props){
super(props)
this.state={up:require("../images/KeyboardKeyUp.png"),down:require("../images/KeyboardKeyDown.png"),right:require("../images/KeyboardKeyRight.png"),left:require("../images/KeyboardKeyLeft.png"),DRest:require("../images/DRest.png"),DWalk1:require("../images/DWalk1.png"),DWalk2:require("../images/DWalk2.png"),FRest:require("../images/FRest.png"),FWalk1:require("../images/FWalk1.png"),FWalk2:require("../images/FWalk2.png"),LRest:require("../images/LRest.png"),LWalk1:require("../images/LWalk1.png"),LWalk2:require("../images/LWalk2.png"),RRest:require("../images/RRest.png"),RWalk1:require("../images/RWalk1.png"),RWalk2:require("../images/RWalk2.png"),Tree:require("../images/Tree.png"),x:160,y:160,hStep:16,vStep:16,vAlternate:0,hAlternate:0,c:1,
kekadu:require("../images/DRest.png")}}
walkDown=()=>{if(this.state.y<230){
//walkDown code
if(this.state.vAlternate==0){
this.setState(previousState=>({c:1,y:previousState.y+previousState.vStep,vAlternate:1,kekadu:previousState.DWalk1}))}
else if(this.state.vAlternate==1){this.setState(previousState=>({y:previousState.y+previousState.vStep,kekadu:previousState.DRest,vAlternate:previousState.vAlternate+previousState.c}))}
else{this.setState(previousState=>({y:previousState.y+previousState.vStep,kekadu:previousState.DWalk2,vAlternate:1,c:-1}))}
this.walking=setTimeout(this.walkDown,300)}
else{this.setState(previousState=>({kekadu:previousState.DRest}))}}
walkUp=()=>{if(this.state.x>80 || this.state.y>144){
//walkUp code
if(this.state.vAlternate==0){
this.setState(previousState=>({c:1,y:previousState.y-previousState.vStep,vAlternate:1,kekadu:previousState.FWalk1}))}
else if(this.state.vAlternate==1){this.setState(previousState=>({y:previousState.y-previousState.vStep,kekadu:previousState.FRest,vAlternate:previousState.vAlternate+previousState.c}))}
else{this.setState(previousState=>({y:previousState.y-previousState.vStep,kekadu:previousState.FWalk2,vAlternate:1,c:-1}))}
this.walking=setTimeout(this.walkUp,300)}
else{this.setState(previousState=>({kekadu:previousState.FRest}))}}
walkLeft=()=>{if(this.state.x>80 || this.state.y>144){
//walkLeft Code
if(this.state.hAlternate==0){
this.setState(previousState=>({c:1,x:previousState.x-previousState.hStep,hAlternate:1,kekadu:previousState.LWalk1}))}
else if(this.state.vAlternate==1){this.setState(previousState=>({x:previousState.x-previousState.hStep,kekadu:previousState.LRest,hAlternate:previousState.hAlternate+previousState.c}))}
else{this.setState(previousState=>({x:previousState.x-previousState.hStep,kekadu:previousState.LWalk2,hAlternate:1,c:-1}))}
this.walking=setTimeout(this.walkLeft,300)}
else{this.setState(previousState=>({kekadu:previousState.LRest}))}}
walkRight=()=>{if(this.state.x<240){
//walkRight code
if(this.state.hAlternate==0){
this.setState(previousState=>({c:1,x:previousState.x+previousState.hStep,hAlternate:1,kekadu:previousState.RWalk1}))}
else if(this.state.vAlternate==1){this.setState(previousState=>({x:previousState.x+previousState.hStep,kekadu:previousState.RRest,hAlternate:previousState.hAlternate+previousState.c}))}
else{this.setState(previousState=>({x:previousState.x+previousState.hStep,kekadu:previousState.RWalk2,hAlternate:1,c:-1}))}
this.walking=setTimeout(this.walkRight,300)}
else{this.setState(previousState=>({kekadu:previousState.RRest}))}}
stop=()=>clearTimeout(this.walking)
render(){return(<View style={{flex:1}}><View style={{height:'70%',width:'100%',backgroundColor:"green",flexDirection:"row"}}>
<Image source={this.state.kekadu} style={{height:32,width:32,top:this.state.y,left:this.state.x}}/>
<Image source={this.state.Tree} style={{top:32,left:32,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:96,left:32,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:32,left:288,position:'absolute',height:64,width:64}}/>
<Image source={this.state.Tree} style={{top:96,left:288,position:'absolute',height:64,width:64}}/>

<Image source={this.state.Tree} style={{top:160,left:288,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:224,left:288,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:288,left:288,height:64,width:64,position:'absolute'}}/>

<Image source={this.state.Tree} style={{top:288,left:32,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:288,left:96,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:288,left:160,height:64,width:64,position:'absolute'}}/>
<Image source={this.state.Tree} style={{top:288,left:224,height:64,width:64,position:'absolute'}}/>

</View>
<View style={{flex:1,flexDirection:"row"}}>
<View style={{flex:1,alignSelf:"stretch",backgroundColor:"black"}}/>
<View style={{flex:1,alignSelf:"stretch"}}>
<TouchableOpacity onPressIn={this.walkUp} onPressOut={this.stop}><Image source={this.state.up} style={{height:'100%',width:'100%'}}/></TouchableOpacity>
</View><View style={{flex:1,alignSelf:"stretch",backgroundColor:"black"}}/></View>
<View style={{flex:1,flexDirection:"row"}}><View style={{flex:1,alignSelf:"stretch"}}>
<TouchableOpacity onPressIn={this.walkLeft} onPressOut={this.stop}><Image style={{height:'100%',width:'100%'}} source={this.state.left}/></TouchableOpacity></View>
<View style={{flex:1,alignSelf:"stretch"}}><TouchableOpacity onPressIn={this.walkDown} onPressOut={this.stop}><Image style={{height:'100%',width:'100%'}} source={this.state.down}/></TouchableOpacity></View>
<View style={{flex:1,alignSelf:"stretch"}}><TouchableOpacity onPressIn={this.walkRight} onPressOut={this.stop}><Image style={{height:'100%',width:'100%'}} source={this.state.right}/></TouchableOpacity></View>
</View></View>)}}