import HomeBackground from "../../assets/Home/images/home_background.png";
import AdvantagesBackground from '../../assets/Home/images/advantages_background.png';
import Car from "../../assets/Home/images/home_car.png";
import Wheel from "../../assets/Home/images/home_wheel.png";
import Geometry from "../../assets/Home/images/services/geometry.png";
import Straightening from "../../assets/Home/images/services/straightening.png";
import Painting from "../../assets/Home/images/services/painting.png";
import Polishing from "../../assets/Home/images/services/polishing.png";
import Welding from "../../assets/Home/images/services/welding.png";
import Enamel from "../../assets/Home/images/services/enamel.png";
import Exhaust from "../../assets/Home/images/home_exhaust.png";
import Header from "../../components/Header/Header";
import styles from "./Home.module.scss";
import Star from "../../components/UI/Logos/Star/Star";
import Phone from "../../components/UI/Logos/Icons/Phone/Phone";
import Computer from "../../components/UI/Logos/Icons/Computer/Computer";
import Progress from "../../components/UI/Logos/Icons/Progress/Progress";
import Sending from "../../components/UI/Logos/Icons/Sending/Sending";
import Man from "../../components/UI/Logos/Man/Man";
import useWindowDimensions from "../../utils/getWindowDimensions";

const Home = () => {

  const { width } = useWindowDimensions();

  const setCarWidth = () => {
    let carWidth;
    if (width > 1400) {
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
    <div className={styles.wrapperContainer}>
      <div className={styles.wrapper} style={{ background: `url(${HomeBackground})` }}>
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
                <img src={Car} width={setCarWidth()} alt='No img found' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.advantages} style={{background: `url(${AdvantagesBackground}` }}>
        <div className={styles.advantagesWrapper}>
            <br />
            <div className={styles.advantages__line}></div>
            <div className={styles.advantagesContainer}>
              <div className={styles.advantagesItem}>
                <div className={styles.advantagesCircle}>
                  <div className={styles.advantagesCircle__mini}></div>
                </div>
                <div className={styles.advantagesImage}>
                  <Phone />
                </div>
                <div className={styles.advantagesInfo}>
                  <p className={styles.advantagesInfo__head}>Расчёт стоимости</p>
                  <p className={styles.advantagesInfo__subtitle}>не выходя из дома</p>
                  <p className={styles.advantagesInfo__description}>Вы можете определить стоимость ремонта прямо сейчас в нашей системе</p>
                </div>
              </div>
              <div className={styles.advantagesItem}>
                <div className={styles.advantagesCircle}>
                  <div className={styles.advantagesCircle__mini}></div>
                </div>
                <div className={styles.advantagesImage}>
                  <Computer />
                </div>
                <div className={styles.advantagesInfo}>
                  <p className={styles.advantagesInfo__head}>Регистрация</p>
                  <p className={styles.advantagesInfo__subtitle}>в нашей системе</p>
                  <p className={styles.advantagesInfo__description}>Вы можете зарегистрироваться в нашей системе и видеть все детали работы</p>
                </div>
              </div>
              <div className={styles.advantagesItem}>
                <div className={styles.advantagesCircle}>
                  <div className={styles.advantagesCircle__mini}></div>
                </div>
                <div className={styles.advantagesImage}>
                  <Progress />
                </div>
                <div className={styles.advantagesInfo}>
                  <p className={styles.advantagesInfo__head}>Отслеживание</p>
                  <p className={styles.advantagesInfo__subtitle}>прогресса</p>
                  <p className={styles.advantagesInfo__description}>Вы можете определить на каком этапе находится ваш заказ</p>
                </div>
              </div>
              <div className={styles.advantagesItem}>
                <div className={styles.advantagesCircle}>
                  <div className={styles.advantagesCircle__mini}></div>
                </div>
                <div className={styles.advantagesImage}>
                  <Sending />
                </div>
                <div className={styles.advantagesInfo}>
                  <p className={styles.advantagesInfo__head}>Отправка заявок</p>
                  <p className={styles.advantagesInfo__subtitle}>на нашем сайте</p>
                  <p className={styles.advantagesInfo__description}>За 1 минуту вы можете отправить заявку на ремонт и с вами свяжутся</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className={styles.separation}>
        <div className={styles.separation__container}>
          <div className={styles.separation__blocks}>
            <div className={styles.separation__blocksItem}></div>
            <div className={styles.separation__blocksItem}></div>
          </div>
          <div className={styles.separation__wheel}>
            <img src={Wheel} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.services__headline}>
          <p className={styles.services__headlineText}>НАШИ УСЛУГИ</p>
        </div>
        <div className={styles.services__items}>
          <div className={styles.services__item}>
            <div className={styles.services__itemImage}>
              <img src={Geometry} alt="Geometry" />
            </div>
            <div className={styles.services__itemText}>
              <p>Восстановление геометрии</p>
            </div>
          </div>
          <div className={styles.services__item}>
            <div className={styles.services__itemImage}>
              <img src={Straightening} alt="Straightening" />
            </div>
            <div className={styles.services__itemText}>
              <p>Рихтовочные работы</p>
            </div>
          </div>
          <div className={styles.services__item}>
            <div className={styles.services__itemImage}>
              <img src={Painting} alt="Painting" />
            </div>
            <div className={styles.services__itemText}>
              <p>Покраска кузова</p>
            </div>
          </div>
          <div className={styles.services__item}>
            <div className={styles.services__itemImage}>
              <img src={Polishing} alt="Polishing" />
            </div>
            <div className={styles.services__itemText}>
              <p>Полировка автомобиля</p>
            </div>
          </div>
          <div className={styles.services__item}>
            <div className={styles.services__itemImage}>
              <img src={Welding} alt="Welding" />
            </div>
            <div className={styles.services__itemText}>
              <p>Сварка автомобиля</p>
            </div>
          </div>
          <div className={styles.services__item}>
            <div className={styles.services__itemImage}>
              <img src={Enamel} alt="Enamel" />
            </div>
            <div className={styles.services__itemText}>
              <p>Подбор автоэмалей</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.registration}>
        <div className={styles.registration__exhaust}>
          <img src={Exhaust} alt="" />
        </div>
        <div className={styles.registration__content}>
          <div className={styles.registration__contentLogo}>
            <Man />
          </div>
          <div className={styles.registration__contentFormWrapper}>
            <p className={styles.registration__contentFormHeadline}>ЗАПИСАТЬСЯ В НАШ АВТОСЕРВИС</p>
            <form className={styles.registration__contentForm}>
              <input className={styles.registration__contentFormInput} type="text" placeholder="КАК ВАС ЗОВУТ?" />
              <input className={styles.registration__contentFormInput} type="text" placeholder="ВАШ НОМЕР" />
              <button className={styles.registration__contentFormBtn} type="submit">ОСТАВИТЬ ЗАЯВКУ</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
