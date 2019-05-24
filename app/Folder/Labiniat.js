import React,{Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableWithoutFeedback
}from 'react-native'
export default class Labiniat extends Component{
    render(){
        return(
            <View>
                <TouchableWithoutFeedback
                onPress={()=>{
                    this.props.navigation.navigate("shir")
                }}
                >
<Image style={style.Imagee1} source={require('../img/shir.jpg')}/>
                </TouchableWithoutFeedback>
                <Text style={style.Texttt1}>انواع شیر</Text>
                <TouchableWithoutFeedback onPress={()=>{
                    this.props.navigation.navigate("kare")
                }}>
                <Image style={style.Imagee2} source={require('../img/kare.jpg')}/>
                </TouchableWithoutFeedback>
                <Text style={style.Textt2}>انواع کره</Text>
                <TouchableWithoutFeedback
                onPress={()=>{
                    this.props.navigation.navigate("panir")
                }}
                >
                <Image style={style.Imagee3} source={require('../img/panir.jpg')}/>
                </TouchableWithoutFeedback>
                <Text style={style.Textt3}>انواع پنیر</Text>
                <TouchableWithoutFeedback
                onPress={()=>{
                    this.props.navigation.navigate("mast")
                }}
                >
                <Image style={style.Imagee4} source={require('../img/mast.jpg')}/>
                </TouchableWithoutFeedback>
                <Text style={style.Textt4}>انواع ماست</Text>
            </View>
        )
    }
}
const style=StyleSheet.create({
    Imagee1:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:850,
        width:200,
        height:200
    },
    Texttt1:{
        fontSize: 20,
        color:"black",
        right:60,
        fontWeight: "bold"
    },
    Imagee2:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:580,
        bottom:230,
        width:200,
        height:200
    },
    Textt2:{
        fontSize: 20,
        color:"black",
        right:320,
        bottom:230,
        fontWeight: "bold"
    },
    Imagee3:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:310,
        bottom:460,
        width:200,
        height:200
    },
    Textt3:{
        fontSize: 20,
        color:"black",
        right:590,
        bottom:450,
        fontWeight: "bold"
    },
    Imagee4:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:20,
        bottom:690,
        width:200,
        height:200
    },
    Textt4:{
        fontSize: 20,
        color:"black",
        bottom:680,
        right:890,
        fontWeight: "bold"
    }
})