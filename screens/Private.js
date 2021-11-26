import React,{useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView} from "react-native";

const Private = ({navigation}) => {
    const [name,onChangeName]=useState(null)
    const [surname,onChangeSurName]=useState(null)
    const [number,onChangeNumber]=useState(null)
    return (
        <View>
            <View style={styles.container}>
               <TouchableOpacity
                   onPress={() => navigation.navigate('My')}
               >
                   <Image source={require('../assets/left-arrow.png')}/>
               </TouchableOpacity>
               <Text style={{fontSize:20}}>
                   Xususiylashtirish
               </Text>
               <View></View>
           </View>
            <View style={{justifyContent:"center",alignItems:"center",marginTop:17}}>
                <Image style={{width:90,height:90}} source={require('../assets/bee.png')}/>
                <Text style={{fontSize:24,marginTop:12}}>100k Expressga</Text>
            </View>
            <View style={{paddingHorizontal:16,marginTop:22}}>
                <View>
                    <Text style={{fontSize:14,color:"#8a8a8a"}}>Ismingizni kiriting *</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={onChangeName}
                        keyboardType="default"
                    />
                </View>

                <View>
                    <Text style={{fontSize:14,color:"#8a8a8a",marginTop:9}}>Familiyangizni kiriting *</Text>
                    <TextInput
                        style={styles.input}
                        value={surname}
                        onChangeText={onChangeSurName}
                        keyboardType="default"
                    />
                </View>

                <View>
                    <Text style={{fontSize:14,color:"#8a8a8a",marginTop:9}}>Telefon raqamingizni kiriting *</Text>
                    <TextInput
                        style={styles.input}
                        value={number}
                        onChangeText={onChangeNumber}
                        keyboardType="numeric"
                    />
                </View>

                <View>
                    <TouchableOpacity style={{marginTop:44,backgroundColor:"#ffc847",paddingVertical:19,borderRadius:10,borderWidth:1,borderColor:"#BF9100"}}>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>SAQLAMOQ</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:30,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontWeight:"500",fontSize:14}}>Qo’llab quvatlash xizmati</Text>
                    <Text  style={{fontWeight:"500",fontSize:12}}>+998 71 800 80 50</Text>
                </View>
            </View>
        </View>
    );
};

export default Private;
const styles=StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:16,
        paddingVertical:20
    },
    input:{
        borderWidth:1,
        marginTop:10,
        borderColor:"#DCDCDC",
        borderRadius:10,
        backgroundColor:"#fff",
        paddingVertical:15,
        paddingHorizontal: 17,
        fontSize:18,
        color:"#000",
        fontWeight:"bold"
    }
})
