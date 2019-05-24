import React,{Component} from 'react'
import {
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
    StyleSheet
}from 'react-native'
export default class portoeny extends Component{
    render(){
        return(
            <View>
                <TouchableWithoutFeedback
                onPress={()=>{
                    this.props.navigation.navigate("sosis")
                }}
                >
                <Image style={style.IIImage} source={require('../img/sosis.jpg')}/>
                </TouchableWithoutFeedback>
                <Text style={style.TTText}>انواع سوسیس</Text>
                <TouchableWithoutFeedback
                onPress={()=>{
                    this.props.navigation.navigate("kalbas")
                }}
                >
                <Image style={style.IIImage1} source={require('../img/kalbas.jpg')}/>
                </TouchableWithoutFeedback>
                <Text style={style.TTText1}>انواع کالباس</Text>
                <TouchableWithoutFeedback
                onPress={()=>{
                    this.props.navigation.navigate("hamberger")
                }}
                >
                <Image style={style.IIImage3} source={require('../img/hamberger.jpg')}/>
                </TouchableWithoutFeedback>
               <Text style={style.TTText2}>انواع همبرگر</Text>
                <TouchableWithoutFeedback
                onPress={()=>{
                    this.props.navigation.navigate("hotdog")
                }}
                >
                <Image style={style.IIImage2} source={require('../img/hotdog.jpg')}/>
                </TouchableWithoutFeedback>
                <Text style={style.TTText3}>انواع هات داگ</Text>
            </View>
        )
    }
}
const style=StyleSheet.create({
    IIImage:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:850,
        width:200,
        height:200
    },
    TTText:{
        fontSize: 20,
        color:"black",
        right:20,
        fontWeight: "bold"
    },
    IIImage1:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:590,
        bottom:230,
        width:200,
        height:200
    },
    TTText1:{
        fontSize: 20,
        color:"black",
        right:310,
        bottom:230,
        fontWeight: "bold"
    },
    IIImage3:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:320,
        bottom:460,
        width:200,
        height:200
    },
    TTText2:{
        fontSize: 20,
        color:"black",
        right:570,
        bottom:450,
        fontWeight: "bold"
    },
    IIImage2:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:20,
        bottom:690,
        width:200,
        height:200
    },
    TTText3:{
        fontSize: 20,
        color:"black",
        bottom:680,
        right:870,
        fontWeight: "bold"
    }
})