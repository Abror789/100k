import {useDispatch, useSelector} from "react-redux";
import {logoutUser, selectUser, setUser} from "../../redux/slices/user";
import {useEffect} from "react";
import {requests} from "../../api/requests";


export let useProfileHook = () => {
    let user = useSelector(selectUser)
    let dispatch = useDispatch();
    let effect = async () => {
        try {
            let res = await requests.user.getMe()
            dispatch(setUser({payload: res.data.data}))
            console.log({data: res.data})
        } catch (err) {
            console.log(err.response.data)
        }
    }
    useEffect(() => {
        effect();
    },[])
    let onLogout = () => {
        dispatch(logoutUser())
    }
    return {onLogout, user};
}
