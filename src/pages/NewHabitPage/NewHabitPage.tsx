import { FC, useState } from "react"
import styles from "./NewHabitPage.module.css"
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../shared/ui/BackButton/BackButton";
import { CstmInput } from "../../shared/ui/CstmInput/CstmInput";
import { instance } from "../../API/axiosInstance";

export const NewHabitPage: FC = () => {
    const [form, setForm] = useState({ goal: "", title: ""})
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const response = await instance.post(
                "habit/api/add",
                {
                    title: form.title,
                    goal: parseInt(form.goal),
                    tryCount: 1,
                    best: 0,
                    icon: "/icons/goal.svg",
                    achievements: [],
                    global: false
                },
                {
                    headers: {
                        'Authorization': `Bearer ${window.localStorage.getItem('accessToken')}`
                    }
                }
            )

            if (response.status === 200) navigate("/profile")
        } catch (error) {
            console.log(error)
        }
    }

    const handleBackClick = () => {
        navigate('/profile')
    }

    return (
        <div className={styles.newHabitPage}>
            <BackButton onClick={handleBackClick} />
            <div className={styles.habitForm}>
                <CstmInput
                    label="Название привычки"
                    value={form.title}
                    onChange={(e) => {
                        setForm({ ...form, title: e.currentTarget.value })
                    }}
                />
                <CstmInput
                    label="Цель в днях"
                    type="number"
                    value={form.goal}
                    onChange={(e) => setForm({ ...form, goal: e.currentTarget.value })}
                />
                <button
                    className={styles.createBtn}
                    onClick={handleClick}
                >
                    Создать
                </button>
            </div>
        </div>
    )
}
