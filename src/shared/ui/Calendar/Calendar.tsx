import { useEffect, useState } from "react"
import styles from "./Calendar.module.css"
import { instance } from "../../../API/axiosInstance"
import { selectUserID } from "../../../state/slices/userSlice/userSelector"
import { useSelector } from "react-redux"

export const Calendar = () => {
    const id = useSelector(selectUserID)
    const [dates, setDates] = useState<{date: string, status: string;}[]>([])
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
        daysOfTheMonth.push(`${i}`)
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

    const formatDateForComparison = (day: string) => {
        return `${monthAndYear.year}-${monthAndYear.month + 1}-${day}`;
    };

    const getIconForDay = (day: string) => {
        if (day === " ") return null;
        
        const formattedDate = formatDateForComparison(day);
        const foundDate = dates.find(d => d.date === formattedDate);
        return foundDate ? `/icons/${foundDate.status}.png` : null;
    };

    useEffect(() => {
        const fetchDates = async () => {
            try {
                const response = await instance.get(`user/api/getDates/${id}`)
                setDates(response.data)
                if (response.status === 200) console.log("ok")
            } catch (error) {
                console.log(error)
            }
        }

        fetchDates()
    }, [])

    return (
        <div className={styles.calendar}>
            <div className={styles.header}>
                {/* <img
                    src="/icons/Back.png"
                    alt="back_icon"
                    className={styles.arrow}
                    onClick={() => switchMonth(-1)}
                /> */}
                <p>{monthIndexes[monthAndYear.month]}</p>
                {/* <img
                    src="/icons/Back.png"
                    alt="back_icon"
                    className={styles.arrow + ' ' + styles.next}
                    onClick={() => switchMonth(1)}
                /> */}
            </div>
            <div className={styles.days}>
                {
                    days.map((day) => day === "Сб" || day === "Вс" ? 
                    <span className={styles.weekend} key={day}><p>{day}</p></span> : 
                    <p key={day}>{day}</p>)
                }
            </div>
            <div className={styles.dates}>
                {
                    daysOfTheMonth.map((day, index) => {
                        const status = getIconForDay(day);
                        return (
                            day === today.getDate().toString() ?  
                            <div key={index} className={styles.dateActive + ' ' + styles.date}>
                                {day}
                                {status && <img src={status} className={styles.status}/>}
                            </div> 
                            :
                            <div key={index} className={styles.date}>
                                {day}
                                {status && <img src={status} className={styles.status}/>}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}