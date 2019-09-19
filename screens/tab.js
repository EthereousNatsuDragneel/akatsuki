import React, {Component} from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import FriendScreen from './FriendScreen.js'
import InstructionsScreen from './InstructionsScreen.js'
import ItemsScreen from './ItemsScreen.js'
const TabNavigator=createBottomTabNavigator({Game:{screen:FriendScreen,navigationOptions:{title:"Game"}},Instructions:{screen:InstructionsScreen,navigationOptions:{title:"Instructions"}},Items:{screen:ItemsScreen,navigationOptions:{title:"Items"}}},{initialRouteName:"Game"})
const AppContainer=createAppContainer(TabNavigator)
export default class TabNav extends Component{
render(){return(
<AppContainer/>)}}