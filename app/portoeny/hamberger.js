import React,{Component} from 'react'
import {
    StyleSheet,
    Text,
    Picker,
    TextInput,
    View
} from 'react-native'
export default class lavazemyekbarmasraf extends Component{
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
                    <Picker.Item label=" همبرگرذغالی" value="sofreyekbarmasraf"/>
                    <Picker.Item label="همبرگرگیاهی" value="ghashoughyekbarmasraf"/>
                    <Picker.Item label="چیزبرگر" value="changalyekbarmasraf"/>
                    <Picker.Item label="چیکن برگر" value="livanyekbarmasraf"/>
                    <Picker.Item label="اسموکی برگر" value="zarfyekbarmasraf"/>
                    <Picker.Item label="چیزبیکن برگر" value="boshghabyekbarmasraf"/>


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
        top:80,
        padding:16,
        marginBottom:-20
    }
})