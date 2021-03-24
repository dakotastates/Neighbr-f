import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PublicIcon from '@material-ui/icons/Public';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';
// import ChatProfileContainer from '../containers/ChatProfileContainer'
// import { connect } from "react-redux";
import IconButton from '@material-ui/core/IconButton';
// import BulletinsContainer from '../../containers/BulletinsContainer'
import ProfilePostCard from '../profile/ProfilePostCard'
import ProfilePostForm from '../profile/ProfilePostForm'
import BulletinExample from '../bulletin/BulletinExample'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function GlobalChatModal(props) {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  //
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div class="col-md-8 col-xl-6 chat">
      <div class="card"  >
        <div class="card-header msg_head">
          Global Chat
        </div>
        <div class="card-body msg_card_body">
          <div class="bg-white shadow rounded overflow-hidden">
            <ProfilePostForm currentUser={props.currentUser}/>
            <BulletinExample />
          </div>
        </div>
        <div class="card-footer">
        Footer
        </div>
      </div>
    </div>
  );


  return (
    <div>

    <IconButton color="inherit" aria-label="open drawer" edge="end"  onClick={handleOpen}>
      {open ? <PublicIcon />:<PublicTwoToneIcon />}
    </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   modalController: state.modalStore,
// });

export default GlobalChatModal

// <ProfilePostCard />
