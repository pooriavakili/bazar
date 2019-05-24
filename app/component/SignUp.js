import React,{Component} from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity, Alert
} from 'react-native'
import Button from 'react-native-button'
import {FormLabel,FormInput,FormValidationMessage} from 'react-native-elements'
export default class SignUp extends Component{








    render() {
        const Style={
            padding: 10,
            alignSelf: "stretch",
            alignItems: "center",
            backgroundColor:"blue"
        }
const {label,error}=this.props;
        return (
         <View style={style.container}>
           <TextInput placeholder="username"
           placeholderTextColor="#000"

           ></TextInput>
             <TextInput
             placeholder="password"
             placeholderTextColor="#000"
             secureTextEntry={true}
             ></TextInput>
             <TouchableOpacity style={style.Button}
             onPress={()=>{
                 this.props.navigation.navigate("dashboard")
             }}
             >
                 <Text style={style.Text}>Register</Text>
             </TouchableOpacity>
         </View>
        );
    }
}



const style=StyleSheet.create({
container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
},
    Button:{
        padding:20,
        backgroundColor:"#222f36",

        alignSelf:"stretch",
        alignItems:"center"
    },
    Text:{
    fontSize:18,
        color:"white",
        fontWeight: "bold"
    }
})