import InputForm from './InputForm'
import SubmitButton from './SubmitButton'
import { useState } from 'react'

function Form({handleSubmit, btnText}){

    const [user, setUser] = useState({})

    function submit(e){
        e.preventDefault();
        handleSubmit(user)
    }
    function handleChange(e){
        setUser({
            ...user,
            [e.target.name]: e.target.value,  
        })
    }

    return(
        <form onSubmit={submit}>
            <InputForm 
                type='email'
                text='Email'
                name='email'
                placeholder='Enter your email'
                handleOnChange={handleChange}
            />
            <InputForm
                type='password'
                text='Password'
                name='password'
                placeholder='Enter your password'
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
} 
export default Form