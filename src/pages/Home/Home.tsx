import HomeBackground from "../../assets/Home/images/home_background.png";
import Header from "../../components/Header/Header";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.wrapper} style={{background: `url(${HomeBackground})`}}>
            <div className={styles.container}>
               <Header />
            </div>
        </div>
    )
}

export default Home;
