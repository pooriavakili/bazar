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
                    <Picker.Item label=" دم سیاه" value="sofreyekbarmasraf"/>
                    <Picker.Item label="دم سرخ" value="ghashoughyekbarmasraf"/>
                    <Picker.Item label="هاشمی" value="changalyekbarmasraf"/>
                    <Picker.Item label="طارم" value="livanyekbarmasraf"/>
                    <Picker.Item label="بیتام" value="zarfyekbarmasraf"/>
                    <Picker.Item label="حصتی" value="boshghabyekbarmasraf"/>
                    <Picker.Item label="غریب" value="boshghabyekbarmasraf"/>
                    <Picker.Item label="گرده" value="boshghabyekbarmasraf"/>
                    <Picker.Item label="دم زرد" value="boshghabyekbarmasraf"/>

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