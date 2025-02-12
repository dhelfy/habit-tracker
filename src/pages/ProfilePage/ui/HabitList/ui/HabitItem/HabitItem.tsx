import { FC } from "react";
import styles from "./HabitItem.module.css"

interface HabitItem {
    title: string;
    stats: {
        goal: string;
        tryCount: number;
        best: string;
    },
    icon: string;
}

export const HabitItem: FC<HabitItem> = ({ title, stats, icon }) => {
    const goal = stats.goal.split(" ")
    const best = stats.best.split(" ")

    return (
        <div className={styles.habitItem}>
            <img src={icon} className={styles.icon}/>
            <div className={styles.habitDesc}>
                <h1 className={styles.title}> {title} </h1>
                <div className={styles.stats}>
                    <div className={styles.statsItem}>
                        <p>Цель</p>
                        <p>
                            <span className={styles.highlighted}>{goal[0]}</span>{` ${goal[1]}`}
                        </p>
                    </div>
                    <div className={styles.statsItem} id={styles.tryCount}>
                        <p>Попытка</p>
                        <span className={styles.highlighted}>{stats.tryCount}</span>
                    </div>
                    <div className={styles.statsItem}>
                        <p>Рекорд</p>
                        <p>
                            <span className={styles.highlighted}>{best[0]}</span>{` ${best[1]}`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}