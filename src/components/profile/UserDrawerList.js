import React, { useState, useEffect } from 'react'

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ProfileChatModal from '../../helpers/ProfileChatModal'



function UserDrawerList(props) {
  // const [selectedUser, setSelectedUser] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
    <ListItem button onClick={handleOpen}>
      <ListItemIcon>{props.selectedUser.profile.featured_image ? <Avatar alt={props.selectedUser.first_name} src={props.selectedUser.profile.featured_image.url}/> : <Avatar>{props.selectedUser.first_name.charAt(0)}</Avatar> }</ListItemIcon>
      <ListItemText primary={props.selectedUser.first_name} />
   </ListItem>
   <ProfileChatModal open={open} onClose={handleClose} currentUser={props.currentUser} selectedUser={props.selectedUser}/>

    </div>
  )

}


export default UserDrawerList;
