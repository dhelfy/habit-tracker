import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css"
import { Calendar } from "../../shared/ui/Calendar/Calendar";

export const Layout: FC = () => {
    return (
        <main className={styles.mainContainer}>
            {/* <Calendar /> */}
            <Outlet />
        </main>
    )
}