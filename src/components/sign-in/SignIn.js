import React,{useState} from 'react'
import CostumForm from '../CostumForm/CostumForm'
import FormInput from '../form-input/FormInput'
import './Signin.scss'
import Btn from '../btn/Btn'
import { siginwithGoogle } from '../../firebase/FireBaseUtil'

function SignIn() {
    const [value, setvalue] = useState('')
    const [mail, setmail] = useState('')
    const [password, setpassword] = useState('')
    const [inmail, setinmail] = useState('')
    const [inpassword, setinpassword] = useState('')
    const [confirm, setconfirm] = useState('')
    return (
        <div className='signin'>
            <CostumForm submitFunction={()=>console.log('object')}>
                <h3 className='h3'>Sign In</h3>
            <FormInput name='mail' type='email' svalue={inmail} changevalue={setinmail} required>Email</FormInput>
                <FormInput name='password' type='password' svalue={inpassword} changevalue={setinpassword} required>Password</FormInput>
                <div className='wrap-flex'><Btn type='submit'>Sign In</Btn>
                <Btn type='button'click={siginwithGoogle}>Google Sign In</Btn></div>
            </CostumForm>
            <CostumForm submitFunction={()=>console.log('object')}>
                <h3 className='h3'>Sign Up</h3>
                <FormInput name='text' type='text' svalue={value} changevalue={setvalue} required>Name</FormInput>
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
