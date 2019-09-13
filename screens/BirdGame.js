import React, {Component} from 'react'
import {ImageBackground,TouchableOpacity,Text} from 'react-native'
export default class BirdGame extends Component{
constructor(props){
super(props)
this.state={bg:require("./images/BirdFace.jpg"),movie:null,m1:"Koi Mil Gaya",a1:2003,list:null,searchStrings:["Doraemon","Chhota","Bhoothnath","India"],msg:"Let me think"}}
drama=()=>this.setState({movie:this.state.m1})
pickRandom=()=>{var num2=Math.floor(Math.random()*100)%10
this.num2>=this.state.list.length? this.setState({movie:this.state.list[1].Title,a1:parseInt(this.state.list[1].Year)}): this.setState({movie:this.state.list[num2].Title,a1:parseInt(this.state.list[num2].Year)})}
componentDidMount(){var num=Math.floor(Math.random()*100)%10-1
if(this.num==-1){this.drama()}
else if(this.num>=0 && this.num<this.state.searchStrings.length){
return fetch(`http://www.omdbapi.com/?apikey=938ba536&s=${this.state.searchStrings[this.num]}`).then((response)=>response.json()).then((responseJson)=>{this.setState({list:responseJson.Search})
this.pickRandom()}).catch((error)=>{this.setState({msg:error})})}
else{
return fetch(`http://www.omdbapi.com/?apikey=938ba536&s=${this.state.searchStrings[0]}`).then((response)=>response.json()).then((responseJson)=>{this.setState({list:responseJson.Search})
this.pickRandom()}).catch((error)=>{this.setState({msg:error})})}}
render(){if(this.state.msg!="Let me think"){
return(<ImageBackground source={this.state.bg} style={{height:'100%',width:'100%'}}>
<Text style={{top:50,fontSize:25,textAlign:"center"}}>{this.state.msg}</Text>
</ImageBackground>)}
else if(this.state.movie==null){return(<ImageBackground source={this.state.bg} style={{height:'100%',width:'100%'}}>
<Text style={{fontSize:25,top:50,textAlign:"center"}}>{this.state.msg}</Text>
</ImageBackground>)}
return(<ImageBackground source={this.state.bg} style={{height:'100%',width:'100%'}}>
<Text style={{top:20,fontSize:25,textAlign:"center"}}>{this.state.movie} {'\n'}released in which year?</Text>
<TouchableOpacity><Text style={{fontSize:25,textAlign:"center",color:"white"}}>{'\n'}{this.state.a1-2}</Text></TouchableOpacity>
<TouchableOpacity><Text style={{fontSize:25,textAlign:"center",color:"white"}}>{this.state.a1-1}</Text></TouchableOpacity>
<TouchableOpacity><Text style={{fontSize:25,textAlign:"center",color:"white"}}>{this.state.a1}</Text></TouchableOpacity>
<TouchableOpacity><Text style={{fontSize:25,textAlign:"center",color:"white"}}>{this.state.a1+1}</Text></TouchableOpacity>
</ImageBackground>)}}