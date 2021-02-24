import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ChatProfileContainer from '../containers/ChatProfileContainer'
// import { connect } from "react-redux";

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

function ProfileChatModal(props) {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(false);
  //
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  //
  //
  //
  // const handleClose = () => {
  //   setOpen(false);
  // };
// debugger
  // if (true ){
  //   debugger
  //   setOpen(true)
  // } else {
  //   handleClose()
  // }

  // props.modalController ? setOpen(true) : setOpen(false)
// debugger
  const body = (
    <div class="col-md-8 col-xl-6 chat">
      <ChatProfileContainer currentUser={props.currentUser} selectedUser={props.selectedUser}/>
    </div>
  );
  // if (props.open){
    // debugger
  // }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
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

export default ProfileChatModal
