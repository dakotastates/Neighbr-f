import React from 'react'


function Message(props) {


const { message } = props;

        return(
            <div>
              {message.body}
            </div>
        )

}


export default Message;
