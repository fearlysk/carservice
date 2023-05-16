import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { login, registration } from "../../http/userAPI";
import HomeBackground from "../../assets/Home/images/home_background.png";
import Cross from "../../components/UI/Elements/Cross";
import UserStore from "../../store/UserStore";
import styles from "./Auth.module.scss";
import routes from "../../constants/routes";

const Auth = observer(() => {

    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === routes.LOGIN;

    const [userStore] = useState(() => new UserStore());
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authUser = async (e: any) => {
        e.preventDefault();
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
                navigate(routes.HOME);
            } else {
                data = await registration(name, surname, email, phoneNumber, password);
            }
            userStore.user = data as never;
            userStore.isAuth = true;
            navigate(routes.HOME)
        } catch (e: any) {
            alert(e.response.data.message); // create error modal
        }
    }

    return (
        <div className={styles.wrapper} style={{ background: `url(${HomeBackground}) no-repeat` }}>
            <div className={styles.authContainer}>
                <div className={styles.authContainer__cross}><Link to={routes.HOME}><Cross /></Link></div>
                <div className={styles.authContainer__headline}>
                    {!isLogin ? 
                    <div>
                        <div className={styles.authContainer__headlineMain}>СОЗДАТЬ АККАУНТ</div>
                        <div className={styles.authContainer__headlineSub}>Уже есть аккаунт? <span className={styles.authContainer__headlineSubText}><Link to={routes.LOGIN}>Войти</Link></span></div>
                    </div>
                    : 
                    <div>
                        <div className={styles.authContainer__headlineMain}>ВОЙТИ</div>
                        <div className={styles.authContainer__headlineSub}>Нет аккаунта? <span className={styles.authContainer__headlineSubText}><Link to={routes.REGISTRATION}>Создать</Link></span></div>
                    </div>
                    }
                    </div>
                <div className={styles.authContainer__content}>
                    {!isLogin ?
                    <>
                    <form>
                        <div className={styles.authContainer__contentItem}>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="ИМЯ"/>
                            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="ФАМИЛИЯ"/>
                        </div>
                        <div className={styles.authContainer__contentItem}>
                            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="НОМЕР ТЕЛЕФОНА"/>
                        </div>
                        <div className={styles.authContainer__contentItem}>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-MAIL" />
                        </div>
                        <div className={styles.authContainer__contentItem}>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="ПАРОЛЬ" />
                        </div>
                        <div className={styles.authContainer__contentItem}>
                            <button onClick={(e) => authUser(e)}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                        </div>
                    </form>
                    </>
                    : 
                    <>
                    <form>
                        <div className={styles.authContainer__contentItemLogin}>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-MAIL" />
                        </div>
                        <div className={styles.authContainer__contentItem}>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="ПАРОЛЬ" />
                        </div>
                        <div className={styles.authContainer__contentItem}>
                            <button onClick={(e) => authUser(e)}>ВОЙТИ</button>
                        </div>
                    </form>
                    </>
                    }
                </div>
            </div>
        </div>
    )
})

export default Auth;
