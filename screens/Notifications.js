import React from 'react';
import {View,TouchableOpacity,Text,Image,StyleSheet} from "react-native";

const Notifications = ({navigation}) => {
    return (
       <View>
           <View style={styles.container}>
               <TouchableOpacity
                   onPress={() => navigation.navigate('My')}
               >
                   <Image source={require('../assets/left-arrow.png')}/>
               </TouchableOpacity>
               <Text style={{fontSize:20}}>
                   Bildirishnomalar
               </Text>
               <View></View>
            </View>
           <View style={{paddingHorizontal:16,marginTop:18}}>
               <View style={styles.card}>
                   <View style={{flexDirection:"row"}}>
                       <View style={styles.bell}>
                           <Image style={{width:24,height:24}} source={require('../assets/bell.png')}/>
                       </View>
                       <View style={{marginLeft:10}}>
                           <Text style={{color:'#505050',fontSize:14}}>Sizning zakazingiz ko’rib chiqilmoqda</Text>
                           <Text style={{fontSize:12,paddingRight:12,color:'#505050'}}>
                               Sizning zakazingiz ko’rib chiqilmoqda sizning zakazingiz ko’rib chiqilmoqda sizning zakazingiz ko’rib chiqilmoqda
                           </Text>
                       </View>
                   </View>
                   <View style={{flexDirection:"row-reverse",marginTop:7}}>
                       <Text style={{fontSize:10,color:"#8a8a8a"}}>
                           22 aprel
                       </Text>
                   </View>
               </View>
               <View style={styles.card}>
                   <View style={{flexDirection:"row"}}>
                       <View style={styles.bell}>
                           <Image style={{width:24,height:24}} source={require('../assets/bell.png')}/>
                       </View>
                       <View style={{marginLeft:10}}>
                           <Text style={{color:'#505050',fontSize:14}}>Sizning zakazingiz ko’rib chiqilmoqda</Text>
                           <Text style={{fontSize:12,paddingRight:12,color:'#505050'}}>
                               Sizning zakazingiz ko’rib chiqilmoqda sizning zakazingiz ko’rib chiqilmoqda sizning zakazingiz ko’rib chiqilmoqda
                           </Text>
                       </View>
                   </View>
                   <View style={{flexDirection:"row-reverse",marginTop:7}}>
                       <Text style={{fontSize:10,color:"#8a8a8a"}}>
                           22 aprel
                       </Text>
                   </View>
               </View>
               <View style={styles.card}>
                   <View style={{flexDirection:"row"}}>
                       <View style={styles.bell}>
                           <Image style={{width:24,height:24}} source={require('../assets/bell.png')}/>
                       </View>
                       <View style={{marginLeft:10}}>
                           <Text style={{color:'#505050',fontSize:14}}>Sizning zakazingiz ko’rib chiqilmoqda</Text>
                           <Text style={{fontSize:12,paddingRight:12,color:'#505050'}}>
                               Sizning zakazingiz ko’rib chiqilmoqda sizning zakazingiz ko’rib chiqilmoqda sizning zakazingiz ko’rib chiqilmoqda
                           </Text>
                       </View>
                   </View>
                   <View style={{flexDirection:"row-reverse",marginTop:7}}>
                       <Text style={{fontSize:10,color:"#8a8a8a"}}>
                           22 aprel
                       </Text>
                   </View>
               </View>
               <View style={styles.card}>
                   <View style={{flexDirection:"row"}}>
                       <View style={styles.bell}>
                           <Image style={{width:24,height:24}} source={require('../assets/bell.png')}/>
                       </View>
                       <View style={{marginLeft:10}}>
                           <Text style={{color:'#505050',fontSize:14}}>Sizning zakazingiz ko’rib chiqilmoqda</Text>
                           <Text style={{fontSize:12,paddingRight:12,color:'#505050'}}>
                               Sizning zakazingiz ko’rib chiqilmoqda sizning zakazingiz ko’rib chiqilmoqda sizning zakazingiz ko’rib chiqilmoqda
                           </Text>
                       </View>
                   </View>
                   <View style={{flexDirection:"row-reverse",marginTop:7}}>
                       <Text style={{fontSize:10,color:"#8a8a8a"}}>
                           22 aprel
                       </Text>
                   </View>
               </View>
               <View style={styles.card}>
                   <View style={{flexDirection:"row"}}>
                       <View style={styles.bell}>
                           <Image style={{width:24,height:24}} source={require('../assets/bell.png')}/>
                       </View>
                       <View style={{marginLeft:10}}>
                           <Text style={{color:'#505050',fontSize:14}}>Sizning zakazingiz ko’rib chiqilmoqda</Text>
                           <Text style={{fontSize:12,paddingRight:12,color:'#505050'}}>
                               Sizning zakazingiz ko’rib chiqilmoqda sizning zakazingiz ko’rib chiqilmoqda sizning zakazingiz ko’rib chiqilmoqda
                           </Text>
                       </View>
                   </View>
                   <View style={{flexDirection:"row-reverse",marginTop:7}}>
                       <Text style={{fontSize:10,color:"#8a8a8a"}}>
                           22 aprel
                       </Text>
                   </View>
               </View>
           </View>
       </View>
    );
};

export default Notifications;
const styles=StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:16,
        paddingVertical:20
    },
    bell:{
        width:40,
        height:40,
        borderRadius:40,
        backgroundColor:"#FFCD33",
        justifyContent: "center",
        alignItems: "center"
    },
    card:{
        borderRadius:10,
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:"#8a8a8a",
        paddingTop:10,
        paddingLeft:9,
        paddingRight:20,
        paddingBottom:10,
        marginTop:12
    }
})
