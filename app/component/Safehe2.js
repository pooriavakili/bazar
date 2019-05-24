import React,{Component} from 'react'
import {
    Text,
    Image,
    TouchableWithoutFeedback,
    View,
    StyleSheet
}from 'react-native'
export default class Safehe extends Component{
    render(){
        return(
            <View >
                <TouchableWithoutFeedback onPress={()=>{
                    this.props.navigation.navigate("deser")
                }}>
               <Image style={style.Image} source={require('../img/deser.jpg')}/>
                </TouchableWithoutFeedback>
                <Text style={style.Textt}>انواع دسر</Text>
                <TouchableWithoutFeedback onPress={()=>{
                    this.props.navigation.navigate("shiriny")
                }}>
                <Image style={style.Image1} source={require('../img/shiriny.jpg')}/>
                </TouchableWithoutFeedback>
                <Text style={style.Textt1}>انواع شیرینی</Text>
                <TouchableWithoutFeedback onPress={()=>{
                    this.props.navigation.navigate("lavazvemYekBarMasraf")
                }}>
                <Image style={style.Imagee2} source={require('../img/lavazemyekbarmasraf.jpg')}/>
                </TouchableWithoutFeedback>
                <Text style={style.Textt2}>انواع لوازم یک بار مصرف</Text>
            </View>
        )
    }
}
const style=StyleSheet.create({
 Image:{
     borderRadius:20,
     borderWidth:1,
     borderColor:"black",
    left:650,
     width:200,
     height:200
 },
    Textt:{
        fontSize: 20,
        color:"black",
      right:245,
        fontWeight: "bold"
    },
    Image1:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:340,
        bottom:230,
        width:200,
        height:200
    },
    Textt1:{
        fontSize: 20,
        color:"black",
        right:555,
       bottom:230,
        fontWeight: "bold"
    },
    Imagee2:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        left:70,
        bottom:460,
        width:200,
        height:200
    },
    Textt2:{
        fontSize: 20,
        color:"black",
      right:790,
        bottom:450,
        fontWeight: "bold"
    }

})