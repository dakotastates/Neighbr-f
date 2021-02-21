import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';


const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function ConversationsList(props) {

  return (
    <StyledMenuItem>
      <ListItemIcon>
        <Avatar>{props.conversation.receiver.first_name.charAt(0)}</Avatar>
      </ListItemIcon>
      <ListItemText primary={props.conversation.receiver.first_name} secondary={props.conversation.messages.slice(-1)[0].body}/>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
    </StyledMenuItem>
  )

}


export default ConversationsList;



// <ul class="dropdown-menu">
//
//
//
//           <li class="notification-box">
//             <div class="row">
//               <div class="col-lg-3 col-sm-3 col-3 text-center">
//                 <img src="/demo/man-profile.jpg" class="w-50 rounded-circle"/>
//               </div>
//               <div class="col-lg-8 col-sm-8 col-8">
//                 <strong class="text-info">David John</strong>
//                 <div>
//                   Lorem ipsum dolor sit amet, consectetur
//                 </div>
//                 <small class="text-warning">27.11.2015, 15:00</small>
//               </div>
//             </div>
//           </li>
//           <li class="notification-box bg-gray">
//             <div class="row">
//               <div class="col-lg-3 col-sm-3 col-3 text-center">
//                 <img src="/demo/man-profile.jpg" class="w-50 rounded-circle"/>
//               </div>
//               <div class="col-lg-8 col-sm-8 col-8">
//                 <strong class="text-info">David John</strong>
//                 <div>
//                   Lorem ipsum dolor sit amet, consectetur
//                 </div>
//                 <small class="text-warning">27.11.2015, 15:00</small>
//               </div>
//             </div>
//           </li>
//           <li class="notification-box">
//             <div class="row">
//               <div class="col-lg-3 col-sm-3 col-3 text-center">
//                 <img src="/demo/man-profile.jpg" class="w-50 rounded-circle"/>
//               </div>
//               <div class="col-lg-8 col-sm-8 col-8">
//                 <strong class="text-info">David John</strong>
//                 <div>
//                   Lorem ipsum dolor sit amet, consectetur
//                 </div>
//                 <small class="text-warning">27.11.2015, 15:00</small>
//               </div>
//             </div>
//           </li>
//           <li class="footer bg-dark text-center">
//             <a href="" class="text-light">View All</a>
//           </li>
//
// </ul>
