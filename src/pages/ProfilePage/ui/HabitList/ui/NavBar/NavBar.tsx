import { FC } from "react";
import styles from "./NavBar.module.css"

interface NavBarProps {
    closed: boolean;
    setClosed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar: FC<NavBarProps> = ({closed, setClosed}) => {
    return (
        <div id={styles.mySidenav} className={closed ? styles.sidenav : styles.sidenav + ' ' + styles.opened}>
            <span className={styles.closebtn} onClick={() => setClosed(!closed)}>&times;</span>
            <div className={styles.link}>
                <a href="#">Домой</a>
            </div>
            <div className={styles.link}>
                <a href="#">Поддержка</a>
            </div>
            <div className={styles.link}>
                <a href="#">Другое</a>
            </div>
            <div className={styles.link}>
                <a href="#">Оценить</a>
            </div>
            <div className={styles.link}>
                <a href="#">Поделиться</a>
            </div>
        </div>
    )
}