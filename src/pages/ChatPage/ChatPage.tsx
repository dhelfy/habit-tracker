import { Header } from "./ui/Header/Header"
import styles from "./ChatPage.module.css"
import { Message } from "./ui/Message/Message"
import { useState } from "react"

export const ChatPage = () => {
    let [value, setValue] = useState("")
    let [messages, setMessages] = useState<{text: string, avatarURL: "/icons/male1.png"}[]>([])

    const onSend = () => {
        setMessages([...messages, {text: value, avatarURL: "/icons/male1.png"}])
        setValue("")
    }

    return (
        <div className={styles.chatPage}>
            <Header />
            {
                messages.map((msg) => {
                    return (
                        <Message text={msg.text} avatarURL={msg.avatarURL}/>
                    )
                })
            }
            <div className={styles.inputContainer}>
                <input 
                    value={value} 
                    onChange={(e) => setValue(e.currentTarget.value)}
                    className={styles.input}
                    placeholder="Сообщение..."
                    onKeyDown={(e) => {if (e.key === 'Enter') onSend()}}
                />
            </div>
        </div>
    )
}