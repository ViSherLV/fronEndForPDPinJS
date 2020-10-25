import React from 'react';
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {styles} from './styles'

export default function RightPart() {


    return(
        <div style={styles.main}>
            <h3>Введіть повідомлення для розсилки</h3>
            <div>
            <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" style={styles.textArea} onChange={(e)=>{console.log('lala')}} />
            </div>
            <Button variant="contained" color="primary" size='large' disabled = {false}>
                Send messages
            </Button>
        </div>
    )
}