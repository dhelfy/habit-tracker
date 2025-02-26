import { FC } from "react";
import styles from './CstmInput.module.css'

interface CstmInputProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export const CstmInput: FC<CstmInputProps> = ({ placeholder, value, onChange }) => {
    return (
        <input 
            type="text"
            className={styles.cstmInput} 
            placeholder={placeholder} 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
        />
    )
}