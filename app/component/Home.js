import React,{Component} from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    KeyboardAvoidingView,
    Animated,
    Easing,

    Alert,
    ImageBackground

}from 'react-native'
import Button from 'react-native-button'


import SignUp from './SignUp'


class Home extends Component{
    state={
        userName:"",
        password:""
    }
    constructor(props){
        super(props);
        this.spinValue=new Animated.Value(0)
    }
    componentWillMount(){
        this.spin()
    }
    spin(){
        this.spinValue.setValue(0);
        Animated.timing(this.spinValue,{
            toValue:1,
            duration:4000,
            easing:Easing.linear
        }).start(()=>this.spin())
    }

    Login(){



    }
    render(){

        const Style={
            bottom:60,
            backgroundColor:"grey",
            alignItems:"center",
            alignSelf:"stretch",
            padding:20,

        }
        const spin=this.spinValue.interpolate({
            inputRange:[0,1],
            outputRange:['0deg','360deg']
        })

        const {Error}=this.props;
        return(

            <View style={styles.container}>

                <Animated.Image source={require('../img/sabad.png')}
                                style={{
                                    height: 200,
                                    marginTop:-30,
                                    width: 225,
                                    transform: [{rotate:spin}]
                                }}
                />

            <View>
                    <TextInput

                    placeholder="username"
                    style={styles.UserName}
                    placeholderTextColor="#000"
                    onChangeText={(text)=>{
                        this.setState({
                            userName:text
                        })
                    }}
                    />
                <TextInput
                  onChangeText={(text)=>{
                      this.setState({
                          password:text
                      })
                  }}
                    placeholder="password"
                    placeholderTextColor="#000"
                    secureTextEntry={true}
                />

            </View>

                    <TouchableOpacity style={styles.Touch}
                    onPress={()=>{
                        this.props.navigation.navigate("signUp")
                    }}
                    >
                        <Text style={styles.Text}>Signup</Text>

                    </TouchableOpacity>
<View style={{
    alignItems:"center",
    justifyContent: "center",
    alignSelf:"stretch"
}}>
    <Button containerStyle={Style}
    onPress={this.Login()}
    >Sign In</Button>
</View>



            </View>






        )
    }
}
export default Home
const styles=StyleSheet.create({

   container:{

flex:1,

        alignItems:"center",
        justifyContent: "center",

    },

UserName:{
       marginTop: 40
},
Touch:{
  top:80,
    alignSelf: "stretch",
    backgroundColor:"grey",
    padding:20,


    alignItems: "center"
},
Text:{
       fontSize:20,
    color:"#000",
    fontWeight:"bold"
}


})

