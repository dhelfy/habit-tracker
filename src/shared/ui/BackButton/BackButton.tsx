import { FC } from "react";
import styles from "./BackButton.module.css"

interface BackButtonProps {
    onClick: () => void;
    className?: string;
}

export const BackButton: FC<BackButtonProps> = ({ onClick, className }) => {
    return (
        <img
            src="/icons/Back.png"
            alt="back_icon"
            className={`${styles.backButton} ${className || ''}`}
            onClick={onClick}
        />
    )
}