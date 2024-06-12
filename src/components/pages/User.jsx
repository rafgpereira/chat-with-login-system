import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Message from "../layout/Message";
import styles from "./User.module.css";
import { SlLogout, SlPencil, SlTrash } from "react-icons/sl";
import UpdateForm from "../form/UpdateForm";
import Navbar from "../layout/Navbar";

function User() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const [editForm, setEditForm] = useState(false);
  const [message, setMessage] = useState("");

  const userId = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_BACKEND}/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data.user);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    }

    if (userId && token) {
      getUserInfo();
    }
  }, [userId, token]);

  async function deleteUser(e) {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_URL_BACKEND}/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/", { state: { msg: response.data.msg, typeMsg: "success" } });
    } catch (error) {
      console.log(error.response.data.msg);
    }
  }

  async function userUpdate(user) {
    setMessage("");
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_URL_BACKEND}/user/${userId}`,
        {
          name: user.name,
          email: user.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toggleEditForm();
      setMessage(response.data.msg);
      setUser(response.data.user);
      localStorage.setItem("name", response.data.user.name);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  }

  function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    navigate("/", {
      state: { msg: "Exited successfully", typeMsg: "success" },
    });
  }

  function toggleEditForm() {
    setEditForm(!editForm);
  }

  return (
    <div className={styles.user_page}>
      <Navbar />
      <div className={styles.user_body}>
        <div className={styles.user_box}>
          <h3>Your Account</h3>
          <div className={styles.msg_box}>
            {message && <Message text={message} typeMsg="success" />}
          </div>
          <div className={styles.user_info}>
            <p>
              <span>Name: </span> {user.name}
            </p>
            <p>
              <span>Email:</span> {user.email}
            </p>
          </div>
          <div className={styles.button}>
            <button onClick={logOut}>
              <SlLogout />
            </button>
            <button onClick={toggleEditForm}>
              <SlPencil />
            </button>
            <button onClick={deleteUser}>
              <SlTrash />
            </button>
          </div>
          <div>
            {editForm && (
              <UpdateForm handleSubmit={userUpdate} btnText="Update" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
