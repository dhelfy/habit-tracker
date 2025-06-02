import { Back } from "../Back/Back"
import styles from "./Header.module.css"

export const Header = () => {
    return (
        <div className={styles.header}>
            <Back />
            <h2 className={styles.title}>Анонимный чат</h2>
        </div>
    )
}