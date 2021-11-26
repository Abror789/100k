import React from 'react'
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {useSelector} from "react-redux";
import {selectUser} from "../redux/slices/user";
import Login from "../screens/Auth/Login/Login";
import MyCabinet from "../screens/MyCabinet";
import Kod from "../screens/Kod";

let Stack = createNativeStackNavigator();

export const CabinetStack = () => {
    let user = useSelector(selectUser)
    console.log({user})
    return <Stack.Navigator screenOptions={{headerShown: false}}>
        {!user.data && <Stack.Screen name="Login" component={Login}/>}
        {!user.data && <Stack.Screen name="Kod" component={Kod}/>}
        {!!user.data && <Stack.Screen name="MyCabinetScreen" component={MyCabinet}/>}
    </Stack.Navigator>
}
