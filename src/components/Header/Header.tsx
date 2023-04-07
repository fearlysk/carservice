import Car from "../UI/Logos/Car/Car";
import Marker from "../UI/Logos/Marker/Marker";
import styles from "./Header.module.scss";

const Header = () => {

    const openBurgerMenu = () => {
        const burgerMenuBtn = document.getElementsByClassName(styles.header__burger)[0];
        const changeClass = burgerMenuBtn.classList.toggle(styles.change);
        return changeClass;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.header__item}>
                    <div className={styles.header__itemLogo}><Car /></div>
                    <div className={styles.header__itemText}>Автосервис в Минске</div>
                </div>
                <div className={styles.header__item}>
                    <div className={styles.header__itemLogo}><Marker /></div>
                    <div className={styles.header__itemText}>Минск, ул. Московская,20</div>
                </div>
                <div className={styles.header__item}>
                    Оставить заявку
                </div>
                <div className={styles.header__item}>
                    Регистрация/вход
                </div>
                <div className={styles.header__item}>
                    <div className={styles.header__burger} onClick={() => openBurgerMenu()}>
                        <div className={styles.header__burgerBar1}></div>
                        <div className={styles.header__burgerBar2}></div>
                        <div className={styles.header__burgerBar3}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
