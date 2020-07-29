import React,{useState} from 'react'
import CostumForm from '../CostumForm/CostumForm'
import FormInput from '../form-input/FormInput'
import './Signin.scss'
import Btn from '../btn/Btn'
import { siginwithGoogle, auth, createUserProfile } from '../../firebase/FireBaseUtil'

function SignIn() {
    const [displayName, setdisplayName] = useState('')
    const [mail, setmail] = useState('')
    const [password, setpassword] = useState('')
    const [inmail, setinmail] = useState('')
    const [inpassword, setinpassword] = useState('')
    const [confirm, setconfirm] = useState('')

    const signupSubmit=async ()=>{
        if (password!==confirm) {
            alert("password don't match")
            return
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(mail,password)
            createUserProfile(user, {displayName})
            setdisplayName('')
            setmail('')
            setpassword('')
            setconfirm('')
        } catch (error) {
            console.log(error.message)
        }
        
    }
    const signinSubmit=async()=>{

        try {
            await auth.signInWithEmailAndPassword(inmail,inpassword)
            setinmail('')
            setinpassword('')
        } catch (error) {
            console.log(error.message)
        }
       

    }

    return (
        <div className='signin'>
            <CostumForm submitFunction={signinSubmit}>
                <h3 className='h3'>Sign In</h3>
            <FormInput name='mail' type='email' svalue={inmail} changevalue={setinmail} required>Email</FormInput>
                <FormInput name='password' type='password' svalue={inpassword} changevalue={setinpassword} required>Password</FormInput>
                <div className='wrap-flex'><Btn type='submit'>Sign In</Btn>
                <Btn type='button'click={siginwithGoogle}>Google Sign In</Btn></div>
            </CostumForm>
            <CostumForm submitFunction={signupSubmit}>
                <h3 className='h3'>Sign Up</h3>
                <FormInput name='text' type='text' svalue={displayName} changevalue={setdisplayName} required>Name</FormInput>
                <FormInput name='mail' type='email' svalue={mail} changevalue={setmail} required>Email</FormInput>
                <FormInput name='password' type='password' svalue={password} changevalue={setpassword} required>Password</FormInput>
                <FormInput name='confirmpassword' type='password' svalue={confirm} changevalue={setconfirm} required>Confirm Password</FormInput>
                <div className='wrap-flex'><Btn type='submit'>Sign Up</Btn>
                <Btn type='button' click={siginwithGoogle}>Google Sign Up</Btn></div>
            </CostumForm>
        </div>
    )
}

export default SignIn
