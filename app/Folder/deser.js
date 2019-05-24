import React,{Component} from 'react'
import {
    Picker,
    TextInput,
    Text,
    StyleSheet,
    View
} from 'react-native'
export default class deser extends Component{
    state={language: ""}
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
                    <Picker.Item label="دسرلیمو" value="deserlimu"/>
                    <Picker.Item label="دسرپاییزی" value="deserpaezy"/>
                    <Picker.Item label="دسرتوت فرنگی" value="desertutfarangy"/>
                    <Picker.Item label="پاناکوتای انار" value="panakutayanar"/>
                    <Picker.Item label="دسر شب یلدا" value="desershabyalda"/>
                    <Picker.Item label="دسرهلو" value="deserholu"/>
                    <Picker.Item label="دسریاقوتی" value="deseryaghuty"/>
                    <Picker.Item label="دسرماست وخرما" value="desermastkhorma"/>
                    <Picker.Item label="دسرکدوحلوایی" value="deserkaduhalvayy"/>
                    <Picker.Item label="دسرخامه شاتوتی" value="deserkhameshokolaty"/>
                    <Picker.Item label="دسرماست یونانی" value="mastyunany"/>
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
        left:200,
        top:80,
        padding:16,
        marginBottom:-20
    }
})