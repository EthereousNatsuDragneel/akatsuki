import React, {Component} from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import TabNav from './screens/tab.js'
import FriendScreen from './screens/FriendScreen.js'
import Left1 from './screens/Left1.js'
import Left2 from './screens/Left2.js'
import Up1 from './screens/Up1.js'
const initialState={up:require("./images/KeyboardKeyUp.png"),down:require("./images/KeyboardKeyDown.png"),right:require("./images/KeyboardKeyRight.png"),left:require("./images/KeyboardKeyLeft.png"),DRest:require("./images/DRest.png"),DWalk1:require("./images/DWalk1.png"),DWalk2:require("./images/DWalk2.png"),FRest:require("./images/FRest.png"),FWalk1:require("./images/FWalk1.png"),FWalk2:require("./images/FWalk2.png"),LRest:require("./images/LRest.png"),LWalk1:require("./images/LWalk1.png"),LWalk2:require("./images/LWalk2.png"),RRest:require("./images/RRest.png"),RWalk1:require("./images/RWalk1.png"),RWalk2:require("./images/RWalk2.png"),Tree:require("./images/Tree.png"),kekadu:require("./images/DRest.png"),Banana:require("./images/Banana.png"),Carrot:require("./images/Carrot.png"),Medicine:require("./images/Medicine.png"),
BananaCount:0,CarrotCount:0,MedicineCount:0,x:160,y:160,gameNow:FriendScreen}
const reducer=(state=initialState,action)=>{switch(action.type){
case 'Go_Left1':
if(state.x<50){return{gameNow:Left1,x:304}}
return{gameNow:Left1,x:16}
case 'Go_FriendScreen':
if(state.x>280){return{gameNow:FriendScreen,x:16}}
return{gameNow:FriendScreen,y:16}
//edit the following later
case 'Go_Up2':
return{gameNow:Up1}
case 'Go_Left2':
return{gameNow:Left2}
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