import { useState, useMemo } from "react";
import Header from "../../components/Header/Header";
import Diagnostics from "../../assets/Repair/images/diagnostics.png";
import Painting from "../../assets/Repair/images/painting.png";
import Bodykit from "../../assets/Repair/images/bodykit.png";
import Polishing from "../../assets/Repair/images/polishing.png";
import Membrane from "../../assets/Repair/images/membrane.png";
import Glasses from "../../assets/Repair/images/glasses.png";
import Check from "../../assets/Repair/images/check.png";
import Richting from "../../assets/Repair/images/richting.png";
import Geometry from "../../assets/Repair/images/geometry.png";
import Transmission from "../../assets/Repair/images/transmission.png";
import Suspension from "../../assets/Repair/images/suspension.png";
import Duplicates from "../../assets/Repair/images/duplicates.png";
import Technical from "../../assets/Repair/images/technical.png";
import Brakes from "../../assets/Repair/images/brakes.png";
import styles from "./Repair.module.scss";
import Search from "../../components/UI/Elements/Search";
import { createOrder } from "../../http/orderAPI";
import UserStore from "../../store/UserStore";
import Modal from "../../components/UI/Modal/Modal";
import OrderThankYou from "../../components/UI/Modal/OrderThankYou/OrderThankYou";

const Repair = () => {

    const items = [
        {id: 1, image: Diagnostics, headline: "Диагностика", hui: "123", price: 300},
        {id: 2, image: Painting, headline: "Окраска кузова", price: 500},
        {id: 3, image: Bodykit, headline: "Кузовные работы", price: 600},
        {id: 4, image: Polishing, headline: "Полировка автомобиля", price: 500},
        {id: 5, image: Membrane, headline: "Защитные плёнки", price: 400},
        {id: 6, image: Glasses, headline: "Стёкла, фары", price: 150},
        {id: 7, image: Check, headline: "Проверка сход/развала", price: 60},
        {id: 8, image: Richting, headline: "Рихтовочные работы", price: 200},
        {id: 9, image: Geometry, headline: "Восстановление геометрии", price: 500},
        {id: 10, image: Transmission, headline: "Трансмиссия", price: 800},
        {id: 11, image: Suspension, headline: "Подвеска", price: 400},
        {id: 12, image: Duplicates, headline: "Дубликаты ключей", price: 50},
        {id: 13, image: Technical, headline: "Техническое обслуживание", price: 120},
        {id: 14, image: Brakes, headline: "Тормозная система", price: 250}
    ]

    const [allItems, setAllItems] = useState(items);
    const [value, setValue] = useState("");
    const [order, setOrder] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [userStore] = useState(() => new UserStore());

    const addOrderItem = (id: number, headline: string, price: number) => {
        const item = {
            id,
            headline,
            price
        }
        setOrder(oldOrder => [...oldOrder, item] as never)
    }

    const totalPrice = (order: Array<Object>) => {
        const total = order.reduce((acc: number, cur: any) => acc + cur.price, 0);
        return total;
    }

    const removeOrderItem = (array: any, item: any) => {
        const index = array.indexOf(item);
        const newArr = [...array];
            if (index > -1) {
              newArr.splice(index, 1);
            }
        return setOrder(newArr as never);
    }

    const makeOrder = async () => {
        const result = order.map((a: any) => a.headline);
        const job = result.join(", ");
        const user = JSON.stringify(userStore.user);
        const parsedUser = JSON.parse(user)
        const orderBody = await createOrder(parsedUser.name, parsedUser.id, "-", 2012, totalPrice(order) + " BYN", job)
        setModalOpen(true);
        return orderBody;
    }

    const closeModal = () => {
        setModalOpen(false);
        window.location.reload();
    }

    const filteredItems = useMemo(
        () => allItems ? allItems.filter((item) => item.headline.toLowerCase().includes(value.toLowerCase())) : allItems,
        [value, allItems]
      );

    return (
        <div className={styles.wrapper}>
            <Header bg="#2D9CDB" />
            <Modal open={modalOpen} onClose={() => closeModal()} marker="burger-menu">
                <OrderThankYou setOrderModalOpen={setModalOpen} />
            </Modal>
            <div className={styles.main}>
                <div className={styles.main__headline}>
                    <p>Выбрать по категории</p>
                </div>
                <div className={styles.main__content}>
                    <div className={styles.main__contentSearch}>
                        <>
                            <input type="text" placeholder="Какой ремонт вам нужен?" onChange={(event) => setValue(event.target.value)}  />
                            <Search />
                        </>
                    </div>
                    {order.length ?
                        <div className={styles.main__order}>
                            Ваш заказ:
                            {order.map((item: any) => 
                                <div key={item.id} className={styles.main__orderItem}>
                                    <p className={styles.main__orderItemHeadline}>- {item.headline}</p>
                                    <p>{item.price} BYN</p>
                                    <button className={styles.main__orderItemRemoveBtn} onClick={() => removeOrderItem(order, item)}>X</button>
                                </div>
                                )
                            } 
                            <p className={styles.main__orderTotal}>Итого: {totalPrice(order)} BYN</p>
                            <button onClick={() => makeOrder()} className={styles.replyBtn}>ОФОРМИТЬ ЗАКАЗ</button>
                        </div>
                    : null}
                    <div className={styles.main__contentItems}>
                        {filteredItems.map(item => 
                            <div className={styles.main__contentItem} key={item.id}>
                                <div className={styles.main__contentItemImage}>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className={styles.main__contentItemService}>
                                    <div className={styles.main__contentItemHeadline}>
                                        <p>{item.headline}</p>
                                        <p>{item.price} BYN</p>
                                    </div>
                                    {order.some((order: any)=> order.id === item.id ) ? 
                                        <p className={styles.main__contentItemChecked}>&#10003;</p>
                                    : 
                                    <div>
                                        <button className={styles.main__contentItemServiceBtn} onClick={() => addOrderItem(item.id, item.headline, item.price)}>Добавить</button>
                                    </div>
                                 }
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Repair;
