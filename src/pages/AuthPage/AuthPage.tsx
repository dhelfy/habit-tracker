import { FC } from "react";
import styles from './AuthPage.module.css'
import { CstmInput } from "../../shared/ui/CstmInput/CstmInput";
import { useNavigate } from "react-router-dom";

export const AuthPage: FC = () => {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/profile');
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.form}>
        <h1 className={styles.title}>Log in</h1>
        <img 
          src="./icons/leaderboard_icon.png" 
          alt="leaderboard_icon" 
          className={styles.icon}
        />
        <CstmInput placeholder="Login" />
        <CstmInput placeholder="Password" />
        <button className={styles.button} onClick={handleClick}>Продолжить</button>
      </div>
    </div>
  )
}
