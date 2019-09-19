import React, {Component} from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import FriendScreen from './screens/FriendScreen.js'
import InstructionsScreen from './screens/InstructionsScreen.js'
import ItemsScreen from './screens/ItemsScreen.js'
const TabNavigator=createBottomTabNavigator({Game:{screen:FriendScreen,navigationOptions:{title:"Game"}},Instructions:{screen:InstructionsScreen,navigationOptions:{title:"Instructions"}},Items:{screen:ItemsScreen,navigationOptions:{title:"Items"}}},{initialRouteName:"Game"})
export default createAppContainer(TabNavigator)