import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Car from "../UI/Logos/Car/Car";
import Marker from "../UI/Logos/Marker/Marker";
import routes from "../../constants/routes";
import styles from "./Header.module.scss";
import IHeaderProps from "../../interfaces/IHeaderProps";
import UserStore from "../../store/UserStore";
import { EncryptStorage } from 'encrypt-storage';

const Header = (props: IHeaderProps) => {

    const { bg } = props;

    const encryptStorage = new EncryptStorage(process.env.REACT_APP_SECRET_KEY as string);
    const [userStore] = useState(() => new UserStore());
    const navigate = useNavigate();

    const userDataStore = encryptStorage.getItem('UserStore');
    const userData = userDataStore;
    const isAuth = userData.isAuth;
    const isAdmin = userData.user.role === 'ADMIN';
    
    const navigateTo = (destination: string) => {
        navigate(destination);
    }

    const logOut = () => {
        localStorage.removeItem('UserStore');
        localStorage.removeItem('token');
        userStore.isAuth = false;
        navigateTo(routes.HOME);
        window.location.reload();
    }

    const checkIsAuth = () => {
        if (userStore.isAuth === true) {
            navigateTo(routes.REPAIR);
        } else {
            navigateTo(routes.LOGIN);
        }
    }

    const openBurgerMenu = () => {
        const burgerMenuBtn = document.getElementsByClassName(styles.header__burger)[0];
        const changeClass = burgerMenuBtn.classList.toggle(styles.change);
        return changeClass;
    }

    return (
        <div className={styles.wrapper} style={{background: bg}}>
            <div className={styles.header}>
                <div className={styles.header__item}>
                    <Link to={routes.HOME}><div className={styles.header__itemLogo}><Car /></div></Link>
                    <Link to={routes.HOME}><div className={styles.header__itemText}>Автосервис в Минске</div></Link>
                </div>
                <div className={styles.header__item}>
                    <div className={styles.header__itemLogo}>{!isAuth ? <Marker /> : null}</div>
                    {!isAuth ? <div className={styles.header__itemText}>Минск, ул. Московская 20</div> : null}
                    <div className={styles.header__itemText}>{isAuth && !isAdmin ? <Link to={routes.PROFILE + '/' + userData.user.id}>Мои заказы</Link> : null}</div>
                    {isAuth && isAdmin ? <div className={styles.header__itemText}> <Link to={routes.ADMIN}>Админ-меню</Link></div>: null}
                </div>
                <div className={styles.header__item}>
                    <span onClick={() => checkIsAuth()}>Наши услуги</span>
                </div>
                <div className={styles.header__item}>
                    {!isAuth ? 
                    <Link to={routes.LOGIN}>Регистрация/вход</Link>
                    :
                    <Link to="/" onClick={logOut}>Выйти</Link>
                    }
                </div>
                {/* <div className={styles.header__item}>
                    <div className={styles.header__burger} onClick={() => openBurgerMenu()}>
                        <div className={styles.header__burgerBar1}></div>
                        <div className={styles.header__burgerBar2}></div>
                        <div className={styles.header__burgerBar3}></div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Header;
