import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet, ScrollView, TextInput, Alert} from "react-native";

const AddTransport = ({navigation}) => {
    const [info,setInfo]=useState(null)
    const [price,setPrice]=useState(null)
    const [color,setColor]=useState("#556080")
    const [colorOne,setColorOne]=useState("#BFBFBF")
    const [colorTwo,setColorTwo]=useState("#BFBFBF")
    const [none,setNone]=useState(0)
    const [nonee,setNonee]=useState('none')
    const Handle = () => {
        setColor('#556080')
        setColorOne('#bfbfbf')
        setColorTwo('#bfbfbf')
        setNonee('none')
    }
    const HandleOne = () => {
        setColorOne('#556080')
        setColor('#bfbfbf')
        setColorTwo('#bfbfbf')
        setNonee('flex')
    }
    const HandleTwo = () => {
        setColorTwo('#556080')
        setColorOne('#bfbfbf')
        setColor('#bfbfbf')
        setNonee('none')
    }
    const [named,setNamed]=useState('Kelishilgan')
    const [img,setImg]=useState('none')
    const [imgs,setImgs]=useState('flex')
    const [name,setName]=useState(null)
    const [surname,setSurname]=useState(null)
    const [phone,setPhone]=useState(null)
    return (
        <ScrollView onTouchStart={()=>{
            setNone(0)
        }}  >

            <View  style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <Image source={require('../assets/left-arrow.png')}/>
                </TouchableOpacity>
                <Text style={{fontSize: 20}}>
                    Transport qo’shish
                </Text>
                <View></View>
            </View>
            <View style={{marginTop:22,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity
                    onPress={()=>{
                        Handle()
                    }}
                    style={{flexDirection:"column",alignItems:"center"}}
                >
                    <Image style={{tintColor:color}}  source={require('../assets/carOne.png')}/>
                    <Text style={{color:color}}>Yengil avtomobil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        HandleOne()
                    }}
                    style={{flexDirection:"column",alignItems:"center",marginLeft:30,marginRight:30}}
                >
                    <Image style={{tintColor:colorOne,width:42,height:42}}  source={require('../assets/delivery.png')}/>
                    <Text style={{color:colorOne}}>Yuk avtomobil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        HandleTwo()
                    }}
                    style={{flexDirection:"column",alignItems:"center"}}S
                >
                    <Image style={{tintColor:colorTwo}}  source={require('../assets/frontal-truck.png')}/>
                    <Text style={{color:colorTwo,marginTop:10}}>Transport</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{marginTop:22,paddingHorizontal:16,display:nonee}} horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.btn}>
                    <Text>1-3-tonna</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text>3-8-tonna</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.btn}>
                    <Text>8-15-tonna</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn,{marginRight:30}]}>
                    <Text>15-25-tonna</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={{paddingHorizontal:16,marginTop:20}}>
                <Text style={{fontSize:14,color:"#8a8a8a"}}>Texnika to'g'risida ma'lumot *</Text>
                <TextInput
                    style={[styles.input,{backgroundColor:"#fff"}]}
                    value={info}
                    onChangeText={setInfo}
                    placeholder="Informatsiya"
                    placeholderTextColor="#8a8a8a"
                    multiline
                    numberOfLines={2}
                />
            </View>
            <View style={{
                paddingBottom: 19,
                paddingHorizontal: 16,
                paddingTop: 15
            }}>
                <Text style={{fontSize: 16, marginBottom: 17,color:"#8a8a8a"}}>Hozirgi manzilingiz *</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Region')}
                    style={styles.btnOne}>
                    <Image source={require('../assets/loaction.png')}/>
                    <Text style={{marginLeft: 10, color: "#8a8a8a", fontSize: 14}}>Viloyat,tuman</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                paddingBottom: 19,
                paddingHorizontal: 16,
                paddingTop: 10
            }}>
                <Text style={{color:"#8a8a8a",fontSize: 16, marginBottom: 17}}>Boradigan manzilingiz(kiritish majburiy emas)</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Region')}
                    style={styles.btnOne}>
                    <Image source={require('../assets/loaction.png')}/>
                    <Text style={{marginLeft: 10, color: "#8a8a8a", fontSize: 14}}>Viloyat,tuman</Text>
                </TouchableOpacity>
            </View>
            <View  style={{paddingHorizontal:16,paddingBottom:40,position:"relative",paddingTop:20}}>
                <View
                    style={{
                        opacity:none,
                        flexDirection:"column",
                        backgroundColor:"#fff",
                        position:"absolute",
                        zIndex:2,
                        right:55,
                        top:50,
                        padding:10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,
                        elevation: 24,

                    }}>
                    <Text onPress={()=>{
                        setNamed('Kelishilgan')
                        setNone(0)

                    }} style={{marginBottom:7}}>Kelishilgan</Text>
                    <Text
                        onPress={()=>{
                            setNamed('Kun bay')
                            setNone(0)

                        }}
                        style={{marginBottom:7}}>Kun bay</Text>
                    <Text
                        onPress={()=>{
                            setNamed('Km bay')
                            setNone(0)

                        }}
                        style={{marginBottom:7}}>Km bay</Text>
                    <Text onPress={()=>{
                        setNamed('Soat bay')
                        setNone(0)
                    }}>Soat bay</Text>
                </View>
                <Text style={{fontSize:16,color:"#8a8a8a"}}>Narxingiz (qatnash uchun)*</Text>
                <View style={[styles.inputView]}>
                    <TextInput
                        style={{fontSize:16}}
                        value={price}
                        onChangeText={setPrice}
                        placeholder="Narxni kiriting..."
                        keyboardType="numeric"
                    />
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text>{named}</Text>
                        <TouchableOpacity
                            onPress={()=>{
                                if (none===0) {
                                    setNone(1)
                                }
                            }}
                            style={{marginLeft:30,padding:10}}
                        >
                            <Image source={require('../assets/arrow.png')}/>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            <View style={{paddingHorizontal:16}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity
                        onPress={()=>[
                            setImg('flex'),
                            setImgs('none')
                        ]}
                        style={{display:imgs}}
                    >
                        <Image source={require('../assets/restangle.png')}/>
                    </TouchableOpacity>
                   <TouchableOpacity
                        onPress={()=>{
                            setImg('none')
                            setImgs('flex')
                        }}
                        style={{display:img}}
                   >
                       <Image source={require('../assets/blackrestangle.png')}/>
                   </TouchableOpacity>
                    <Text style={{fontSize:14,color:"#8a8a8a",marginLeft:16}}>Boshqa odam uchun</Text>
                </View>
            </View>
            <View style={{display:img,paddingHorizontal:16,marginTop:21}}>
                <Text style={styles.text}>Ismingizni kiriting *</Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    style={[styles.input,{backgroundColor:"#fff",marginBottom:21}]}
                />
                <Text style={styles.text}>Familiyangizni kiriting * </Text>
                <TextInput
                    value={surname}
                    onChangeText={setSurname}
                    style={[styles.input,{backgroundColor:"#fff",marginBottom:21}]}
                />
                <Text style={styles.text}>Telefon raqamini kiriting * </Text>
                <TextInput
                    value={phone}
                    onChangeText={setPhone}
                    style={[styles.input,{backgroundColor:"#fff",marginBottom:21}]}
                    keyboardType="numeric"
                />
            </View>
            <View style={{paddingHorizontal:16,marginVertical:40}}>
                <TouchableOpacity style={[styles.btnOne,{flexDirection:"column",backgroundColor:"#FFC847"}]}>
                    <Text style={{textAlign:"center",fontSize:16,fontWeight:"bold"}}>Yuborish</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default AddTransport;
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
