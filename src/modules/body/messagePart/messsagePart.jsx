import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import axios from "axios";
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'

export default function RightPart() {
    const usersFetched = useSelector(state => state.fetchUsersData.users);
    const chooseUsers = useSelector(state => state.fetchUsersData.choosenUsers);
    const [message, setMessage] = useState('');
    console.log(`chooseUsers`, chooseUsers)
    console.log(`usersInAnotherBlock`, usersFetched)
    const userFoMessaging = [];
    usersFetched.forEach((item) => {
        userFoMessaging.push(item.chatId)
    })
    function textAreaChange(e) {
        setMessage(e.target.value)

    }
    function sendMessage() {
        const encodeMessage = encodeURI(message)
        console.log(`messaga`, message)
        console.log(`encodeMessage`, encodeMessage)
        for (let user of chooseUsers) {
            const route = `https://api.telegram.org/bot1268971736:AAHS6Gyr_KQDZQlxS8LqPH2cA9cu4a_qbks/sendMessage?chat_id=${user}&text=${encodeMessage}`;
            axios.get(route)
        }

    }

    return (
        <div style={styles.main}>
            <h3>Введіть повідомлення для розсилки</h3>
            <div>
                <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" style={styles.textArea} onChange={(e) => { textAreaChange(e) }} />
            </div>
            <Button variant="contained" color="primary" size='large' disabled={false} onClick={sendMessage}>
                Send messages
            </Button>
        </div>
    )
}