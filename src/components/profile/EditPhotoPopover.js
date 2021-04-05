import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import NeighborshipsContainer from '../../containers/NeighborshipsContainer'
import EditProfileImage from './EditProfileImage'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function EditPhotoPopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>


      <span onClick={handleClick}>
        <div>{props.selectedUser.featured_image ? <img src={props.selectedUser.featured_image.url} alt={props.selectedUser.profile.first_name} width="130" class="rounded mb-2 img-thumbnail"/> : <img src='https://comotion.uw.edu/wp-content/uploads/2019/05/generic-profile.png' alt={props.selectedUser.profile.first_name} width="130" class="rounded mb-2 img-thumbnail"/>}</div>
      </span>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}><EditProfileImage updateProfileImage={props.updateProfileImage} selectedUser={props.selectedUser} profile={props.profile} toggle={props.toggle} /></Typography>
      </Popover>
    </div>
  );
}
