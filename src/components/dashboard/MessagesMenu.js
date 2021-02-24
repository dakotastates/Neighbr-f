import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import ConversationsContainer from '../../containers/ConversationsContainer'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    width: '350px',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    // className={classes.customWidth}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     '&:focus': {
//       backgroundColor: theme.palette.primary.main,
//       '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);


export default function MessagesMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <IconButton name="messages"aria-label="show 4 new mails" color="inherit" onClick={handleClick}>
      <MailIcon />
    </IconButton>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <ConversationsContainer handleClose={handleClose} />
      </StyledMenu>
    </div>
  );
}




// <StyledMenuItem>
//   <ListItemIcon>
//     <SendIcon fontSize="small" />
//   </ListItemIcon>
//   <ListItemText primary="Sent mail" />
// </StyledMenuItem>
// <StyledMenuItem>
//   <ListItemIcon>
//     <DraftsIcon fontSize="small" />
//   </ListItemIcon>
//   <ListItemText primary="Drafts" />
// </StyledMenuItem>
// <StyledMenuItem>
//   <ListItemIcon>
//     <InboxIcon fontSize="small" />
//   </ListItemIcon>
//   <ListItemText primary="Inbox" />
// </StyledMenuItem>
