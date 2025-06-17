import { FC, useEffect, useState } from "react"
import styles from "./HabitList.module.css"
import { HabitItem } from "./ui/HabitItem/HabitItem"
import { IHabit } from "../../../../types/types"
import { instance } from "../../../../API/axiosInstance"

export const HabitList: FC = () => {
    const [habits, setHabits] = useState<IHabit[]>([])

    useEffect(() => {
    const fetchHabits = async () => {
        let habits = await instance.post<IHabit[]>(
            "habit/api/getAllHabits/",
            {}, // пустой JSON, а не null
            {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
                    "Content-Type": "application/json",
                }
            }
        );
        setHabits(habits.data);
    };

    fetchHabits();
}, []);

    return (
        <div className={styles.habitList}>
            {habits.map((habit) => {
                return (
                    <HabitItem
                        title={habit.title}
                        stats={{
                            goal: habit.goal.toString(),
                            tryCount: habit.tryCount,
                            best: habit.best.toString()
                        }}
                        icon={"/icons/goal.svg"}
                        key={habit.id}
                        id={habit.id}
                    />
                )
            })}
        </div>
    )
}