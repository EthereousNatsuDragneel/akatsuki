import React, {Component} from 'react'
import {View,Text,Image} from 'react-native'
import {connect} from 'react-redux'
class ItemsScreen extends Component{
render(){if(this.props.BananaCount==1){
return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
<Text style={{fontSize:50,textAlign:"center",color:"white"}}>ITEMS{'\n'}</Text>
<Image source={this.props.Banana} style={{height:100,width:100}}/>
</View>)}
if(this.props.CarrotCount==1){
return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
<Text style={{fontSize:50,textAlign:"center",color:"white"}}>ITEMS{'\n'}</Text>
<Image source={this.props.Carrot} style={{height:100,width:100}}/>
</View>)}
if(this.props.MedicineCount==1){
return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
<Text style={{fontSize:50,textAlign:"center",color:"white"}}>ITEMS{'\n'}</Text>
<Image source={this.props.Medicine} style={{height:100,width:100}}/>
</View>)}
return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
<Text style={{fontSize:50,textAlign:"center",color:"white"}}>ITEMS{'\n'}</Text>
<Text style={{color:"white",textAlign:"center",fontSize:30}}>No Items</Text>
</View>)}}

function mapStateToProps(state){
return{BananaCount:state.BananaCount,CarrotCount:state.CarrotCount,MedicineCount:state.MedicineCount,Banana:state.Banana,Carrot:state.Carrot,Medicine:state.Medicine}}

function mapDispatchToProps(dispatch){return {
GiveBanana:()=>dispatch({type:'Give_Banana'}),
GiveMedicine:()=>dispatch({type:'Give_Medicine'}),
GiveCarrot:()=>dispatch({type:'Give_Carrot'})}}

export default connect(mapStateToProps,mapDispatchToProps)(ItemsScreen)