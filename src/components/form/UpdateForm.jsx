import InputForm from "./InputForm"
import SubmitButton from "./SubmitButton"
import {useState} from 'react'

function UpdateForm({handleSubmit, btnText}){

    const [user, setUser] = useState({})

    function submit(e){
        e.preventDefault()
        handleSubmit(user)
    }
    function handleChange(e){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }


    return(
        <form onSubmit={submit}>
            <InputForm
            type='text'
            text='New name'
            name='name'
            placeholder='Enter your new name'
            handleOnChange={handleChange}/>
            <InputForm
            type='email'
            text='New email'
            name='email'
            placeholder='Enter your new email'
            handleOnChange={handleChange}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}
export default UpdateForm