import React, { useState, useEffect } from 'react';
import CheckboxList from '../../../components/list/list'
import Button from '@material-ui/core/Button'
import {styles} from './styles'

export default function UsersPart() {
    const [dataForList, setList] = useState({});
    const [checkedAll, setCheckedAll] = useState(false);
    let a;
    useEffect(async () => {
        
         fetch('http://localhost:3001/users')
         .then(response => response.json())
            .then(result => {console.log(result); setList(result)})
            .catch(e => console.log(e));
        
      }, []);
      console.log(`response1`, dataForList)
      const users = [];
      if(dataForList&&dataForList.length){
        dataForList.forEach(function(item){
            users.push({number:item.phoneNumber, chatId:item.chatId})
        })
      }
    return(
        <div style={styles.main}>
            <h3>Оберіть номера для розсилки</h3>
            <CheckboxList data={users} checkedAll={checkedAll}></CheckboxList>
            <Button variant="contained" color="primary" size='large' disabled = {false} onClick={() => { setCheckedAll(!checkedAll) }}>
                Choose all
            </Button>
        </div>
    )
}