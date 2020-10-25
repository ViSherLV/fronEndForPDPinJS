import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height:"200px",
    maxWidth: 360,
    margin:'0 auto',
    overflowY:'scroll',
    whiteSpace:'nowrap',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxList({data, checkedAll}) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    console.log(`value`, value)
    
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    console.log(`newChecked`, newChecked)
    setChecked(newChecked);
  };

  return (
    <List className={classes.root} >
      {data&&data.length? data.map((value) => {
        const labelId = `checkbox-list-label-${value.number}`;

        return (
          <ListItem key={value.number} role={undefined} dense button onClick={handleToggle(value.number)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checkedAll?true:checked.indexOf(value.number) !== -1}
                tabIndex={-1}
                defaultChecked={true}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`Line item ${value.number}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      }):<h1>Номерів немає</h1>}
    </List>
  );
}
