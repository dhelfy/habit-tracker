import { FC } from "react";
import styles from "./Message.module.css"
import { useSelector } from "react-redux";
import { selectUserID } from "../../../../state/slices/userSlice/userSelector";

interface MessageProps {
    senderId: string;
    text: string;
}

export const Message: FC<MessageProps> = ({text, senderId}) => {
    const id = useSelector(selectUserID)

    return (
        senderId == id ?
        <div className={styles.message + ' ' + styles.ourMessage}>
            <div className={styles.textBlob}>{text}</div>
        </div>
        :
        <div className={styles.message}>
            <div className={styles.textBlob}>{text}</div>
        </div>
    )
}