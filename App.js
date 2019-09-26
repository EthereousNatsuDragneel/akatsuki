import React, {Component} from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import TabNav from './screens/tab.js'
import ItemsScreen from './screens/ItemsScreen.js'
import InstructionsScreen from './screens/InstructionsScreen.js'
import FriendScreen from './screens/FriendScreen.js'
import Left1 from './screens/Left1.js'
import Left2 from './screens/Left2.js'
import Left3 from './screens/Left3.js'
import Left4 from './screens/Left4.js'
import DonkeyScreen from './screens/DonkeyScreen.js'
import MonkeyScreen from './screens/MonkeyScreen.js'
import Up1 from './screens/Up1.js'
const initialState={up:require("./images/KeyboardKeyUp.png"),down:require("./images/KeyboardKeyDown.png"),right:require("./images/KeyboardKeyRight.png"),left:require("./images/KeyboardKeyLeft.png"),DRest:require("./images/DRest.png"),DWalk1:require("./images/DWalk1.png"),DWalk2:require("./images/DWalk2.png"),FRest:require("./images/FRest.png"),FWalk1:require("./images/FWalk1.png"),FWalk2:require("./images/FWalk2.png"),LRest:require("./images/LRest.png"),LWalk1:require("./images/LWalk1.png"),LWalk2:require("./images/LWalk2.png"),RRest:require("./images/RRest.png"),RWalk1:require("./images/RWalk1.png"),RWalk2:require("./images/RWalk2.png"),Tree:require("./images/Tree.png"),kekadu:require("./images/DRest.png"),Banana:require("./images/Banana.png"),Carrot:require("./images/Carrot.png"),Medicine:require("./images/Medicine.png"),
DBird:require("./images/spriteart/DBird.png"),FBird:require("./images/spriteart/FBird.png"),LBird:require("./images/spriteart/LBird.png"),RBird:require("./images/spriteart/RBird.png"),DDonkey:require("./images/spriteart/DDonkey.png"),FDonkey:require("./images/spriteart/FDonkey.png"),LDonkey:require("./images/spriteart/LDonkey.png"),RDonkey:require("./images/spriteart/RDonkey.png"),DMonkey:require("./images/spriteart/DMonkey.png"),FMonkey:require("./images/spriteart/FMonkey.png"),LMonkey:require("./images/spriteart/LMonkey.png"),RMonkey:require("./images/spriteart/RMonkey.png"),DRabbit:require("./images/spriteart/DRabbit.png"),FRabbit:require("./images/spriteart/FRabbit.png"),LRabbit:require("./images/spriteart/LRabbit.png"),RRabbit:require("./images/spriteart/RRabbit.png"),DFox:require("./images/spriteart/DFox.png"),FFox:require("./images/spriteart/FFox.png"),LFox:require("./images/spriteart/LFox.png"),RFox:require("./images/spriteart/RFox.png"),
BananaCount:0,CarrotCount:0,MedicineCount:0,x:160,y:160,gameNow:"FriendScreen"}
const reducer=(state=initialState,action)=>{switch(action.type){
case 'Go_Up2Left1':
if(state.gameNow=="Up2"){return{gameNow:"Up2Left1",x:304}}
return{gameNow:"Up2Left1",x:16}
case 'Go_Up2Left2':
return{gameNow:"Up2Left2",x:304}
case 'Go_Up2Right1':
if(state.gameNow=="Up2"){return{gameNow:"Up2Right1",x:16}}
return{gameNow:"Up2Right2",x:304}
case 'Go_Up2Right2':
return{gameNow:"Up2Right2",x:16}
case 'Go_Up2':
if(state.gameNow=="Up1"){return{gameNow:"Up2",y:304}}
if(state.gameNow=="Up2Left1"){return{gameNow:"Up2Left1",x:16}}
if(state.gameNow=="Up2Right1"){return{gameNow:"Up2Right1",x:304}}
return{gameNow:"Up2",y:16}
case 'Go_Up3Left1':
if(state.gameNow=="Up3"){return{gameNow:"Up3Left1",x:304}}
return{gameNow:"Up3Left1",x:16}
case 'Go_Up3Left2':
return{gameNow:"Up3Left2",x:304}
case 'Go_Up3Right1':
if(state.gameNow=="Up3"){return{gameNow:"Up3Right1",x:16}}
return{gameNow:"Up3Right2",x:304}
case 'Go_Up3Right2':
return{gameNow:"Up3Right2",x:16}
case 'Go_Up3':
if(state.gameNow=="Up2"){return{gameNow:"Up3",y:304}}
if(state.gameNow=="Up3Left1"){return{gameNow:"Up3Left1",x:16}}
if(state.gameNow=="Up3Right1"){return{gameNow:"Up3Right1",x:304}}
return{gameNow:"Up3",y:16}
case 'Go_Up2Left1':
if(state.gameNow=="Up2"){return{gameNow:"Up2Left1",x:304}}
return{gameNow:"Up2Left1",x:16}
case 'Go_Up2Left2':
return{gameNow:"Up2Left2",x:304}
case 'Go_Up4':
return{gameNow:"Up4",y:16}
case 'Go_Up2Right1':
if(state.gameNow=="Up2"){return{gameNow:"Up2Right1",x:16}}
return{gameNow:"Up2Right2",x:304}
case 'Go_Up2Right2':
return{gameNow:"Up2Right2",x:16}
case 'Go_Up2':
if(state.gameNow=="Up1"){return{gameNow:"Up2",y:304}}
if(state.gameNow=="Up1Left1"){return{gameNow:"Up2Left1",x:16}}
if(state.gameNow=="Up2Right1"){return{gameNow:"Up2Right1",x:304}}
return{gameNow:"Up2",y:16}

case 'Go_Up1Left1':
if(state.gameNow=="Up1"){return{gameNow:"Up1Left1",x:304}}
return{gameNow:"Up1Left1",x:16}
case 'Go_Up1Left2':
return{gameNow:"Up1Left2",x:304}
case 'Go_Up1Right1':
if(state.gameNow=="Up1"){return{gameNow:"Up1Right1",x:16}}
return{gameNow:"Up1Right2",x:304}
case 'Go_Up1Right2':
return{gameNow:"Up1Right2",x:16}
case 'Go_Left3':
if(state.gameNow==Left2){return{gameNow:"Left3",x:304}}
return{gameNow:"Left3",x:16}
case 'Go_Left4':
return{gameNow:"Left4",x:304}
case 'Go_Monkey':
return{gameNow:"MonkeyScreen",y:16}
case 'Go_Donkey':
return{gameNow:"DonkeyScreen",y:304}
case 'Go_Left1':
if(state.x<50){return{gameNow:"Left1",x:304}}
return{gameNow:"Left1",x:16}
case 'Go_FriendScreen':
if(state.x>280){return{gameNow:"FriendScreen",x:16}}
return{gameNow:"FriendScreen",y:16}
case 'Go_Up1':
if(state.gameNow=="FriendScreen"){return{gameNow:"Up1",y:304}}
if(state.gameNow=="Up1Left1"){return{gameNow:"Up1Left1",x:16}}
if(state.gameNow=="Up1Right1"){return{gameNow:"Up1Right1",x:304}}
return{gameNow:"Up1",y:16}
case 'Go_Left2':
if(state.gameNow==Left1){return{gameNow:"Left2",x:304}}
if(state.gameNow==Left3){return{gameNow:"Left2",x:16}}
if(state.gameNow==DonkeyScreen){return{gameNow:"Left2",y:16}}
return{gameNow:"Left2",y:304}
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