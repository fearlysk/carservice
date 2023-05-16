import { useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const modalRootElement = document.querySelector('#modal') as Element;

const Modal = (props: any) => {
    const { marker, open } = props;

    const element = useMemo(() => {
        const element = document.createElement("div");
        element.dataset.marker = marker;
        return element;
    }, [marker]);
   
    useEffect(() => {
        modalRootElement.appendChild(element);
        return () => {
            modalRootElement.removeChild(element)
        }
    })

    if (open) {
        return createPortal(
            <div className={styles.modalBackground}>
                {props.children}
            </div>,
        element);
    }

    return null;

}

export default Modal;
