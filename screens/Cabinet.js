import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

const Cabinet = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={{width: 125, height: 125}} source={require('../assets/bee.png')}/>
            <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                <Image style={{width: 51, height: 36, marginLeft: 29, marginTop: -10}}
                       source={require('../assets/bulut1.png')}/>
                <Image style={{width: 29, height: 17, marginTop: 10}} source={require('../assets/bulut2.png')}/>
                <Image style={{width: 84, height: 50, marginTop: -20}} source={require('../assets/bulut3.png')}/>
            </View>
            <View style={{paddingHorizontal: 30}}>
                <Text style={{fontSize: 24, color: '#fff', textAlign: "center", fontWeight: "bold", marginTop: 14}}>100k
                    Expressga xush kelibsiz</Text>
            </View>
            <View style={{paddingHorizontal: 30}}>
                <Text style={{fontSize:18,color:"#fff",textAlign:'center',marginTop:32}}>Taksi chaqirish, pochta yuborish, transport izlash uchun tizimiga kiring. Agar sizda profile
                    yaratilmagan bolsa muommo yoq, profile yaratish uchun telefon raqamingizni kiritsangiz bas.</Text>
            </View>
            <View style={{marginTop:82}}>
                <Text style={{textAlign:"center",color:"#fff"}}>Ro'yxatdan o'tish orqali siz bizning </Text>
                <View style={{flexDirection:"row"}}>
                    <Text style={{textAlign:"center",color:"#000"}}>foydalanish shartlariga </Text>
                    <Text style={{textAlign:"center",color:"#fff"}}>rozilik bildirasiz</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{marginBottom:35,marginTop:21,backgroundColor: "#FFD147",paddingVertical:19,paddingHorizontal:51,borderRadius:10,borderWidth:1,borderColor:"#BF9100"}}>
                <Text style={{fontSize:18}}>Kirish yoki Profil ochish</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Cabinet;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FEA832"
    }
})
