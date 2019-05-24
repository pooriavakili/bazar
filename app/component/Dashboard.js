/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import SignUp from './SignUp'

import Drawer from './Drawer'
import {Link} from 'react-router-native'
import Labaniat from '../Folder/Labiniat'
import Kharobar from '../Folder/kharbar'
import Bastany from '../Folder/bastany'
import porteiny from '../Folder/portoeny'
import {Header} from 'react-native-elements'
import {createStackNavigator,TabNavigator,createDrawerNavigator,createBottomTabNavigator,
DrawerActions,NavigationActions
}from 'react-navigation'
import {Icon,Left}from 'native-base'
        import {
    TextInput,
        StyleSheet,
            Dimensions,
            ImageBackground,
            DrawerLayoutAndroid,
            TouchableHighlight,
            TouchableWithoutFeedback,
            TouchableOpacity,
            Image,
    Text,
    View,



            SafeAreaView,
            ScrollView
} from 'react-native';
import Button from 'react-native-button'
console.disableYellowBox=true;




 class Dashboard extends Component {



     static  navigationOptions={
    headerRight:<TouchableOpacity onPress={(props)=>{

    }
    }>
<Image source={require("../img/left.png")}
style={{
    paddingLeft:10,
    width:20,
    height:20,

}}
/>

    </TouchableOpacity>

        ,
 headerLeft:   <View>


                <DrawerLayoutAndroid
            onDrawerOpen={("drawer")}


                >
                    <Image source={require("../img/menu.png")}
                    style={{
                        paddingLeft:10,
                        width:50,
                        height:50,

                    }}


                    />

                </DrawerLayoutAndroid>
     </View>


}


    render() {

        const Style={
            padding:10,
            width:100,
            height:100,

            backgroundColor:"blue",
            bottom:500,

            left:970
        }

        return (

<View>

    <TouchableWithoutFeedback onPress={()=>{
        this.props.navigation.navigate("labaniat")
    }}>
    <Image style={style.image} source={require('../img/labaniat.jpg')}/>
    </TouchableWithoutFeedback>

    <Text style={style.Text}>انواع لبنیات</Text>

<TouchableWithoutFeedback onPress={()=>{
    this.props.navigation.navigate("kharobar")
}}>
        <Image style={style.image1} source={require('../img/kharobar.jpg')}/>
</TouchableWithoutFeedback>

        <Text style={style.Text1}>انواع خواربار</Text>

    <TouchableWithoutFeedback onPress={()=>{
        this.props.navigation.navigate("porteiny")
    }}>
<Image style={style.image2} source={require('../img/mahsulatPoretuiny.jpg')}/>
    </TouchableWithoutFeedback>

<Text style={style.Text2}>انواع پروتئینی</Text>

    <TouchableWithoutFeedback onPress={()=>{
        this.props.navigation.navigate("bastany")
    }}>
    <Image style={style.image3} source={require('../img/bastany.jpg')}/>
    </TouchableWithoutFeedback>

<Text style={style.Text3}>انواع بستنی</Text>

    <Button containerStyle={Style}
    onPress={()=>{
        this.props.navigation.navigate("safhe")
    }}
    >صفحه بعد</Button>






</View>











        );
    }
}


const style=StyleSheet.create({

  image:{
      borderRadius:20,
      borderWidth:1,
      borderColor:"black",
    left:820,
      width:200,
      height:200
  },
    Text:{
      fontSize:20,
        color:"black",
        fontWeight: "bold",
        right:70
    },
    image1:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:570,
        bottom:230,
        width:200,
        height:200
    },
Text1:{
      fontSize: 20,
    color:"black",
    bottom:230,
    right:325,
    fontWeight: "bold"
},
    image2:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:310,
        bottom:460,
        width:200,
        height:200
    },
    Text2:{
        fontSize: 20,
        color:"black",
        bottom:460,
        right:570,
        fontWeight: "bold"
    },
    image3:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:40,
        bottom:690,
        width:200,
        height:200
    },
    Text3:{
        fontSize: 20,
        color:"black",
        bottom:690,
        right:855,
        fontWeight: "bold"
    },


})
export default Dashboard

