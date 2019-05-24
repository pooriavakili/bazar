import React,{Component} from 'react'
import {
    Picker, StyleSheet,
    Text, TextInput,
    View
} from 'react-native'
export default class Shiriny extends Component{
    state={language:""}
    render(){
        return(
            <View>
                <Picker style={style.Picker}
                selectedValue={this.state.language}
                        onValueChange={(itemValue,itemIndex)=>{
                            this.setState({
                                language:itemValue
                            })
                        }}
                >
                    <Picker.Item label="اسکار" value="oskar"/>
                    <Picker.Item label="بادام سوخته" value="badumSukhte"/>
                    <Picker.Item label="باقلوا" value="baghlava"/>
                    <Picker.Item label="بامیه" value="bamie"/>
                    <Picker.Item label="حلوا" value="halva"/>
                    <Picker.Item label="زولبیا" value="zulbia"/>
                    <Picker.Item label="سجوق" value="sajugh"/>
                    <Picker.Item label="دانمارکی" value="danmarky"/>
                    <Picker.Item label="خامه ای" value="khamey"/>
                    <Picker.Item label="نعلی" value="naely"/>
                    <Picker.Item label="کشمشی" value="keshmeshy"/>
                </Picker>
                <TextInput style={style.TextInput} placeholder="تعداد"
                           placeholderTextColor="#000"
                />
            </View>
        )
    }
}
const style=StyleSheet.create({
    Picker:{
        width:200,
        height:200,
        top:150,
        left:650
    },
    TextInput:{
        fontSize:25,
        alignSelf:"stretch",
        textAlign: "center",
        left:50,
        top:50,
        padding:16,
        marginBottom:-20
    }
})