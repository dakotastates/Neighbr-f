import React from 'react'


function Message(props) {


const { message, user } = props;

        return(
            <div>
              <h1>{message.message}</h1>
            </div>
        )

}


export default Message;
