import { FC } from 'react'
import styles from './AddButton.module.css'

interface AddButtonProps {
    onClick: () => void
    className?: string
}   

export const AddButton: FC<AddButtonProps> = ({ onClick, className }) => {
    return (
        <button className={`${styles.addButton} ${className}`} onClick={onClick}>
            +
        </button>
    )
}
