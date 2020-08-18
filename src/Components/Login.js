import React from 'react'
import "../Css/Login.css"
import logo from "../Images/logo.png"
import { Button } from '@material-ui/core'
import { auth, provider} from '../Firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
//Google Authentication function

const [dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch((error) => {
            alert(error.message)
        });
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={logo} alt="" />
                <h1>Sign in to ChatPlate</h1>
                <p>NAS | ChatPlate</p>
                <Button onClick={signIn}> SignIn with Google</Button>
            </div>
        </div>
    )
}

export default Login
