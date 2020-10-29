import React, { useEffect } from 'react'
import CommunityBoardInput from "../components/community/CommunityBoardInput";
import CommunityBoardMessages from "../components/community/CommunityBoardMessages";
import { connect } from "react-redux";
import { storeBoardMessages, createBoardMessage } from "../actions/BoardMessageActions";



function CommunityBoardContainer(props) {
  useEffect(() => {
    props
    .storeBoardMessages();
    // .catch((error) => {
    //   alert(error);
    // });
  }, []);

  const { boardMessages, createBoardMessage } = props;
  // debugger

  return (
    <div>
      <CommunityBoardInput createBoardMessage={createBoardMessage}/>
      <CommunityBoardMessages boardMessages = {boardMessages}/>
    </div>
  )

}

const mapStateToProps = (state) => ({
  boardMessages: state.boardMessageStore.messages,
});

export default connect(mapStateToProps, { storeBoardMessages, createBoardMessage })(CommunityBoardContainer);
