import { useNavigate } from "react-router-dom"
import styles from "./Back.module.css"

export const Back = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.backButton} onClick={() => navigate(-1)}>
            <img
                src="/icons/Back.png"
                alt="back_icon"
                className={styles.backIcon}
            />
            Назад
        </div>
    )
}