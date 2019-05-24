/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import SefareshhayPishin from '../DrawerNavigator/SefareshhayPishin'
import ListKharid from '../DrawerNavigator/ListKharid'
import DasteBandyha from '../DrawerNavigator/DasteBandyha'
import EntekhabAdress from '../DrawerNavigator/EntekhabAdress'
import AfzayshEtebar from '../DrawerNavigator/AfzayshEtebar'
import Poshtibany from '../DrawerNavigator/Poshtibany'
export default class MenuApp extends Component {

    render() {
        return (

<AppStack/>

        );
    }
}


