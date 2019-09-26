import React, {Component} from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import {connect} from 'react-redux'
import InstructionsScreen from './InstructionsScreen.js'
import ItemsScreen from './ItemsScreen.js'
const TabNavigator=createBottomTabNavigator({Game:{screen:FriendScreen,navigationOptions:{title:"Game"}},Instructions:{screen:InstructionsScreen,navigationOptions:{title:"Instructions"}},Items:{screen:ItemsScreen,navigationOptions:{title:"Items"}}},{initialRouteName:"Game"})
const AppContainer=createAppContainer(TabNavigator)
const TNLeft1=createBottomTabNavigator({Game:{screen:Left1,navigationOptions:{title:"Game"}},Instructions:{screen:InstructionsScreen,navigationOptions:{title:"Instructions"}},Items:{screen:ItemsScreen,navigationOptions:{title:"Items"}}},{initialRouteName:"Game"})
const AppContainerLeft1=createAppContainer(TNLeft1)
class TabNav extends Component{
render(){if(this.props.gameNow=="FriendScreen"){return(<AppContainer/>)}
if(this.props.gameNow=="Left1"){return(<AppContainerLeft1/>)}}}

function mapStateToProps(state){
return{gameNow:state.gameNow}}

export default connect(mapStateToProps,null)(TabNav)