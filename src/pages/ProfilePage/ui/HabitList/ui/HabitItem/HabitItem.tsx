import { FC } from "react";
import styles from "./HabitItem.module.css"
import { useNavigate } from "react-router-dom";

interface HabitItem {
    title: string;
    stats: {
        goal: string;
        tryCount: number;
        best: string;
    },
    icon: string;
    id: number;
}

export const HabitItem: FC<HabitItem> = ({ title, stats, icon, id }) => {
    const goal = stats.goal.split(" ")
    const best = stats.best.split(" ")
    const navigate = useNavigate()

    return (
        <div className={styles.habitItem} onClick={() => navigate(`/habit/${id}`)}>
            <img src={icon} className={styles.icon}/>
            <div className={styles.habitDesc}>
                <h1 className={styles.title}> {title} </h1>
                <div className={styles.stats}>
                    <div className={styles.statsItem}>
                        <p>Цель</p>
                        <p>
                            <span className={styles.highlighted}>{goal[0]}</span>
                        </p>
                    </div>
                    <div className={styles.statsItem} id={styles.tryCount}>
                        <p>Попытка</p>
                        <span className={styles.highlighted}>{stats.tryCount}</span>
                    </div>
                    <div className={styles.statsItem}>
                        <p>Рекорд</p>
                        <p>
                            <span className={styles.highlighted}>{best[0]}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}