import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { getUserOrders } from "../../http/orderAPI";
import settlePromises from "../../utils/settlePromises";
import styles from "./Profile.module.scss";

const Profile = () => {

    const { userId } = useParams();

    const [orders, setOrders] = useState([]);

    const getOrders = async (userId: number) => {
        let data;
        try {
            data = await getUserOrders(userId);
        } catch (e: any) {
            alert(e.message + " userOrders");
        }
        return data;
    }

    // const removeOrder = async (id) => {
    //     let data;
    //     try {
    //         data = await deleteOrder(id);
    //         window.location.reload();
    //     } catch (e) {
    //         alert(e.message + " userOrdersDelete");
    //     }
    // }    

    const promises = [getOrders(userId as never)];

    useEffect(() => {
        settlePromises(promises as never).then((data: any) => {
            setOrders(data[0].data);
        });
      }, []);


    return (
        <div className={styles.wrapper}>
              <Header bg="#2D9CDB" />
              <br />
            <div className={styles.content}>
                <div className={styles.content__items}>
                    <div className={styles.content__headline}>
                        <p>Мои заказы</p>
                    </div>
                    {orders.length ? orders.map((order: any) => (
                        <div className={styles.content__item}>
                            <p>Стоимость: {order.price}</p>
                            <p>Услуги: {order.job}</p>
                            <p>Добавлен: {new Date(Date.parse(order.createdAt)).toLocaleString()}</p>
                            <p>Статус: {order.status}</p>
                        </div>
                    )) : <div><br/><p>Нет заказов.</p></div>}
                </div>
            </div>
        </div>
    )
}

export default Profile;
