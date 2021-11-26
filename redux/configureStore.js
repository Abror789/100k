import {configureStore} from "@reduxjs/toolkit";
import reducers from "./reducers";
import {persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export let store = configureStore({reducer: persistedReducer})
export let persistor = persistStore(store)
