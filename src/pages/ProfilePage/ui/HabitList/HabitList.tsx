import { FC } from "react"
import styles from "./HabitList.module.css"
import { HabitItem } from "./ui/HabitItem/HabitItem"

export const HabitList: FC = () => {
    const habits = [
        {
            goal: "3 дня",
            tryCount: 13,
            best: "6 дней",
            title: "Курение",
            achievements: [
                {
                    date: "03.02.2025",
                    time: "12:20",
                    desc: "Уже появилось отвращение к сигаретному дыму"
                }
            ],
            icon: "https://i.imgur.com/peLJdSB.png",
            id: 1,
        },
        {
            goal: "21 день",
            tryCount: 18,
            best: "12 дней",
            title: "Сладости",
            achievements: [],
            icon: "https://i.imgur.com/XaiBs5C.png",
            id: 2,
        }
    ]

    return (
        <div className={styles.habitList}>
            {habits.map((habit) => {
                return (
                    <HabitItem 
                        title={habit.title}
                        stats={{
                            goal: habit.goal,
                            tryCount: habit.tryCount,
                            best: habit.best
                        }}
                        icon={habit.icon}
                        key={habit.id}
                    />
                )
            })}
        </div>
    )
}