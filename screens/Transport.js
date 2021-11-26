import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions, ScrollView, Image, TouchableOpacity} from "react-native";
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import { useFonts } from 'expo-font';

const FirstRoute = ({navigation}) => (

    <ScrollView style={{flex: 1, backgroundColor: '#f3f3f5'}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:5}}>
            <Image style={{width:100,height:79}} source={require('../assets/yuk.png')}/>
            <Image style={{width:100,height:79}} source={require('../assets/yuk.png')}/>
            <Image style={{width:100,height:79}} source={require('../assets/yuk.png')}/>
        </View>
        <View style={{backgroundColor:"#fff"}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:16,marginTop:10}}>
                <View>
                    <Text style={{fontWeight:"bold",fontSize:16}}>
                        - 3 xil nasadkali ekskavator
                    </Text>
                    <Text style={{fontWeight:"bold",fontSize:16}}>
                        Ташкент, Сергелийский район
                    </Text>
                </View>
                <View>
                    <Text style={{fontWeight:"300",color:"#8a8a8a",fontSize:10}}>#12345678</Text>
                </View>
            </View>
            <View style={{paddingHorizontal:16,marginTop:12}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image source={require('../assets/clock.png')}/>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                        <Text style={{fontSize:15,fontWeight:"500",color:"#8a8a8a"}}>Заказ активен до:</Text>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>30.02.23</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",marginTop:11}}>
                    <Image source={require('../assets/security.png')}/>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                        <Text style={{fontSize:15,fontWeight:"500",color:"#8a8a8a"}}>Страховая сумма:</Text>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>500 000 сум</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:16}}>
                    <View style={{flexDirection:"row",alignItems:"flex-end",}}>
                        <Image style={{width:25,height:25}} source={require('../assets/coin.png')}/>
                        <View style={{flexDirection:"row",marginLeft:10}}>
                            <Text style={{fontSize:15,color:"#8a8a8a"}}>1soat:</Text>
                            <Text style={{fontSize:15,fontWeight:"bold"}}> 5 000 000</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderRadius:8,borderColor:"#BF9100",borderWidth:1,backgroundColor:"#ffcc33",flexDirection:"row",paddingHorizontal:22,paddingVertical:11,alignItems:"center"}}>
                            <Image style={{width:16.84,height:16.84,marginRight:8,}} source={require('../assets/plus.png')}/>
                            <Text>Qarash</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{height:2,backgroundColor:"#d8d8d8",marginTop:8}}></View>
            <View style={{paddingHorizontal:16,marginTop:12,marginBottom:20}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View style={{width:35,height:35,backgroundColor:"#ffeb3a",borderRadius:35,alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:17,color:"#fff",fontWeight:"bold"}}>B</Text>
                        </View>
                        <View style={{marginLeft:7}}>
                            <Text style={{color:"#8a8a8a",fontSize:14}}>Name</Text>
                            <Text style={{color:"#8a8a8a",fontSize:12}}>4 минуты назад</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require('../assets/sec2.png')}/>
                    </View>
                </View>
            </View>
        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
            <Image style={{width:100,height:79}} source={require('../assets/lacetti.png')}/>
            <Image style={{width:100,height:79}} source={require('../assets/lacetti.png')}/>
            <Image style={{width:100,height:79}} source={require('../assets/lacetti.png')}/>
        </View>
        <View style={{backgroundColor:"#fff"}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:16,marginTop:10}}>
                <View>
                    <Text style={{fontWeight:"bold",fontSize:16}}>
                        - 3 xil nasadkali ekskavator
                    </Text>
                    <Text style={{fontWeight:"bold",fontSize:16}}>
                        Ташкент, Сергелийский район
                    </Text>
                </View>
                <View>
                    <Text style={{fontWeight:"300",color:"#8a8a8a",fontSize:10}}>#12345678</Text>
                </View>
            </View>
            <View style={{paddingHorizontal:16,marginTop:12}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image source={require('../assets/clock.png')}/>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                        <Text style={{fontSize:15,fontWeight:"500",color:"#8a8a8a"}}>Заказ активен до:</Text>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>30.02.23</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",marginTop:11}}>
                    <Image source={require('../assets/security.png')}/>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                        <Text style={{fontSize:15,fontWeight:"500",color:"#8a8a8a"}}>Страховая сумма:</Text>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>500 000 сум</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:16}}>
                    <View style={{flexDirection:"row",alignItems:"flex-end",}}>
                        <Image style={{width:25,height:25}} source={require('../assets/coin.png')}/>
                        <View style={{flexDirection:"row",marginLeft:10}}>
                            <Text style={{fontSize:15,color:"#8a8a8a"}}>1soat:</Text>
                            <Text style={{fontSize:15,fontWeight:"bold"}}> 5 000 000</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderRadius:8,borderColor:"#BF9100",borderWidth:1,backgroundColor:"#ffcc33",flexDirection:"row",paddingHorizontal:22,paddingVertical:11,alignItems:"center"}}>
                            <Image style={{width:16.84,height:16.84,marginRight:8,}} source={require('../assets/plus.png')}/>
                            <Text>Qarash</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{height:2,backgroundColor:"#d8d8d8",marginTop:8}}></View>
            <View style={{paddingHorizontal:16,marginTop:12,marginBottom:20}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View style={{width:35,height:35,backgroundColor:"#ffeb3a",borderRadius:35,alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:17,color:"#fff",fontWeight:"bold"}}>B</Text>
                        </View>
                        <View style={{marginLeft:7}}>
                            <Text style={{color:"#8a8a8a",fontSize:14}}>Name</Text>
                            <Text style={{color:"#8a8a8a",fontSize:12}}>4 минуты назад</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require('../assets/sec2.png')}/>
                    </View>
                </View>
            </View>
        </View>
        <View style={{marginTop:242}}></View>
    </ScrollView>
);
const SecondRoute = () => (
    <ScrollView style={{flex: 1, backgroundColor: '#f3f3f5'}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:5}}>
            <Image style={{width:100,height:79}} source={require('../assets/yuk.png')}/>
            <Image style={{width:100,height:79}} source={require('../assets/yuk.png')}/>
            <Image style={{width:100,height:79}} source={require('../assets/yuk.png')}/>
        </View>
        <View style={{backgroundColor:"#fff"}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:16,marginTop:10}}>
                <View>
                    <Text style={{fontWeight:"bold",fontSize:16}}>
                        - 3 xil nasadkali ekskavator
                    </Text>
                    <Text style={{fontWeight:"bold",fontSize:16,}}>
                        Ташкент, Сергелийский район
                    </Text>
                </View>
                <View>
                    <Text style={{fontWeight:"300",color:"#8a8a8a",fontSize:10,}}>#12345678</Text>
                </View>
            </View>
            <View style={{paddingHorizontal:16,marginTop:12}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image source={require('../assets/clock.png')}/>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                        <Text style={{fontSize:15,fontWeight:"500",color:"#8a8a8a"}}>Заказ активен до:</Text>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>30.02.23</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",marginTop:11}}>
                    <Image source={require('../assets/security.png')}/>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                        <Text style={{fontSize:15,fontWeight:"500",color:"#8a8a8a"}}>Страховая сумма:</Text>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>500 000 сум</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:16}}>
                    <View style={{flexDirection:"row",alignItems:"flex-end",}}>
                        <Image style={{width:25,height:25}} source={require('../assets/coin.png')}/>
                        <View style={{flexDirection:"row",marginLeft:10}}>
                            <Text style={{fontSize:15,color:"#8a8a8a"}}>1soat:</Text>
                            <Text style={{fontSize:15,fontWeight:"bold"}}> 5 000 000</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderRadius:8,borderColor:"#BF9100",borderWidth:1,backgroundColor:"#ffcc33",flexDirection:"row",paddingHorizontal:22,paddingVertical:11,alignItems:"center"}}>
                            <Image style={{width:16.84,height:16.84,marginRight:8,}} source={require('../assets/plus.png')}/>
                            <Text>Qarash</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{height:2,backgroundColor:"#d8d8d8",marginTop:8}}></View>
            <View style={{paddingHorizontal:16,marginTop:12,marginBottom:20}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View style={{width:35,height:35,backgroundColor:"#ffeb3a",borderRadius:35,alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:17,color:"#fff",fontWeight:"bold"}}>B</Text>
                        </View>
                        <View style={{marginLeft:7}}>
                            <Text style={{color:"#8a8a8a",fontSize:14}}>Name</Text>
                            <Text style={{color:"#8a8a8a",fontSize:12}}>4 минуты назад</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require('../assets/sec2.png')}/>
                    </View>
                </View>
            </View>
        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
            <Image style={{width:100,height:79}} source={require('../assets/lacetti.png')}/>
            <Image style={{width:100,height:79}} source={require('../assets/lacetti.png')}/>
            <Image style={{width:100,height:79}} source={require('../assets/lacetti.png')}/>
        </View>
        <View style={{backgroundColor:"#fff"}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:16,marginTop:10}}>
                <View>
                    <Text style={{fontWeight:"bold",fontSize:16}}>
                        - 3 xil nasadkali ekskavator
                    </Text>
                    <Text style={{fontWeight:"bold",fontSize:16}}>
                        Ташкент, Сергелийский район
                    </Text>
                </View>
                <View>
                    <Text style={{fontWeight:"300",color:"#8a8a8a",fontSize:10}}>#12345678</Text>
                </View>
            </View>
            <View style={{paddingHorizontal:16,marginTop:12}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image source={require('../assets/clock.png')}/>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                        <Text style={{fontSize:15,fontWeight:"500",color:"#8a8a8a"}}>Заказ активен до:</Text>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>30.02.23</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",marginTop:11}}>
                    <Image source={require('../assets/security.png')}/>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                        <Text style={{fontSize:15,fontWeight:"500",color:"#8a8a8a"}}>Страховая сумма:</Text>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>500 000 сум</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:16}}>
                    <View style={{flexDirection:"row",alignItems:"flex-end",}}>
                        <Image style={{width:25,height:25}} source={require('../assets/coin.png')}/>
                        <View style={{flexDirection:"row",marginLeft:10}}>
                            <Text style={{fontSize:15,color:"#8a8a8a"}}>1soat:</Text>
                            <Text style={{fontSize:15,fontWeight:"bold"}}> 5 000 000</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderRadius:8,borderColor:"#BF9100",borderWidth:1,backgroundColor:"#ffcc33",flexDirection:"row",paddingHorizontal:22,paddingVertical:11,alignItems:"center"}}>
                            <Image style={{width:16.84,height:16.84,marginRight:8,}} source={require('../assets/plus.png')}/>
                            <Text>Qarash</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{height:2,backgroundColor:"#d8d8d8",marginTop:8}}></View>
            <View style={{paddingHorizontal:16,marginTop:12,marginBottom:20}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View style={{width:35,height:35,backgroundColor:"#ffeb3a",borderRadius:35,alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:17,color:"#fff",fontWeight:"bold"}}>B</Text>
                        </View>
                        <View style={{marginLeft:7}}>
                            <Text style={{color:"#8a8a8a",fontSize:14}}>Name</Text>
                            <Text style={{color:"#8a8a8a",fontSize:12}}>4 минуты назад</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require('../assets/sec2.png')}/>
                    </View>
                </View>
            </View>
        </View>
        <View style={{marginTop:242}}></View>
    </ScrollView>
);
const ThirdRoute = () => (
    <ScrollView style={{flex: 1, backgroundColor: '#f3f3f5'}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:5}}>
            <Image style={{width:100,height:79}} source={require('../assets/yuk.png')}/>
            <Image style={{width:100,height:79}} source={require('../assets/yuk.png')}/>
            <Image style={{width:100,height:79}} source={require('../assets/yuk.png')}/>
        </View>
        <View style={{backgroundColor:"#fff"}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:16,marginTop:10}}>
                <View>
                    <Text style={{fontWeight:"bold",fontSize:16}}>
                        - 3 xil nasadkali ekskavator
                    </Text>
                    <Text style={{fontWeight:"bold",fontSize:16}}>
                        Ташкент, Сергелийский район
                    </Text>
                </View>
                <View>
                    <Text style={{fontWeight:"300",color:"#8a8a8a",fontSize:10}}>#12345678</Text>
                </View>
            </View>
            <View style={{paddingHorizontal:16,marginTop:12}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image source={require('../assets/clock.png')}/>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                        <Text style={{fontSize:15,fontWeight:"500",color:"#8a8a8a"}}>Заказ активен до:</Text>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>30.02.23</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",marginTop:11}}>
                    <Image source={require('../assets/security.png')}/>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                        <Text style={{fontSize:15,fontWeight:"500",color:"#8a8a8a"}}>Страховая сумма:</Text>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>500 000 сум</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:16}}>
                    <View style={{flexDirection:"row",alignItems:"flex-end",}}>
                        <Image style={{width:25,height:25}} source={require('../assets/coin.png')}/>
                        <View style={{flexDirection:"row",marginLeft:10}}>
                            <Text style={{fontSize:15,color:"#8a8a8a"}}>1soat:</Text>
                            <Text style={{fontSize:15,fontWeight:"bold"}}> 5 000 000</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderRadius:8,borderColor:"#BF9100",borderWidth:1,backgroundColor:"#ffcc33",flexDirection:"row",paddingHorizontal:22,paddingVertical:11,alignItems:"center"}}>
                            <Image style={{width:16.84,height:16.84,marginRight:8,}} source={require('../assets/plus.png')}/>
                            <Text>Qarash</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{height:2,backgroundColor:"#d8d8d8",marginTop:8}}></View>
            <View style={{paddingHorizontal:16,marginTop:12,marginBottom:20}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View style={{width:35,height:35,backgroundColor:"#ffeb3a",borderRadius:35,alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:17,color:"#fff",fontWeight:"bold"}}>B</Text>
                        </View>
                        <View style={{marginLeft:7}}>
                            <Text style={{color:"#8a8a8a",fontSize:14}}>Name</Text>
                            <Text style={{color:"#8a8a8a",fontSize:12}}>4 минуты назад</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require('../assets/sec2.png')}/>
                    </View>
                </View>
            </View>
        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
            <Image style={{width:100,height:79}} source={require('../assets/lacetti.png')}/>
            <Image style={{width:100,height:79}} source={require('../assets/lacetti.png')}/>
            <Image style={{width:100,height:79}} source={require('../assets/lacetti.png')}/>
        </View>
        <View style={{backgroundColor:"#fff"}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:16,marginTop:10}}>
                <View>
                    <Text style={{fontWeight:"bold",fontSize:16}}>
                        - 3 xil nasadkali ekskavator
                    </Text>
                    <Text style={{fontWeight:"bold",fontSize:16}}>
                        Ташкент, Сергелийский район
                    </Text>
                </View>
                <View>
                    <Text style={{fontWeight:"300",color:"#8a8a8a",fontSize:10}}>#12345678</Text>
                </View>
            </View>
            <View style={{paddingHorizontal:16,marginTop:12}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image source={require('../assets/clock.png')}/>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                        <Text style={{fontSize:15,fontWeight:"500",color:"#8a8a8a"}}>Заказ активен до:</Text>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>30.02.23</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",marginTop:11}}>
                    <Image source={require('../assets/security.png')}/>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                        <Text style={{fontSize:15,fontWeight:"500",color:"#8a8a8a"}}>Страховая сумма:</Text>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>500 000 сум</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:16}}>
                    <View style={{flexDirection:"row",alignItems:"flex-end",}}>
                        <Image style={{width:25,height:25}} source={require('../assets/coin.png')}/>
                        <View style={{flexDirection:"row",marginLeft:10}}>
                            <Text style={{fontSize:15,color:"#8a8a8a"}}>1soat:</Text>
                            <Text style={{fontSize:15,fontWeight:"bold"}}> 5 000 000</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{borderRadius:8,borderColor:"#BF9100",borderWidth:1,backgroundColor:"#ffcc33",flexDirection:"row",paddingHorizontal:22,paddingVertical:11,alignItems:"center"}}>
                            <Image style={{width:16.84,height:16.84,marginRight:8,}} source={require('../assets/plus.png')}/>
                            <Text>Qarash</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{height:2,backgroundColor:"#d8d8d8",marginTop:8}}></View>
            <View style={{paddingHorizontal:16,marginTop:12,marginBottom:20}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View style={{width:35,height:35,backgroundColor:"#ffeb3a",borderRadius:35,alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:17,color:"#fff",fontWeight:"bold"}}>B</Text>
                        </View>
                        <View style={{marginLeft:7}}>
                            <Text style={{color:"#8a8a8a",fontSize:14}}>Name</Text>
                            <Text style={{color:"#8a8a8a",fontSize:12}}>4 минуты назад</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require('../assets/sec2.png')}/>
                    </View>
                </View>
            </View>
        </View>
        <View style={{marginTop:242}}></View>
    </ScrollView>
);


