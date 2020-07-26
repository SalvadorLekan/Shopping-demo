import React,{useState} from 'react'
import CostumForm from '../CostumForm/CostumForm'
import FormInput from '../form-input/FormInput'
import Btn from '../btn/Btn'

function SignIn() {
    const [value, setvalue] = useState('')
    return (
        <div>
            <CostumForm submitFunction={()=>console.log('object')}>
                <FormInput name='text' type='text' svalue={value} changevalue={setvalue} required>Name</FormInput>
                <FormInput name='password' type='password' svalue={value} changevalue={setvalue}>Password</FormInput>
                <FormInput name='confirmpassword' type='password' svalue={value} changevalue={setvalue}>Confirm Password</FormInput>
                <Btn>Sign Up</Btn>
            </CostumForm>
        </div>
    )
}

export default SignIn
