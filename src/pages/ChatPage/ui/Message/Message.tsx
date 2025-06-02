import { FC } from "react";
import styles from "./Message.module.css"

interface MessageProps {
    avatarURL: string;
    text: string;
}

export const Message: FC<MessageProps> = ({avatarURL, text}) => {
    return (
        <div className={styles.message}>
            <div className={styles.textBlob}>{text}</div>
            <img 
                src={avatarURL}
                className={styles.avatar}
            />
        </div>
    )
}