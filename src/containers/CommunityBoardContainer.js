import React, { useEffect } from 'react'
import CommunityBoardInput from "../components/community/CommunityBoardInput";
import CommunityBoardMessages from "../components/community/CommunityBoardMessages";
import { connect } from "react-redux";
import { storeBoardMessages, createBoardMessage } from "../actions/BoardMessageActions";



function CommunityBoardContainer(props) {
  // debugger
  useEffect(() => {
    props
    .storeBoardMessages();
    // .catch((error) => {
    //   alert(error);
    // });
  }, []);

  const { boardMessages, createBoardMessage, user } = props;
  // debugger

  return (
    <div>
      <CommunityBoardInput createBoardMessage={createBoardMessage} user={user}/>
      <CommunityBoardMessages boardMessages = {boardMessages}/>
    </div>
  )

}

const mapStateToProps = (state) => ({
  boardMessages: state.boardMessageStore.messages,
  user: state.usersStore.user,
});

export default connect(mapStateToProps, { storeBoardMessages, createBoardMessage })(CommunityBoardContainer);
