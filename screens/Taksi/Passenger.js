import React from 'react';
import {View, Text, StyleSheet, StatusBar, ScrollView, Image, TouchableOpacity} from "react-native";

const Passenger = ({navigation}) => {
    return (
        <View style={{flex:1,backgroundColor:"#f3f3f5"}}>
            <StatusBar backgroundColor={"#FFCE34"}/>
            <ScrollView>
                <View style={styles.top}>
                    <View>
                        <Image style={{width:24,height:24}} source={require('../../assets/question.png')}/>
                    </View>
                    <View>
                        <Text style={{fontSize:20,color:"#000",fontWeight:'400'}}>
                            Yolovchilar (8)
                        </Text>
                    </View>
                    <View>
                        <Image style={{width:33,height:33}} source={require("../../assets/user.png")}/>
                    </View>
                </View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={{width:15,height:15,marginRight:5}} source={require('../../assets/loaction.png')}/>
                        <Text style={{color:"#8a8a8a",fontSize:13}}>Viloyat,tuman</Text>
                    </TouchableOpacity>
                    <Image style={{width:24,height:18,marginHorizontal:6}} source={require('../../assets/strelka.png')}/>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={{width:15,height:15,marginRight:5}} source={require('../../assets/loaction.png')}/>
                        <Text style={{color:"#8a8a8a",fontSize:13}}>Viloyat,tuman</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"#fff",paddingVertical:11,borderRadius:8,paddingHorizontal: 11 }}>
                        <Image  source={require('../../assets/filter.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:"#fff",paddingVertical:21,paddingHorizontal:16}}>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Image style={{width:10,height:10,marginRight:12}} source={require('../../assets/ellipse.png')}/>
                            <Text style={{fontSize:15,fontWeight:"normal"}}>Toshkent, Sergeli tumani</Text>
                        </View>
                        <View>
                            <Text style={{color:"#8A8A8A",fontSize:12}}>#12345678</Text>
                        </View>
                    </View>
                    <Image style={{height:17,marginLeft:4,marginTop:-5}} source={require('../../assets/line.png')}></Image>
                    <View style={{flexDirection:"row", alignItems:"center",marginTop:-5.3}}>
                        <Image style={{width:10,height:10,marginRight:12}} source={require('../../assets/ellipse.png')}/>
                        <Text style={{fontSize:15,fontWeight:"normal",color:"#000"}}>Toshkent, Yunusobod tumani</Text>
                    </View>
                    <View >
                        <Text style={{fontSize:15,marginTop:12}}>- Siz viloyat filialiga etkazib berishingiz kerak.....</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:"center",marginTop:21}}>
                        <Image source={require('../../assets/clock.png')}/>
                        <Text style={{marginLeft:10,color:"#8a8a8a",fontSize:15}}>Amal qilish muddati:</Text>
                        <Text style={{fontWeight:"bold",fontSize:17}}> 30.02.23</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:"center",marginTop:10}}>
                        <Image source={require('../../assets/security.png')}/>
                        <Text style={{marginLeft:10,color:"#8a8a8a",fontSize:15}}>Sug'urta summasi:</Text>
                        <Text style={{fontWeight:"bold",fontSize:17}}> 500 000 so'm</Text>
                    </View>
                    <View style={{marginTop:22,flexDirection:'row',justifyContent:"space-between",alignItems:"center"}}>
                        <View style={{flexDirection:'row', alignItems:"flex-end"}}>
                            <Image source={require('../../assets/coin.png')}/>
                            <Text style={{fontWeight:'bold',fontSize:15,marginLeft:12}}>300 000</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn1}>
                                <Image style={{width:16.84,height:16.84}} source={require('../../assets/plus.png')}/>
                                <Text style={{marginLeft:4,fontWeight:"normal",fontSize:12}}>QABUL QILISH</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:"#fff",marginTop:2,paddingHorizontal:16,paddingVertical:20}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                        <View style={{flexDirection:"row",alignItems:'center'}}>
                            <View style={{alignItems:"center",justifyContent:"center",width:35,height:35,borderRadius:35,backgroundColor:"#ffeb3a"}}>
                                <Text style={{color:"#fff",fontSize:16.33,fontWeight:"600"}}>
                                    N
                                </Text>
                            </View>
                            <View style={{marginLeft:7}}>
                                <Text style={{color:"#8a8a8a",fontSize:14}}>Name</Text>
                                <Text style={{color:"#8a8a8a",fontSize:14}}>4 daqiqa oldin</Text>
                            </View>
                        </View>
                        <View>
                            <Image style={{width:23,height:27.37}} source={require('../../assets/sec2.png')}/>
                        </View>
                    </View>
                </View>

                <View style={{marginTop:10,backgroundColor:"#fff",paddingVertical:21,paddingHorizontal:16}}>
                    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Image style={{width:10,height:10,marginRight:12}} source={require('../../assets/ellipse.png')}/>
                            <Text style={{fontSize:15,fontWeight:"normal"}}>Toshkent, Sergeli tumani</Text>
                        </View>
                        <View>
                            <Text style={{color:"#8A8A8A",fontSize:12}}>#12345678</Text>
                        </View>
                    </View>
                    <Image style={{height:17,marginLeft:4,marginTop:-5}} source={require('../../assets/line.png')}></Image>
                    <View style={{flexDirection:"row", alignItems:"center",marginTop:-5.3}}>
                        <Image style={{width:10,height:10,marginRight:12}} source={require('../../assets/ellipse.png')}/>
                        <Text style={{fontSize:15,fontWeight:"normal",color:"#000"}}>Toshkent, Yunusobod tumani</Text>
                    </View>
                    <Image style={{height:17,marginLeft:4,marginTop:-5}} source={require('../../assets/line.png')}></Image>
                    <View style={{flexDirection:"row", alignItems:"center",marginTop:-5.5}}>
                        <Image style={{width:10,height:10,marginRight:12}} source={require('../../assets/ellipse.png')}/>
                        <Text style={{fontSize:15,fontWeight:"normal",color:"#000"}}>Toshkent viloyati, Chirchiq tumani</Text>
                    </View>
                    <View >
                        <Text style={{fontSize:15,marginTop:12}}>- Siz viloyat filialiga etkazib berishingiz kerak.....</Text>
                    </View>

                    <View style={{marginTop:22,flexDirection:'row',justifyContent:"space-between",alignItems:"center"}}>
                        <View style={{flexDirection:'row', alignItems:"flex-end"}}>
                            <Image source={require('../../assets/coin.png')}/>
                            <Text style={{fontWeight:'bold',fontSize:15,marginLeft:12}}>300 000</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn1}>
                                <Image style={{width:16.84,height:16.84}} source={require('../../assets/plus.png')}/>
                                <Text style={{marginLeft:4,fontWeight:"normal",fontSize:12}}>QABUL QILISH</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:"#fff",marginTop:2,paddingHorizontal:16,paddingVertical:20,marginBottom:75}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                        <View style={{flexDirection:"row",alignItems:'center'}}>
                            <View style={{alignItems:"center",justifyContent:"center",width:35,height:35,borderRadius:35,backgroundColor:"#ffeb3a"}}>
                                <Text style={{color:"#fff",fontSize:16.33,fontWeight:"600"}}>
                                    N
                                </Text>
                            </View>
                            <View style={{marginLeft:7}}>
                                <Text style={{color:"#8a8a8a",fontSize:14}}>Name</Text>
                                <Text style={{color:"#8a8a8a",fontSize:14}}>4 daqiqa oldin</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Image source={require('../../assets/cloc.png')}/>
                            <Image style={{width:23,height:27.37,marginLeft:10}} source={require('../../assets/sec2.png')}/>
                        </View>
                    </View>
                </View>
                <View style={{marginBottom:200}}></View>
            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.navigate('AddPassenger')}
                 style={{borderColor:"#BF9100",borderWidth:1,position:"absolute",right:16,bottom:87,alignItems:"center",justifyContent:"center",width:65,height:65,borderRadius:65,backgroundColor:"#ffcd30"}}>
                <Image style={{width:26,height:26}} source={require('../../assets/plus2.png')}/>
            </TouchableOpacity>
        </View>
    );
};

export default Passenger;
const styles=StyleSheet.create({
    btn:{
        backgroundColor:"#fff",
        flexDirection:"row",
        alignItems:'center',
        padding:10,
        borderWidth:1,
        borderColor:"#dcdcdc",
        borderRadius:8
    },
    top:{
        flexDirection:'row',
        paddingHorizontal:21,
        paddingVertical:16,
        backgroundColor:"#fff",
        justifyContent:"space-between",
        alignItems:"center"
    },
    header:{
        marginVertical:19,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:16,
        justifyContent:"space-between"
    },
    btn1:{
        borderWidth:1,
        borderColor:"#bf9100",
        borderRadius:8,
        paddingHorizontal:5,
        paddingVertical:11,
        backgroundColor:"#FFCD30",
        flexDirection:'row',
        alignItems:"center"
    }
})
