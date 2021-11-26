import axios from 'axios'
import {store} from "../redux/configureStore";

export let url = 'https://dev.100k.uz/api';

axios.interceptors.request.use((e) => {
    if (e.method === 'POST') {
        let form = new FormData();
        for (let el in e.data) {
            form.append(el, e.data[el]);
        }
        e.data = form;
    }
    let token = store.getState().user.data;
    console.log({token})
    if (!!token) {
        e.headers = {...e.headers, "Authorization": `Bearer ${token}`}
    }
    return e
}, (e) => e)

export let requests = {
    auth: {
        requestPassword: (username = "") => axios.post(`${url}/auth/password`, {username}),
        login: (credentials) => axios.post(`${url}/auth/login`, credentials)
    },
    user: {
        getMe: () => axios.get(`${url}/user/getMe`)
    },
    mail:{
        getMail:()=>axios.get(`${url}/user/packages`)
    },
    taksi:{
        getTaksi:()=>axios.get(`${url}/user/caborders?status=new`)
    }
}
