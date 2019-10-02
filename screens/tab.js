import React, {Component} from 'react'
import {BackHandler} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import InstructionsScreen from './InstructionsScreen.js'
import ItemsScreen from './ItemsScreen.js'
import FriendScreen from './FriendScreen.js'
import Left1 from './Left1.js'
import {createStackNavigator} from 'react-navigation-stack'

const stack=createStackNavigator({Home:FriendScreen,Left1:{screen:Left1,navigationOptions:{headerLeft:null}}},{initialRouteName:"Home"})
const TabNavigator=createBottomTabNavigator({Game:stack,Items:ItemsScreen,Instructions:InstructionsScreen},{initialRouteName:"Game"})
const AppContainer=createAppContainer(TabNavigator)

export default class TabNav extends Component{
componentDidMount(){BackHandler.addEventListener('hardwareBackPress',this.handleBackButton);}
handleBackButton(){return true}
render(){return(<AppContainer/>)}}