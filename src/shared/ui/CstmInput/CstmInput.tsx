import { FC, InputHTMLAttributes } from "react";
import styles from './CstmInput.module.css'

interface CstmInputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder?: string;
    value?: string;
}

export const CstmInput: FC<CstmInputProps> = ({ placeholder, value, ...props }) => {
    return (
        <input 
            type="text"
            className={styles.cstmInput} 
            placeholder={placeholder} 
            value={value} 
            {...props}
        />
    )
}