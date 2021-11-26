import {useState} from "react";
import {requests} from "../../api/requests";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/slices/user";


export let useRequestPasswordHook = () => {
    const [username, changeUsername] = useState("+998");
    const [loading, setLoading] = useState(false);
    let navigation = useNavigation();
    let onSubmit = async () => {
        //TODO validate username
        setLoading(true)
        try {
            let res = await requests.auth.requestPassword(username)
            navigation.navigate("Kod", {
                username: username
            })

        } catch (err) {
            console.log(err.response)
            //TODO Handle error
        } finally {
            setLoading(false)
        }
    }


    return [username, changeUsername, loading, onSubmit,]
}

export let useLoginHook = () => {
    //TODO add redux redux-persist

    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false);
    let navigation = useNavigation();
    let dispatch = useDispatch()

    const onSubmitPassword = async (username) => {
        setLoading(true)
        try {
            let res = await requests.auth.login({username: username, password: password})
            console.log({res})
            dispatch(setUser(res.data))
            navigation.navigate("My")
        } catch (e) {

        }
    }
    return {loading, password, setPassword, onSubmitPassword}
}
