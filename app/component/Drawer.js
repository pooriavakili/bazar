import React,{Component} from 'react'

import SefareshhayPishin from './sefareshhaypishin'
import  SefareshDaDan from './sefareshhayDadan'

import {createDrawerNavigator} from 'react-navigation'
import Dashboard from './Dashboard'
 export default class Drawer extends Component{
    static navigationOptions={

        drawerPosition:"left",
        drawerOpenRoute:"DrawerOpen",
        drawerCloseRoute:"DrawerClose",
        drawerToggleRoute:"DrawerToggle",

    }

     render(){
         return(
<App/>

         )
     }
 }
 const App=createDrawerNavigator({
     sefareshhayPishin:{
         path:"/",
         screen:SefareshhayPishin},
     sefareshDadan:{
         path:"/",
         screen:SefareshDaDan},


 },{

     contentComponent:Dashboard,
     contentOptions:{
         activeTintColor: "yellow"
     }
 })