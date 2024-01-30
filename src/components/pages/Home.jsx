import Navbar from "../layout/Navbar";
import styles from './Home.module.css'

function Home() {
  const name = localStorage.getItem('name')
  return (
    <div className={styles.home}>
      <Navbar/>
      <div className={styles.home_info}>
        <h1>Hi, {name}!</h1>
        <p>Navigate the menu to access live chat and user page </p>
      </div>
    </div>
  );
}

export default Home;
