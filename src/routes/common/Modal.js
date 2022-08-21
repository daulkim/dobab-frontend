 import styles from "./Modal.module.css";

function Modal(props) {
 
    function closeModal() {
        props.closeModal();
    }
 
    return (
        <div className={styles.Modal} onClick={closeModal}>
        <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={closeModal}>
            ✖
            </button>
            {props.children}
        </div>
        </div>
    );
}
 
export default Modal;