import React, {Component} from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import TabNav from './screens/tab.js'
const initialState={up:require("./images/KeyboardKeyUp.png"),down:require("./images/KeyboardKeyDown.png"),right:require("./images/KeyboardKeyRight.png"),left:require("./images/KeyboardKeyLeft.png"),DRest:require("./images/DRest.png"),DWalk1:require("./images/DWalk1.png"),DWalk2:require("./images/DWalk2.png"),FRest:require("./images/FRest.png"),FWalk1:require("./images/FWalk1.png"),FWalk2:require("./images/FWalk2.png"),LRest:require("./images/LRest.png"),LWalk1:require("./images/LWalk1.png"),LWalk2:require("./images/LWalk2.png"),RRest:require("./images/RRest.png"),RWalk1:require("./images/RWalk1.png"),RWalk2:require("./images/RWalk2.png"),Tree:require("./images/Tree.png"),kekadu:require("./images/DRest.png"),Banana:require("./images/Banana.png"),Carrot:require("./images/Carrot.png"),Medicine:require("./images/Medicine.png"),
DBird:require("./images/spriteart/DBird.png"),FBird:require("./images/spriteart/FBird.png"),LBird:require("./images/spriteart/LBird.png"),RBird:require("./images/spriteart/RBird.png"),DDonkey:require("./images/spriteart/DDonkey.png"),FDonkey:require("./images/spriteart/FDonkey.png"),LDonkey:require("./images/spriteart/LDonkey.png"),RDonkey:require("./images/spriteart/RDonkey.png"),DMonkey:require("./images/spriteart/DMonkey.png"),FMonkey:require("./images/spriteart/FMonkey.png"),LMonkey:require("./images/spriteart/LMonkey.png"),RMonkey:require("./images/spriteart/RMonkey.png"),DRabbit:require("./images/spriteart/DRabbit.png"),FRabbit:require("./images/spriteart/FRabbit.png"),LRabbit:require("./images/spriteart/LRabbit.png"),RRabbit:require("./images/spriteart/RRabbit.png"),DFox:require("./images/spriteart/DFox.png"),FFox:require("./images/spriteart/FFox.png"),LFox:require("./images/spriteart/LFox.png"),RFox:require("./images/spriteart/RFox.png"),
BananaCount:0,CarrotCount:0,MedicineCount:0,x:160,y:160}
const reducer=(state=initialState,action)=>{switch(action.type){
case 'Go_Left1':
return{x:304}
case 'Go_FriendScreen':
return{x:16}
case 'kleft':
return{x:state.x-16}
case 'kright':
return{x:state.x+16}
case 'kup':
return{y:state.y-16}
case 'kdown':
return{y:state.y+16}
case 'Get_Banana':
return {BananaCount:1}
case 'Give_Banana':
return {BananaCount:0}
case 'Get_Carrot':
return {CarrotCount:1}
case 'Give_Carrot':
return {CarrotCount:0}
case 'Get_Medicine':
return {MedicineCount:1}
case 'Give_Medicine':
return {MedicineCount:0}}
return state}
const store=createStore(reducer)
class App extends Component{
render(){return(
<Provider store={store}>
<TabNav/>
</Provider>)}}
export default App