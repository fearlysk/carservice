import Car from "../UI/Logos/Car/Car";
import Marker from "../UI/Logos/Marker/Marker";
import styles from "./Header.module.scss";

const Header = () => {
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
            </div>
        </div>
    )
}

export default Header;
