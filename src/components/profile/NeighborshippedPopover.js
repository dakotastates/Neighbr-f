import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NeighborshippedContainer from '../../containers/NeighborshippedContainer'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function NeighborshippedPopover(props) {
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
          <h5 class="font-weight-bold mb-0 d-block">{props.neighborships.filter(neighborship => neighborship.neighbor.id === props.selectedUser.id).length}</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Neighborshipped</small>
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
        <Typography className={classes.typography}><NeighborshippedContainer selectedUser={props.selectedUser} /></Typography>
      </Popover>
    </div>
  );
}


// <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
//   Open Popover
// </Button>
