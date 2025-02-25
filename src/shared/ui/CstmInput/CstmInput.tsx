import { FC } from "react";
import styles from './CstmInput.module.css'

interface CstmInputProps {
    placeholder: string;
}

export const CstmInput: FC<CstmInputProps> = ({ placeholder }) => {
    return (
        <input type="text" className={styles.cstmInput} placeholder={placeholder} />
    )
}