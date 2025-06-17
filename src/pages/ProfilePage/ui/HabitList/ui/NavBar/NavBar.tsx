import { FC } from "react";
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../../../../state/slices/userSlice/userSlice";

interface NavBarProps {
    closed: boolean;
    setClosed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar: FC<NavBarProps> = ({closed, setClosed}) => {
    const dispatch = useDispatch();

    return (
        <div id={styles.mySidenav} className={closed ? styles.sidenav : styles.sidenav + ' ' + styles.opened}>
            <span className={styles.closebtn} onClick={() => setClosed(!closed)}>&times;</span>
            <div className={styles.link}>
                <Link to="/profile">Домой</Link>
            </div>
            <div className={styles.link}>
                <Link to="/profile">Поддержка</Link>
            </div>
            <div className={styles.link}>
                <Link to="/profile">Другое</Link>
            </div>
            <div className={styles.link}>
                <Link to="/profile">Оценить</Link>
            </div>
            <div className={styles.link}>
                <Link to="/profile">Поделиться</Link>
            </div>
            <div className={styles.link} onClick={() => dispatch(logout())}>
                <Link to="/auth">Выйти</Link>
            </div>
        </div>
    )
}