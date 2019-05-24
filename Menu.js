import React,{Component} from 'react'
import {
    Text,
    View,
}from 'react-native'
import {DrawerNavigator} from 'react-navigation'
import Dashboard from './app/component/Dashboard'
import AfzayeshEtebar from './app/DrawerNavigator/AfzayshEtebar'
import DasteBandyha from './app/DrawerNavigator/DasteBandyha'
import EntekhabAdress from './app/DrawerNavigator/EntekhabAdress'
import ListKharid from './app/DrawerNavigator/ListKharid'
import Poshtibany from './app/DrawerNavigator/Poshtibany'
import SefareshPishin from './app/DrawerNavigator/SefareshhayPishin'
    export default class Menu extends Component{
        render(){
            return(
<Apping/>

            )
        }
    }
    const Apping=DrawerNavigator({
        Dashboard:Dashboard,
        AfzayeshEtebar:AfzayeshEtebar,
        DasteBandyha:DasteBandyha,
        EntekhabAdress:EntekhabAdress,
        ListKharid:ListKharid,
        Poshtibany:Poshtibany,
        SefareshPishin:SefareshPishin
    })