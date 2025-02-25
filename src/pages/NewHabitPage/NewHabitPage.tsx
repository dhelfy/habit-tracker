import { FC } from "react"
import styles from "./NewHabitPage.module.css"
import { useNavigate } from "react-router-dom";

export const NewHabitPage: FC = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        console.log("clicked")
    }

    const handleBackClick = () => {
        navigate('/profile')
    }   

    return (
        <div className={styles.newHabitPage}>
            <img 
                src="./icons/Back.png" 
                alt="back_icon" 
                className={styles.backButton} 
                onClick={handleBackClick}
            />

            <div className={styles.habitIconSection}>
                <h1 className={styles.title}>Выбрать иконку</h1>
                <button className={styles.addButton} onClick={handleClick}>
                    +
                </button>
            </div>

            <div className={styles.habitInfoSection}>
                <p className={styles.habitInfoTitle}>Исключаю из жизни</p>
                
                <p className={styles.habitInfoSubtitle}>
                    <span className={styles.pink}>
                        Что вы хотите исключить
                    </span>
                </p>
            </div>
        </div>
    )
}
