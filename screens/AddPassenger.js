import React, {useState} from 'react';
import {View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView} from "react-native";

const AddPassenger = ({navigation}) => {
    const [name,setName]=useState(null)
    const [nameOne,setNameOne]=useState(null)
    const [one,setOne]=useState('#fff')
    const [second,setSecond]=useState('#fff')
    const [three,setThree]=useState('#fff')
    const [four,setFour]=useState('#fff')
    const [all,setAll]=useState('#fff')
    const handleOne=()=>{
        if (one==="#fff"){
            setOne("#FFCD30")
            setSecond("#fff")
            setThree("#fff")
            setFour("#fff")
            setAll("#fff")
            setBusy('none')
        }else if (one==="#FFCD30"){
            setOne("#fff")
        }
    }
    const handleTwo=()=>{
        if (second==="#fff"){
            setSecond("#FFCD30")
            setThree("#fff")
            setFour("#fff")
            setOne("#fff")
            setAll("#fff")
            setBusy('none')
        }else if (second==="#FFCD30"){
            setSecond("#fff")
        }
    }
    const handleThree=()=>{
        if (three==="#fff"){
            setThree("#FFCD30")
            setSecond("#fff")
            setFour("#fff")
            setOne("#fff")
            setAll("#fff")
            setBusy('none')
        }else if (three==="#FFCD30"){
            setThree("#fff")
        }
    }
    const handleFour=()=>{
        if (four==="#fff"){
            setFour("#FFCD30")
            setSecond("#fff")
            setThree("#fff")
            setOne("#fff")
            setAll("#fff")
            setBusy('none')
        }else if (four==="#FFCD30"){
            setFour("#fff")
        }
    }
    const handleAll=()=>{
        if (all==="#fff"){
            setAll("#FFCD30")
            setSecond("#fff")
            setThree("#fff")
            setOne("#fff")
            setFour("#fff")
            setBusy('flex')
        }else if (all==="#FFCD30"){
            setAll("#fff")
            setBusy('none')
        }
    }
    const [info,setInfo]=useState(null)
    const [none,setNone]=useState('none')
    const [noneOne,setNoneOne]=useState('none')
    const [nonee,setNonee]=useState('flex')
    const [noneeOne,setNoneeOne]=useState('flex')
    const [time,setTime]=useState(null)
    const [other,setOther]=useState(null)
    const [car,setCar]=useState('none')
    const [cars,setCars]=useState('flex')
    const [busy,setBusy]=useState('none')
    const [send,setSend]=useState(null)
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <Image source={require('../assets/left-arrow.png')}/>
                </TouchableOpacity>
                <Text style={{fontSize: 20}}>
                    Taksiga sorov kiritish
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
                    value={name}
                    onChangeText={setName}
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
                    value={nameOne}
                    onChangeText={setNameOne}
                    keyboardType="default"
                    placeholder="Kocha nomi, uy raqami, mo’jal"
                />
            </View>
            <View style={{paddingHorizontal:16,paddingVertical:20}}>
                <Text style={{fontSize:16,fontWeight:"500",marginBottom:15}}>Nechta o’rindiq kerak?</Text>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity
                        onPress={()=>{
                            handleOne()
                        }}
                        style={[styles.btn,{backgroundColor:one}]}>
                        <Text>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            handleTwo()
                        }}
                        style={[styles.btn,{backgroundColor:second}]}>
                        <Text>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                           handleThree()
                        }}
                        style={[styles.btn,{backgroundColor:three}]}>
                        <Text>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            handleFour()
                        }}
                        style={[styles.btn,{backgroundColor:four}]}>
                        <Text>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            handleAll()
                        }}
                        style={[styles.btn,{backgroundColor:all,marginRight:0}]}>
                        <Text>Hammasi</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{paddingVertical:19,backgroundColor:"#fff",paddingHorizontal:16}}>
                <Text style={{fontSize:16,fontWeight:"500",marginBottom:17}}>Qo’shimcha ma’lumot?</Text>
                <TextInput
                    style={styles.input}
                    value={info}
                    onChangeText={setInfo}
                    keyboardType="default"
                    placeholder="Qo'shimcha ma'lumot kiriting"
                />
                <View style={{flexDirection:"row",marginTop:14}}>
                    <Text
                        onPress={()=>{
                            setInfo("Oldi o’rindiq")
                        }}
                        style={styles.text}>Oldi o’rindiq</Text>
                    <Text
                        onPress={()=>{
                            setInfo("Benzin")
                        }}
                        style={styles.text}>Benzin</Text>
                    <Text
                        onPress={()=>{
                            setInfo("Muzlatgich")
                        }}
                        style={styles.text}>Muzlatgich</Text>
                </View>
            </View>
            <View style={{backgroundColor:"#fff",paddingHorizontal:16}}>
               <View style={{flexDirection:"row",alignItems:"center"}}>
                   <TouchableOpacity
                        style={{display:nonee}}
                        onPress={()=>{
                            setNonee('none')
                            setNone('flex')
                        }}
                   >
                       <Image source={require('../assets/restangle.png')}/>
                   </TouchableOpacity>
                  <TouchableOpacity
                      onPress={()=>{
                          setNone('none')
                          setNonee('flex')
                      }}
                      style={{display:none}}
                  >
                      <Image source={require('../assets/blackrestangle.png')}/>
                  </TouchableOpacity>
                   <Text
                       style={{fontSize:14,fontWeight:"600",marginLeft:12}}>
                       Rejalashtirilgan so’rov
                   </Text>
               </View>
                <View style={{marginBottom:18,display:none}}>
                    <TextInput
                        style={styles.input}
                        value={time}
                        onChangeText={setTime}
                        keyboardType="numeric"
                        placeholder="Vaqtni kiriting"
                    />
                </View>
            </View>
            <View style={{paddingBottom:20,backgroundColor:"#fff",paddingHorizontal:16}}>
               <View style={{flexDirection:"row",alignItems:"center",marginTop:18}}>
                   <TouchableOpacity
                        style={{display:noneeOne}}
                        onPress={()=>{
                            setNoneeOne('none')
                            setNoneOne('flex')
                        }}
                   >
                       <Image source={require('../assets/restangle.png')}/>
                   </TouchableOpacity>
                  <TouchableOpacity
                      onPress={()=>{
                          setNoneOne('none')
                          setNoneeOne('flex')
                      }}
                      style={{display:noneOne}}
                  >
                      <Image source={require('../assets/blackrestangle.png')}/>
                  </TouchableOpacity>
                   <Text
                       style={{fontSize:14,fontWeight:"600",marginLeft:12}}>
                       Boshqa odam uchun
                   </Text>
               </View>
                <View style={{marginBottom:18,display:noneOne}}>
                    <TextInput
                        style={styles.input}
                        value={other}
                        onChangeText={setOther}
                        keyboardType="numeric"
                        placeholder="Yolovchi telefon raqami"
                    />
                </View>
            </View>
            <View style={{display:busy,paddingBottom:20,flexDirection:"row",alignItems:"center",backgroundColor:"#fff",paddingHorizontal:16}}>
                <TouchableOpacity
                    onPress={()=>{
                        setCar('flex')
                        setCars('none')
                    }}
                    style={{display:cars}}
                >
                    <Image source={require('../assets/restangle.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        setCars('flex')
                        setCar('none')
                    }}
                    style={{display:car}}
                >
                    <Image source={require('../assets/blackrestangle.png')}/>
                </TouchableOpacity>
                <Text style={{marginLeft:13,fontSize:14,fontWeight:"500"}}>
                    Oldi o'rindiqni bronlash
                </Text>
            </View>
            <View style={{marginTop:20,marginBottom:29,paddingVertical:19,paddingHorizontal:16,backgroundColor:"#fff"}}>
                <Text>Bitta orin uchun summa taklif qiling</Text>
                <TextInput
                    value={send}
                    onChangeText={setSend}
                    keyboardType="numeric"
                    style={styles.input}
                />
                <View style={{flexDirection:"row",marginTop:14}}>
                    <Text
                        onPress={()=>{
                            setSend("20 000")
                        }}
                        style={styles.text}>20 000</Text>
                    <Text
                        onPress={()=>{
                            setSend("30 000")
                        }}
                        style={styles.text}>30 000</Text>
                    <Text
                        onPress={()=>{
                            setSend("40 000")
                        }}
                        style={styles.text}>40 000</Text>
                    <Text
                        onPress={()=>{
                            setSend("50 000")
                        }}
                        style={styles.text}>50 000</Text>
                </View>
                <TouchableOpacity style={[styles.btnOne,{marginBottom:35,flexDirection:"column",marginTop:23,backgroundColor:"#FFC847"}]}>
                    <Text style={{fontSize:18,fontWeight:"500",textAlign:"center"}}>Yuborish</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

export default AddPassenger;
const styles=StyleSheet.create({
    container: {
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
        paddingHorizontal:16,
        paddingVertical:12,
        borderColor:"#BF9100",
        borderRadius:10,
        borderWidth:1,
        marginRight:18
    },
    text: {
        fontSize: 14,
        fontWeight: "500",
        marginRight: 20,
        color: "#8a8a8a"
    }
})
