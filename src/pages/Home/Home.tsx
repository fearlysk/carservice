import HomeBackground from "../../assets/Home/images/home_background.png";
import Car from "../../assets/Home/images/home_car.png";
import Header from "../../components/Header/Header";
import styles from "./Home.module.scss";
import Star from "../../components/UI/Logos/Star/Star";
import useWindowDimensions from "../../utils/getWindowDimensions";

const Home = () => {

    const { width } = useWindowDimensions();

    const setCarWidth = () => {
        let carWidth;
        if( width > 1400 ) {
          carWidth = 570;
        } 
        else if (width > 1150) {
          carWidth = 510;
        }
        else if (width > 800) {
          carWidth = 450;
        }
        else {
          carWidth = 375;
        }
        return carWidth;
      }

    return (
        <div className={styles.wrapper} style={{background: `url(${HomeBackground})`}}>
            <div className={styles.container}>
               <Header />
               <div className={styles.main}>
                    <div className={styles.main__item}>
                        <p className={styles.main__itemHeadline}>ПРОФЕССИОНАЛЬНЫЙ РЕМОНТ И ОБСЛУЖИВАНИЕ АВТОМОБИЛЕЙ</p>
                        <p className={styles.main__itemDescription}>Узнайте стоимость ремонта вашего автомобиля,пройдя тест из 3-х вопросов</p>
                        <div className={styles.main__itemStar}><Star /></div>
                        <button className={styles.main__itemButton}><p className={styles.main__itemButtonText}>УЗНАТЬ СТОИМОСТЬ РЕМОНТА</p></button>
                    </div>
                    <div className={styles.main__item}>
                        <div className={styles.main__itemCar}>
                            <img src={Car} width={setCarWidth()} alt='No img found'/>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Home;
