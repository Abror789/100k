import React from 'react';
import {Text, View, Image, TouchableOpacity,StyleSheet} from "react-native";

const NoInternet = () => {
    return (
        <View style={{backgroundColor: "#E2D6FA"}}>
            <View style={{position: "relative", alignItems: "center", justifyContent: "center", marginTop: 113}}>
                <Image source={require('../assets/internet.png')}/>
                <View style={{position: "absolute", right: 90, bottom: -5}}>
                    <Image source={require('../assets/warn.png')}/>
                </View>
            </View>
            <View style={{marginTop:39,paddingHorizontal:16}}>
                <Text style={{textAlign:"center",color:"#2B468B",fontSize:24,fontWeight:"bold"}}>Internet o’chib qoldi!</Text>
                <Text style={{textAlign:"center",marginTop:13,color:"#2B468B",fontSize:18,fontWeight:"500"}}>
                    Internet bilan aloqa yo’qoldi. Wfi yoki uyali aloqa internetini tekshiring va qaytadan urining.
                </Text>
            </View>
            <View style={{paddingHorizontal:30}}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{textAlign:"center",fontSize:18,fontWeight:"bold"}}>
                        Internetsiz foydalanish
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:12,marginBottom:86,alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontWeight:"500",fontSize:12,color:"#2B468B"}}>Qo’llab quvatlash xizmati</Text>
                <Text  style={{fontWeight:"500",fontSize:10,color:"#2B468B"}}>+998 71 800 80 50</Text>
            </View>
        </View>
    );
};

export default NoInternet;
const styles=StyleSheet.create({
    btn:{
        backgroundColor:"#FAB037",
        borderRadius:10,
        paddingVertical:14,
        marginTop:180
    }
})
