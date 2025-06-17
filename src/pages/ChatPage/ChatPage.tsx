import { Header } from "./ui/Header/Header"
import styles from "./ChatPage.module.css"
import { Message } from "./ui/Message/Message"
import { useEffect, useState } from "react"
import { instance } from "../../API/axiosInstance"

export const ChatPage = () => {
    let [value, setValue] = useState("")
    let [messages, setMessages] = useState<{ text: string, senderId: string, timestamp: string }[]>([])

    const onSend = async () => {
        try {
            const response = await instance.post(
                "api/chat/send_message/chat_smoking",
                {
                    senderId: 1,
                    timestamp: "anytime",
                    text: value
                }
            )

            if (response.status === 200) {
                console.log("ok")
                setValue("")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await instance.get("api/chat/get_messages/chat_smoking");
                console.log(response.data);
                setMessages(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMessages();
        const intervalId = setInterval(fetchMessages, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.chatPage}>
            <Header />
            {
                messages.map((msg, index) => {
                    return (
                        <Message text={msg.text} senderId={msg.senderId} key={index}/>
                    )
                })
            }
            <div className={styles.inputContainer}>
                <input
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                    className={styles.input}
                    placeholder="Сообщение..."
                    onKeyDown={(e) => { if (e.key === 'Enter') onSend() }}
                />
            </div>
        </div>
    )
}