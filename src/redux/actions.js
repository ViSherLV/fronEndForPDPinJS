import {CHOOSEN_USERS, FETCH_USERS, HIDE_LOADER, SHOW_LOADER} from './types';
export function showPreloader(){
    return {
        type: SHOW_LOADER
    }
}

export function hidePreloader(){
    return {
        type: HIDE_LOADER
    }
}
export function fetchUser(user){
    return async dispatch => {
        dispatch(showPreloader())
        const response = await fetch('http://localhost:3001/users');
        const json = await response.json();
        setTimeout(()=>{
            dispatch({type:FETCH_USERS, payload:json})
            dispatch(hidePreloader())
        }, 2000)
        
    }
}
export function saveChoosenUsers(payload){
        return {
            type: CHOOSEN_USERS,
            payload
        }
}

