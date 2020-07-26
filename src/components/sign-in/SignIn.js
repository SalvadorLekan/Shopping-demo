import React,{useState} from 'react'
import CostumForm from '../CostumForm/CostumForm'
import FormInput from '../form-input/FormInput'

function SignIn() {
    const [value, setvalue] = useState('')
    return (
        <div>
            <CostumForm>
                <FormInput name='text' type='text' svalue={value} changevalue={setvalue}>Test</FormInput>
            </CostumForm>
        </div>
    )
}

export default SignIn
