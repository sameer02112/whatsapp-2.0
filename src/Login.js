import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'
import { auth ,provider} from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {

    const [{},dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(result=>{
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log('dispatch done')
        }).catch(error=> alert(error.message))
    }
    
    return (
        <div className='login'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"></img>
            <h1>Login to whatsapp rooms</h1>
            <button onClick={signIn}>Login with Google</button>
        </div>
    )
}

export default Login
