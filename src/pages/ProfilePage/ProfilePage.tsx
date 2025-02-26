import { FC, useState } from "react";
import { HabitList } from "./ui/HabitList/HabitList";
import { NavBar } from "./ui/HabitList/ui/NavBar/NavBar";
import styles from "./ProfilePage.module.css"
import { useNavigate } from "react-router-dom";
import { AddButton } from "../../shared/ui/AddButton/AddButton";

export const ProfilePage: FC = () => {
    let [closed, setClosed] = useState<boolean>(true)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/new');
    }

    return (
        <>
            <div className={styles.menuContainer} onClick={() => setClosed(false)}>
                <span>&#9776;</span>
            </div>
            <div className={styles.searchBox}>
                Поиск
            </div>
            <NavBar closed={closed} setClosed={setClosed}/>
            <AddButton 
                onClick={handleClick} 
                className={styles.profilePageAddButton}
            />
            <HabitList />
        </>
    )
}