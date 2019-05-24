import React,{Component} from 'react'
import {
    Text,
    View,
    Picker,
    StyleSheet, TextInput
} from 'react-native'
export default class bastany extends Component{
    render(){
        return(
            <View>
                <Picker style={style.Picker}>
                <Picker.Item label="کیم" value="kim"/>
                    <Picker.Item label="عروسکی" value="arusaky"/>
                    <Picker.Item label="مگنوم" value="magnum"/>
                    <Picker.Item label="سالار" value="salar"/>
                    <Picker.Item label="قیفی" value="ghify"/>
                    <Picker.Item label="کارینو" value="karino"/>
                    <Picker.Item label="لیوانی" value="livany"/>
                    <Picker.Item label="زیزیگولو" value="zizigulu"/>
                    <Picker.Item label="پسته ای" value="peste"/>
                    <Picker.Item label="انبه ای" value="anbey"/>
                    <Picker.Item label="موزی" value="muzy"/>
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