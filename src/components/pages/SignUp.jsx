import FormRegister from "../form/FormRegister";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./SignIn.module.css";
import Message from "../layout/Message";
import axios from "axios";
import loginImg from "../../img/loginImg.png";

function SignUp() {
  const [message, setMessage] = useState();
  const [typeMsg, setTypeMsg] = useState();
  const navigate = useNavigate();

  async function createAccount(user) {
    setMessage("");
    await axios
      .post(`${process.env.REACT_APP_URL_BACKEND}/auth/register`, {
        name: user.name,
        email: user.email,
        password: user.password,
        confirmpassword: user.confirmpassword,
      })
      .then((response) => {
        const { msg } = response.data;
        navigate("/", { state: { msg, typeMsg: "success" } });
      })
      .catch((error) => {
        setMessage(error.response.data.msg);
        setTypeMsg("error");
      });
  }

  return (
    <div className={styles.log}>
      <section className={styles.logUp_img}>
        <img src={loginImg} alt="Descrição da imagem" />
      </section>
      <section className={styles.log_info}>
        <div className={styles.log_info_box}>
          <div>
            <h3>Create account</h3>
            <p>Enter your details</p>
          </div>
          <div className={styles.div_msg}>
            <Message text={message} typeMsg={typeMsg} />
          </div>
          <div>
            <FormRegister
              handleSubmit={createAccount}
              btnText="Create an account"
            />
          </div>
          <div>
            <p>
              Have an account?
              <Link to="/"> Sign In</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default SignUp;
