import React,{useState} from 'react'
import CostumForm from '../CostumForm/CostumForm'
import FormInput from '../form-input/FormInput'

function SignIn() {
    const [value, setvalue] = useState('')
    return (
        <div>
            <CostumForm>
                <FormInput name='text' type='text' svalue={value} changevalue={setvalue}>Name</FormInput>
                <FormInput name='password' type='password' svalue={value} changevalue={setvalue}>Password</FormInput>
                <FormInput name='confirmpassword' type='password' svalue={value} changevalue={setvalue}>Confirm Password</FormInput>
            </CostumForm>
        </div>
    )
}

export default SignIn
