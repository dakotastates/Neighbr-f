import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
// import {accountsMenu, notificationsMenu, messagesMenu} from './MenuActions'


const useStyles = makeStyles((theme) => ({
  customWidth: {
      '& div': {
          // this is just an example, you can use vw, etc.
          width: '350px',
      }
  }

}));

export default function AppBarMenu(props) {
// debugger
  let menuItems

if (props.anchorEl){
  if(props.anchorEl.name === "account"){
    menuItems = "Account"
  } else if (props.anchorEl.name === "messages"){
    menuItems = (
      <div>
        <MenuItem onClick={props.handleMenuClose}>Message 1</MenuItem>
        <MenuItem onClick={props.handleMenuClose}>Message 2</MenuItem>
        <MenuItem onClick={props.handleMenuClose}>Message 3</MenuItem>
      </div>
      )
  }
}

  const classes = useStyles();
  return (

    <Menu
      anchorEl={props.anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      id={props.menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={Boolean(props.anchorEl)}
      onClose={props.handleMenuClose}
      className={classes.customWidth}
    >
    {menuItems}
    </Menu>

  );
}
