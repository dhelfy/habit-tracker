import { useState } from "react"
import styles from "./Calendar.module.css"

export const Calendar = () => {
    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    const monthIndexes = [
        "Январь", "Февраль", "Март", "Апрель",
        "Май", "Июнь", "Июль", "Август",
        "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ]
    let daysOfTheMonth = []
    let today = new Date();
    let [monthAndYear, setMonthAndYear] = useState({ month: today.getMonth(), year: today.getFullYear() });
    let date = new Date(monthAndYear.year, monthAndYear.month + 1, 0);
    let firstDayOfMonth = new Date(monthAndYear.year, monthAndYear.month, 1);
    let startIndex = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;

    for (let i = 0; i < startIndex; i++) {
        daysOfTheMonth.push(" ")
    }

    for (let i = 1; i <= date.getDate(); i++) {
        daysOfTheMonth.push(i)
    }

    const switchMonth = (dir: 1 | -1) => {
        setMonthAndYear(({ month, year }) => {
            let newMonth = month + dir;
            let newYear = year;

            if (newMonth > 11) {
                newMonth = 0;
                newYear = year + 1;
            } else if (newMonth < 0) {
                newMonth = 11;
                newYear = year - 1;
            }

            return { month: newMonth, year: newYear };
        });
    };


    return (
        <div className={styles.calendar}>
            <div className={styles.header}>
                <img
                    src="/icons/Back.png"
                    alt="back_icon"
                    className={styles.arrow}
                    onClick={() => switchMonth(-1)}
                />
                <p>{monthIndexes[monthAndYear.month]}</p>
                <img
                    src="/icons/Back.png"
                    alt="back_icon"
                    className={styles.arrow + ' ' + styles.next}
                    onClick={() => switchMonth(1)}
                />
            </div>
            <div className={styles.days}>
                {
                    days.map((day) => day === "Сб" || day === "Вс" ? 
                    <span className={styles.weekend} key={day}><p>{day}</p></span> : 
                    <p key={day}>{day}</p>)
                }
            </div>
            <div className={styles.dates}>
                {daysOfTheMonth.map((day, index) => <p key={index}>{day}</p>)}
            </div>
        </div>
    )
}