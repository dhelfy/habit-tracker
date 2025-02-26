import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IHabit } from "../../types/types";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../state/slices/userSlice/userSelector";
import { instance } from "../../API/axiosInstance";
import { BackButton } from "../../shared/ui/BackButton/BackButton";
import { useNavigate } from "react-router-dom";
import styles from "./HabitPage.module.css"
import { AddButton } from "../../shared/ui/AddButton/AddButton";

export const HabitPage: FC = () => {
    const [habit, setHabit] = useState<IHabit>()
    const currentUser = useSelector(selectCurrentUser)
    const navigate = useNavigate()

    const { id } = useParams();

    const handleBackClick = () => {
        navigate('/profile')
    }

    useEffect(() => {
        const fetchHabit = async () => {
            const habit = await instance.get<IHabit>(`/habits/${currentUser}/${id}`)
            setHabit(habit.data)
        }
        fetchHabit()
    }, [id]);

    const handleAddHistory = () => {
        console.log('add history')
    }

    return (
        <div className={styles.habitPage}>
            <BackButton 
                onClick={handleBackClick} 
                className={styles.habitPageBackButton}
            />
            <h1>{habit?.title}</h1>
            <img 
                src={habit?.icon} 
                alt="habit_icon" 
                className={styles.icon}
            />
            <p className={styles.habitStat}>
                Цель: 
                <span className={styles.pink}>
                    {habit?.goal}
                </span>
            </p>
            <div className={styles.habitStats}>
                <div className={styles.habitStatVertical}>
                    Попытка
                    <span className={styles.pink}>{habit?.tryCount}</span>
                </div>
                <div className={styles.relapseButton}>
                    <p>Рецидив</p>
                </div>
                <div className={styles.habitStatVertical}>
                    Рекорд
                    <span className={styles.pink}>{habit?.best}</span>
                </div>
            </div>
            <div className={styles.historySection}>
                <p>История</p>
                <AddButton 
                    onClick={handleAddHistory}
                />
            </div>
            <hr className={styles.divider}/>
        </div>
    )
}
