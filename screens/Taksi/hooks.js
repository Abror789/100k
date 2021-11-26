import {useDispatch, useSelector} from "react-redux";
import { setTaksi,selectTaksi,update } from "../../redux/slices/taksi";
import {useEffect} from "react";
import {requests} from "../../api/requests";


export let useTaksiHook = () => {
    let taksi = useSelector(selectTaksi)
    let dispatch = useDispatch();
    let effect = async () => {
        try {
            let res = await requests.taksi.getTaksi
            dispatch(setTaksi({payload: res.data.data}))
            console.log({data: res.data})
        } catch (err) {
            console.log(err.response.data)
        }
    }
    useEffect(() => {
        effect();
    },[])
    
    return {taksi};
}