const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    three: ThirdRoute,
});


const Transport = ({navigation}) => {
    // useFonts({
    //     Montserrat: require('../assets/fonts/Montserrat-Medium.ttf'),
    //     MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
    //     MontserratLight: require('../assets/fonts/Montserrat-Light.ttf'),
    // });
    const a = 'avtomobillar';
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: a.toLowerCase()},
        {key: 'second', title: 'Yuk mashinalar'},
        {key: 'three', title: "Texnikalar"}
    ]);
    return (
        <View horizontal={false} style={{flexDirection:"column",flex:1}}>
            <View style={styles.top}>
                <View>
                    <Image style={{width:24,height:24}} source={require('../assets/question.png')}/>
                </View>
                <View>
                    <Text style={{fontSize:20,color:"#000",fontWeight:'400'}}>
                        Transportlar (3)
                    </Text>
                </View>
                <View>
                    <Image style={{width:33,height:33}} source={require("../assets/user.png")}/>
                </View>
            </View>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btn}>
                    <Image style={{width:15,height:15,marginRight:5}} source={require('../assets/loaction.png')}/>
                    <Text style={{color:"#8a8a8a",fontSize:13}}>Viloyat,tuman</Text>
                </TouchableOpacity>
                <Image style={{width:24,height:18,marginHorizontal:6}} source={require('../assets/strelka.png')}/>
                <TouchableOpacity style={styles.btn}>
                    <Image style={{width:15,height:15,marginRight:5}} source={require('../assets/loaction.png')}/>
                    <Text style={{color:"#8a8a8a",fontSize:13}}>Viloyat,tuman</Text>
                </TouchableOpacity>
            </View>
            <TabView
                    style={{backgroundColor: "#f3f3f5",flex:1}}
                    sceneContainerStyle={{flex:1}}
                    navigationState={{index, routes}}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{width: layout.width}}
                    renderTabBar={(p) =>
                        <TabBar {...p}
                                style={{
                                    backgroundColor: "#f3f3f5",
                                }}
                                indicatorStyle={{
                                    width: 40,
                                    left: 40
                                }}
                                labelStyle={{
                                    textTransform: "capitalize",
                                    color: "black",
                                    padding: 0,
                                    margin: 0
                                }}

                        />

                    }
                />
            <TouchableOpacity
                onPress={() => navigation.navigate('AdTransport')}
                style={{width:65,height:65,borderRadius:65,alignItems:"center",justifyContent:"center",borderColor:"#BF9100",borderWidth:1,backgroundColor:"#ffcc33",bottom:87,position:"absolute",right:16}}>
                <Image style={{width:26,height:26}} source={require('../assets/plus2.png')}/>
            </TouchableOpacity>
        </View>

    );
};

export default Transport;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red"
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
        marginTop:22,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:16,
        justifyContent:"space-between"
    },
    btn:{
        backgroundColor:"#fff",
        flexDirection:"row",
        alignItems:'center',
        padding:10,
        borderWidth:1,
        borderColor:"#dcdcdc",
        borderRadius:8
    }
})
