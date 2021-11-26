import {useDispatch, useSelector} from "react-redux";
import { selectMail, setMail,update } from "../../redux/slices/mail";
import {useEffect} from "react";
import {requests} from "../../api/requests";


export let useMailHook = () => {
    let mail = useSelector(selectMail)
    let dispatch = useDispatch();
    let effect = async () => {
        try {
            let res = await requests.mail.getMail()
            dispatch(setMail({payload: res.data.data}))
            console.log({data: res.data})
        } catch (err) {
            console.log(err.response.data)
        }
    }
    useEffect(() => {
        effect();
    },[])
    
    return {mail};
}
