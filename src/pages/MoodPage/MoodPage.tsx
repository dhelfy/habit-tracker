import { useSelector } from "react-redux"
import { instance } from "../../API/axiosInstance"
import { Calendar } from "../../shared/ui/Calendar/Calendar"
import styles from "./MoodPage.module.css"
import { selectUserID } from "../../state/slices/userSlice/userSelector"
import { BackButton } from "../../shared/ui/BackButton/BackButton"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const MoodPage = () => {
    const today = new Date()
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    const id = useSelector(selectUserID)
    const navigate = useNavigate()
    const [dates, setDates] = useState<{date: string, status: string;}[]>([])

    const onMoodSubmit = async (status: string) => {
        try {
            if (dates.find((d => d.date === date))) {
                console.log('Вы уже отмечались')
            } else {
                const response = await instance.post(
                    `user/api/setDates/${id}`,
                    [
                        {
                            date: date,
                            status: status
                        }
                    ]

                )

                if (response.status === 200) console.log("ok")
            }
        } catch (error) {
            console.log(error)
        }
    }

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
        <div className={styles.moodPage}>
            <div className={styles.header}>
                <BackButton
                    onClick={() => navigate(-1)}
                />
                <h1>Самоощущение</h1>
            </div>

            <p>Как вы себя чувствуете сегодня?</p>
            <div className={styles.moodForm}>
                <div className={styles.moodVariant} onClick={() => onMoodSubmit("Bad")}>
                    Плохо
                    <img src="/icons/Bad.png" alt="emoji" />
                </div>
                <div className={styles.moodVariant} onClick={() => onMoodSubmit("Normally")}>
                    Нормально
                    <img src="/icons/Normal.png" alt="emoji" />
                </div>
                <div className={styles.moodVariant} onClick={() => onMoodSubmit("Good")}>
                    Хорошо
                    <img src="/icons/Good.png" alt="emoji" />
                </div>
                <div className={styles.moodVariant} onClick={() => onMoodSubmit("Great")}>
                    Замечательно
                    <img src="/icons/Great.png" alt="emoji" />
                </div>
            </div>

            <Calendar />
        </div>
    )
}