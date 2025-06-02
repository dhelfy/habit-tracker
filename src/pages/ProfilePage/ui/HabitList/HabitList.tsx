import { FC, useEffect, useState } from "react"
import styles from "./HabitList.module.css"
import { HabitItem } from "./ui/HabitItem/HabitItem"
import { IHabit } from "../../../../types/types"
import axios from "axios"

export const HabitList: FC = () => {
    const [habits, setHabits] = useState<IHabit[]>([])

    useEffect(() => {
        const fetchHabits = async () => {
            let habits = await axios.get<IHabit[]>("http://10.3.19.24:10000/habits/log01")
            setHabits(habits.data)
        }

        fetchHabits()
    }, [])

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
                        icon={habit.icon}
                        key={habit.id}
                        id={habit.id}
                    />
                )
            })}
        </div>
    )
}