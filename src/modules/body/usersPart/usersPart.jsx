import React, { useState, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {connect} from 'react-redux';
import {fetchUser, saveChoosenUsers} from '../../../redux/actions'
import CheckboxList from '../../../components/list/list'
import Button from '@material-ui/core/Button'
import {styles} from './styles'
import CircularProgress from '@material-ui/core/CircularProgress';

const  UsersPart = (props) => {
    const [dataForList, setList] = useState({});
    const [checkedAll, setCheckedAll] = useState(false);
    const dispatch = useDispatch()
    const usersFetched = useSelector(state => state.fetchUsersData.users);
    let a;
    useEffect(async () => {
            dispatch(fetchUser())
      }, []);
    useEffect(async () => {
        setList(usersFetched);
  });
      const users = [];
      if(dataForList&&dataForList.length){
        dataForList.forEach(function(item){
            users.push({number:item.phoneNumber, chatId:item.chatId, name:item.name})
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

const mapStateToProps = ({fetchUsersData}) => {
    console.log(`newState`, )
    return {
        localUsers: fetchUsersData.users
    }
}
const mapDisparchToProps = {
    fetchUser, saveChoosenUsers
}

export default connect(mapStateToProps, mapDisparchToProps)(UsersPart);