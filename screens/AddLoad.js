import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View, StyleSheet, TextInput} from "react-native";

const AddLoad = ({navigation}) => {
    const [where,setWhere]=useState(null)
    const [whereOne,setWhereOne]=useState(null)
    const [extra, setExtra]=useState(null)
    const [price,setPrice]=useState(null)
    const [color,setColor]=useState('#fff')
    const [colorOne,setColorOne]=useState('#fff')
    const [colorTwo,setColorTwo]=useState('#fff')
    const [colorThree,setColorThree]=useState('#fff')
    const [colorFour,setColorFour]=useState('#fff')

    const Handle = () => {
        setColor('#FFCD30')
        setColorOne("#fff")
        setColorTwo("#fff")
        setColorThree("#fff")
        setColorFour("#fff")
    }
    const HandleOne = () => {
        setColorOne('#FFCD30')
        setColor("#fff")
        setColorTwo("#fff")
        setColorThree("#fff")
        setColorFour("#fff")
    }
    const HandleTwo = () => {
        setColorTwo('#FFCD30')
        setColorOne("#fff")
        setColor("#fff")
        setColorThree("#fff")
        setColorFour("#fff")
    }
    const HandleThree = () => {
        setColorThree('#FFCD30')
        setColorOne("#fff")
        setColor("#fff")
        setColorTwo("#fff")
        setColorFour("#fff")
    }
    const HandleFour = () => {
        setColorFour('#FFCD30')
        setColorOne("#fff")
        setColor("#fff")
        setColorTwo("#fff")
        setColorThree("#fff")
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <Image source={require('../assets/left-arrow.png')}/>
                </TouchableOpacity>
                <Text style={{fontSize: 20}}>
                    Yuk qo’shish
                </Text>
                <View></View>
            </View>
            <View style={{
                paddingBottom: 19,
                paddingHorizontal: 16,
                backgroundColor: "#fff",
                marginTop: 20,
                paddingTop: 19
            }}>
                <Text style={{fontSize: 16, marginBottom: 17}}>Qayerdan?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Region')}
                    style={styles.btnOne}>
                    <Image source={require('../assets/loaction.png')}/>
                    <Text style={{marginLeft: 10, color: "#8a8a8a", fontSize: 14}}>Viloyat,tuman</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    value={where}
                    onChangeText={setWhere}
                    keyboardType="default"
                    placeholder="Kocha nomi, uy raqami, mo’jal"
                />
            </View>
            <View style={{
                paddingBottom: 19,
                paddingHorizontal: 16,
                backgroundColor: "#fff",
                marginTop: 20,
                paddingTop: 19
            }}>
                <Text style={{fontSize: 16, marginBottom: 17}}>Qayerga</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Region')}
                    style={styles.btnOne}>
                    <Image source={require('../assets/loaction.png')}/>
                    <Text style={{marginLeft: 10, color: "#8a8a8a", fontSize: 14}}>Viloyat,tuman</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    value={whereOne}
                    onChangeText={setWhereOne}
                    keyboardType="default"
                    placeholder="Kocha nomi, uy raqami, mo’jal"
                />
            </View>
            <View style={{paddingHorizontal:16,paddingVertical:20}}>
                <Text style={{fontSize:16,color:"#000",marginBottom:15}}>
                    Yuk hajmi?
                </Text>
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity
                        onPress={()=>{
                            Handle()
                        }}
                        style={[styles.btn,{backgroundColor:color}]}>
                        <Text>
                            1 tonnagacha
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            HandleOne()
                        }}
                        style={[styles.btn,{backgroundColor:colorOne}]}>
                        <Text>
                            1-3 tonna
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            HandleTwo()
                        }}
                        style={[styles.btn,{backgroundColor:colorTwo}]}>
                        <Text>
                            4-7 tonna
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            HandleThree()
                        }}
                        style={[styles.btn,{backgroundColor:colorThree}]}>
                        <Text>
                            8-16 tonna
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            HandleFour()
                        }}
                        style={[styles.btn,{backgroundColor:colorFour}]}>
                        <Text>
                            17-30 tonna
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
            <View style={{backgroundColor:"#fff",paddingHorizontal:16,paddingVertical:20}}>
                <Text style={{fontSize:16,fontWeight:"500"}}>
                    Qo'shimcha ma'lumot?
                </Text>
                <TextInput
                    style={styles.input}
                    value={extra}
                    onChangeText={setExtra}
                    placeholder="Qo'shimcha ma'lumot kiriting"
                    keyboardType="default"
                />
                <View style={{flexDirection:"row",marginTop:20,paddingLeft:16}}>
                    <Text
                        onPress={()=>{
                            setExtra('Oldi o\'rindiq')
                        }}
                        style={styles.text}>
                        Oldi o'rindiq
                    </Text>
                    <Text
                        onPress={()=>{
                            setExtra('Benzin')
                        }}
                        style={styles.text}>
                        Benzin
                    </Text>
                    <Text
                        onPress={()=>{
                            setExtra('Muzlatgich')
                        }}
                        style={styles.text}>
                        Muzlatgich
                    </Text>
                </View>
            </View>
            <View style={{marginTop:20,backgroundColor:"#fff",paddingHorizontal:16,paddingVertical:20}}>
                <Text>
                    Yetkazib berish narxi
                </Text>
                <TextInput
                    style={styles.input}
                    value={price}
                    onChangeText={setPrice}
                    placeholder="300 000"
                />
                <View style={{flexDirection:"row",paddingTop:20,paddingLeft:16}}>
                    <Text
                        onPress={()=>{
                            setPrice('300 000')
                        }}
                        style={styles.text}>
                        300 000
                    </Text>
                    <Text
                        onPress={()=>{
                            setPrice('500 000')
                        }}
                        style={styles.text}>
                        500 000
                    </Text>
                    <Text
                        onPress={()=>{
                            setPrice('1 000 000')
                        }}
                        style={styles.text}>
                        1 000 000
                    </Text>
                    <Text
                        onPress={()=>{
                            setPrice('5 000 000')
                        }}
                        style={styles.text}>
                        5 000 000
                    </Text>
                </View>
            </View>
            <View style={{backgroundColor:"#fff",paddingHorizontal:16,paddingVertical:20}}>
                <TouchableOpacity style={[styles.btnOne,{marginBottom:35,flexDirection:"column",marginTop:23,backgroundColor:"#FFC847"}]}>
                    <Text style={{fontSize:16,fontWeight:"bold",textAlign:"center"}}>
                        Yuborish
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default AddLoad;
const styles=StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20
    },
    input: {
        borderWidth: 1,
        borderColor: "#dcdcdc",
        borderRadius: 10,
        padding: 14,
        marginTop: 10
    },
    btnOne: {
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 10,
        borderColor: "#DCDCDC",
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    btn:{
        paddingHorizontal:13,
        paddingVertical:12,
        borderColor:"#BF9100",
        borderRadius:7,
        borderWidth:1,
        marginRight:10
    },
    text: {
        fontSize: 16,
        fontWeight: "500",
        marginRight: 20,
        color: "#8a8a8a"
    }
})
