import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { SlUser, SlHome, SlBubbles } from "react-icons/sl";


function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.menu}>
          <p>MENU</p>
        </div>

        <div className={styles.buttons}>
          <Link to="/home">
            <button><SlHome/>HOME</button>
          </Link>

          <Link to="/chat">
            <button><SlBubbles/>CHAT</button>
          </Link>

          <Link to="/user">
            <button><SlUser/>USER</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
