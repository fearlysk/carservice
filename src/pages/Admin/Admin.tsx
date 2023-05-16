import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import styles from "./Admin.module.scss";
import settlePromises from "../../utils/settlePromises";
import { getOrders, deleteOrder, updateOrder } from "../../http/orderAPI";

const Admin = () => {

    const [orders, setOrders] = useState([]);
    const [orderId, setOrderId] = useState("");
    const [orderStatus, setOrderStatus] = useState("");

    const getAllOrders = async () => {
        let data;
        try {
            data = await getOrders();
        } catch (e: any) {
            alert(e.message + " orders");
        }
        return data;
    }

    const updateOneOrder = async (e: any, id: string, status: string) => {
        e.preventDefault();
        try {
            await updateOrder(Number(id), status)
            window.location.reload();
        } catch (e: any) {
            console.log(e.message);
        }
    }
 
    const deleteOneOrder = async (id: number) => {
        let data;
        try {
            data = await deleteOrder(id); 
            window.location.reload(); 
        } catch (e) {
            alert("Что-то пошло не так");
        }
        return data;
    }

    const promises = [getAllOrders()];

    useEffect(() => {
        settlePromises(promises as never).then((data: any) => {
            setOrders(data[0].data);
        });
      }, []);

    return (
        <div className={styles.wrapper}>
            <Header bg="#2D9CDB" />
            <br />
            <div className={styles.main}>
                <div className={styles.main__orders}>
                    <h1 className={styles.main__ordersHeadline}>Все заказы</h1>
                    {orders.length ? orders.map((order: any) => (
                        <div className={styles.content__item}>
                            <p>ID заказа: {order.id}</p>
                            <p>Имя заказчика: {order.name}</p>
                            <p>Стоимость: {order.price}</p>
                            <p>Услуги: {order.job}</p>
                            <p>Добавлен: {new Date(Date.parse(order.createdAt)).toLocaleString()}</p>
                            <p>Статус: {order.status}</p>
                            <p>ID заказчика: {order.userId}</p>
                            <button onClick={() => deleteOneOrder(order.id)} className={styles.content__itemBtn}>Удалить заказ</button>
                        </div>
                    )) : <div><br/><p>Нет заказов.</p></div>}
                    {orders.length ? 
                        <form onSubmit={(e) => updateOneOrder(e, orderId, orderStatus)}>
                            <h3>Обновить статус заказа</h3>
                            <input
                                value={orderId}
                                onChange={e => setOrderId(e.target.value)}
                                placeholder="ID заказа"
                                required
                            />
                              <input
                                value={orderStatus}
                                onChange={e => setOrderStatus(e.target.value)}
                                placeholder="Статус"
                                required
                            />
                            <button type="submit" className={styles.content__itemBtn}>Сохранить</button> 
                        </form>
                    : null}
                </div>
            </div>
        </div>
    )
}

export default Admin;
