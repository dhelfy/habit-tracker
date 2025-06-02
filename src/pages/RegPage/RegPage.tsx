import { FC, useState } from "react";
import styles from './RegPage.module.css'
import { CstmInput } from "../../shared/ui/CstmInput/CstmInput";
import { useNavigate } from "react-router-dom";
import { instance } from "../../API/axiosInstance";

export const RegPage: FC = () => {
    const [form, setForm] = useState({
        name: "",
        surname: "",
        login: "",
        password: ""
    });

    const navigate = useNavigate();

    // надо тестить
    const handleClick = async () => {
        try {
            const response = await instance.post("auth/register", form)

            if (response.status === 200) {
                navigate("/auth")
            }
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className={styles.regPage}>
            <div className={styles.form}>
                <h1 className={styles.title}>Регистрация</h1>
                <img
                    src="./icons/leaderboard_icon.png"
                    alt="leaderboard_icon"
                    className={styles.icon}
                />
                <CstmInput placeholder="Имя" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <CstmInput placeholder="Фамилия" value={form.surname} onChange={(e) => setForm({ ...form, surname: e.target.value })} />
                <CstmInput placeholder="Логин" value={form.login} onChange={(e) => setForm({ ...form, login: e.target.value })} />
                <CstmInput placeholder="Пароль" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <button className={styles.button} onClick={handleClick}>Зарегистрироваться</button>
            </div>
        </div>
    )
}
