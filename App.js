/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Home from './app/component/Home'
import Safhe from './app/component/Safehe2'
import Dashboard from './app/component/Dashboard'
import Bastany from './app/Folder/bastany'
import Deser from './app/Folder/deser'
import Shiriny from './app/Folder/Shiriny'
import LavazemYekBarMasraf from './app/Folder/lavazemyekbarmasraf'
import Kharobar from './app/Folder/kharbar'
import Labiniat from './app/Folder/Labiniat'
import  Portoeny from './app/Folder/portoeny'
import {createStackNavigator} from 'react-navigation'
import SignUp from "./app/component/SignUp";
import Kare from './app/Labaniat/Kare'
import Hamberger from './app/portoeny/hamberger'
import HotDog from './app/portoeny/hotdog'
import Sosis from './app/portoeny/sosis'
import Kalbas from './app/portoeny/kalbas'
import Panir from './app/Labaniat/panir'
import Shir from './app/Labaniat/Shir]'
import Mast from './app/Labaniat/Mast'
import Bereng from './app/kharobar/bereng'
import Hobubat from './app/kharobar/Hobubat'
import Drawer from './app/component/Drawer'
import Makerouny from './app/kharobar/Makerony'
import Roghan from './app/kharobar/Roghan'
export default class App extends Component{
    render(){
        return(
            <AppApp/>
        )
    }
}




const AppApp= createStackNavigator({

    home:Home,
    dashboard:Dashboard,
    signUp:SignUp,
labaniat:Labiniat,
    bastany:Bastany,
    kharobar:Kharobar,
    porteiny:Portoeny,
    safhe:Safhe,
    deser:Deser,
    shiriny:Shiriny,
    lavazvemYekBarMasraf:LavazemYekBarMasraf,
kare:Kare,
    panir:Panir,
    shir:Shir,
    mast:Mast,
    berenj:Bereng,
    makerouny:Makerouny,
    hobubat:Hobubat,
    roghan:Roghan,
    hamberger:Hamberger,
    sosis:Sosis,
    kalbas:Kalbas,
    hotdog:HotDog,
    drawer:Drawer
})