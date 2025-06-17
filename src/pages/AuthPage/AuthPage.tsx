import { FC, useState } from "react";
import styles from './AuthPage.module.css'
import { CstmInput } from "../../shared/ui/CstmInput/CstmInput";
import { useNavigate } from "react-router-dom";
import { instance } from "../../API/axiosInstance";
import { useDispatch } from "react-redux";
import { setUser, setUserID } from "../../state/slices/userSlice/userSlice";

export const AuthPage: FC = () => {
  const [login, setLogin] = useState("testLogin");
  const [password, setPassword] = useState("testPass");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleClick = async () => {
    try {
      const response = await instance.post("user/api/authUser", {
        login,
        password
      });
      
      if (response.status === 200) {
        dispatch(setUser({ user: login }));
        dispatch(setUserID({ id: response.data.userId }));

        window.localStorage.setItem('accessToken', response.data.accessToken)
        window.localStorage.setItem('refreshToken', response.data.refreshToken)
        
        navigate("/profile")
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        console.log("Неверный логин или пароль")
      }
    }
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.form}>
        <h1 className={styles.title}>Вход</h1>
        <img 
          src="./icons/leaderboard_icon.png" 
          alt="leaderboard_icon" 
          className={styles.icon}
        />
        <CstmInput placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)} />
        <CstmInput placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className={styles.button} onClick={handleClick}>Продолжить</button>
      </div>
    </div>
  )
}
