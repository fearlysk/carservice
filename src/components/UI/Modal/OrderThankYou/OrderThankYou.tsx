import { useState } from "react";
import styles from "./OrderThankYou.module.scss";
import Cross from "../../Elements/Cross";

const OrderThankYou = (props: any) => {

    const { setOrderModalOpen } = props;

    const className = styles.animatedHide;
    const [isOrderClosed, setIsOrderClosed] = useState(false);
    const closeModal = () => {
        setIsOrderClosed(true);
        setTimeout(() => setOrderModalOpen(false), 300)
        window.location.reload();
    }
    return (
        <div className={!isOrderClosed ? styles.wrapper : className}>
            <div className={styles.content}>
                <div className={styles.contentItems}>
                    <h3 className={styles.contentItem}>Спасибо за заказ!</h3>
                    <p className={styles.contentItemText}>Вы можете отслежить статус вашего заказа в личном кабинете!</p>
                </div>
            </div>
            <div className={styles.closeBtn}>
                <button onClick={closeModal}>
                    <Cross />
                </button>
            </div>
    </div>
    )
}

export default OrderThankYou;
