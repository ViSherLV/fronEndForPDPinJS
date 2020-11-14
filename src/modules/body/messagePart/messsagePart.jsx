import React from 'react';
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import axios from "axios";
import {styles} from './styles'

export default function RightPart() {
       let message;
            function textAreaChange(e){
                message = e.target.value
                
                console.log(message)
            }
            function sendMessage(message){
                const route = 'https://api.telegram.org/bot1268971736:AAHS6Gyr_KQDZQlxS8LqPH2cA9cu4a_qbks/sendMessage?chat_id=1269497446&text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82';
                axios.get(route)

            }

    return(
        <div style={styles.main}>
            <h3>Введіть повідомлення для розсилки</h3>
            <div>
            <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" style={styles.textArea} onChange={(e)=>{textAreaChange(e)}} />
            </div>
            <Button variant="contained" color="primary" size='large' disabled = {false} onClick={sendMessage}>
                Send messages
            </Button>
        </div>
    )
}