import FormLogin from '../form/FormLogin.jsx'
import { useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './SignIn.module.css'
import loginImg from '../../img/loginImg.png'
import Message from '../layout/Message.jsx';



function SignIn(){

    const [message, setMessage] = useState()
    const[typeMsg, setTypeMsg] = useState()
    const navigate = useNavigate()

    const location = useLocation()
    useEffect(()=>{
        if(location.state){
            setMessage(location.state.msg)
            setTypeMsg(location.state.typeMsg)
        }
    },[location.state])



    
    async function loginAccount(user){
        setMessage('')
        await axios.post(`${process.env.REACT_APP_URL_BACKEND}/auth/login`, {
            email: user.email,
            password: user.password
        })
        .then((response) => {
            const { token, userId } = response.data
            localStorage.setItem('token', token)
            navigate('/user', {state: {userId}})
        }).catch(error => {
            setMessage(error.response.data.msg)
            setTypeMsg('error')
        });
    }
 
    return(
        <div className={styles.log}>
            <section className={styles.log_info}>
                <div className={styles.log_info_box}>
                    <div>
                        <h3>Login to account</h3>
                        <p>Enter your credentials</p>
                    </div>
                    <div className={styles.div_msg}>
                        <Message text={message} typeMsg={typeMsg}/>
                    </div>
                    <div>
                        <FormLogin handleSubmit={loginAccount} btnText='Login to account'/>
                        
                    </div>
                    <div> 
                        <p>Don't have an account? 
                         <Link to='/register'> Sign Up</Link>
                        </p>
                    </div>
                </div>
                
            </section>

            <section className={styles.log_img}>
                <img src={loginImg} alt="Descrição da imagem" />
            </section>
        </div>
        
    )
}

export default SignIn