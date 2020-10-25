import React from 'react';
import UsersPart from './usersPart/usersPart'
import MessagePart from './messagePart/messsagePart'
import {styles} from './styles'
export default function Body() {


    return(
        <div style={styles.main}>
           <UsersPart/>
           <MessagePart/>
        </div>
    )
}