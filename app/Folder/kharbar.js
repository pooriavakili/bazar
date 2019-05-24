import React,{Component} from 'react'
import {
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    StyleSheet
}from 'react-native'
export default class kharbar extends Component{
    render(){
        return(
            <View>
                <TouchableWithoutFeedback onPress={()=>{
                    this.props.navigation.navigate("roghan")
                }}>
<Image style={style.IImage} source={require('../img/roghan.jpg')}/>
                </TouchableWithoutFeedback>
                <Text style={style.TText}>انواع روغن</Text>
                <TouchableWithoutFeedback
                onPress={()=>{
                    this.props.navigation.navigate("makerouny")
                }}
                >
                <Image style={style.IImage1} source={require("../img/makeruny1.jpg")}/>
                </TouchableWithoutFeedback>
                <Text style={style.TText1}>انواع ماکارونی</Text>
                <TouchableWithoutFeedback
                onPress={()=>{
                    this.props.navigation.navigate("berenj")
                }}
                >
                <Image style={style.IImage2} source={require('../img/beranj.jpg')}/>
                </TouchableWithoutFeedback>
                <Text style={style.TText2}>انواع برنج</Text>
                <TouchableWithoutFeedback
                onPress={()=>{
                    this.props.navigation.navigate("hobubat")
                }}
                >
                <Image source={require('../img/hoboobat.jpg')} style={style.IImage3}/>
                </TouchableWithoutFeedback>
                <Text style={style.TText3}>انواع حبوبات</Text>
            </View>
        )
    }
}
const style=StyleSheet.create({
    IImage:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:840,
        width:200,
        height:200
    },
    TText:{
        fontSize: 20,
        color:"black",
        right:60,
        fontWeight: "bold"
    },
    IImage1:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:600,
        bottom:230,
        width:200,
        height:200
    },
    TText1:{
        fontSize: 20,
        color:"black",
        right:290,
        bottom:230,
        fontWeight: "bold"
    },
    IImage2:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:310,
        bottom:460,
        width:200,
        height:200
    },
    TText2:{
        fontSize: 20,
        color:"black",
        right:590,
        bottom:460,
        fontWeight: "bold"
    },
    IImage3:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:20,
        bottom:690,
        width:200,
        height:200
    },
    TText3:{
        fontSize: 20,
        color:"black",
        bottom:690,
        right:880,
        fontWeight: "bold"
    }
})