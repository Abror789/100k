import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet, TextInput} from "react-native";

const Kuriyer = ({navigation}) => {
    const [name,setName]=useState(null)
    const [surname,setSurname]=useState(null)
    const [number,setNumber]=useState(null)
    return (
        <View>
            <View  style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <Image source={require('../assets/left-arrow.png')}/>
                </TouchableOpacity>
                <Text style={{fontSize: 20}}>
                    Kuryer bo'lish
                </Text>
                <View></View>
            </View>
            <View style={{paddingHorizontal:16,marginTop:28}}>
                <Text style={{color:"#8a8a8a"}}>Izmingizni kiriting *</Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    style={[styles.input,{backgroundColor:"#fff"}]}
                />
                <Text style={{color:"#8a8a8a",marginTop:20}}>Familiyangizni kiriting *</Text>
                <TextInput
                    value={surname}
                    onChangeText={setSurname}
                    style={[styles.input,{backgroundColor:"#fff"}]}
                />
                <Text style={{color:"#8a8a8a",marginTop:20}}>Telefon raqamingizni kiriting *</Text>
                <TextInput
                    value={number}
                    onChangeText={setNumber}
                    style={[styles.input,{backgroundColor:"#fff"}]}
                    keyboardType="phone-pad"
                />
                <Text  style={{color:"#8a8a8a",marginTop:20,marginBottom:13}}>Pasport bilan rasm *</Text>
                <View style={{backgroundColor:"#fff",flexDirection:"row",paddingRight:90,alignItems:"center",paddingTop:14}}>
                    <Image style={{marginRight:14}} source={require('../assets/selfi.png')}/>
                    <View>
                        <Text style={{color:"#8a8a8a"}}>Pasportingiz qolingizga ushab rasimga tushing,
                            orqa tomoningizda bir xil
                            rangdagi rasm bolishi kerak
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Kuriyer;
const styles=StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20
    },
    inputView:{
        flexDirection:"row",
        alignItems:"center",
        marginTop: 10,
        backgroundColor:"#fff",
        paddingHorizontal:14,
        paddingVertical:20,
        marginBottom:20,
        borderWidth:1,
        borderColor:"#DCDCDC",
        borderRadius:7,
        justifyContent:"space-between"
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
