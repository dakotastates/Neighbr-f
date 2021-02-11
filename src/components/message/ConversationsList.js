import React from 'react'
// import Message from "./Message";


function ConversationsList(props) {

const { conversations} = props;
// debugger
const conversationsList = conversations.map(conversation => {
  // debugger
  return (<li>{conversation.receiver.first_name} - {conversation.messages.slice(-1)[0].body} - <button>X</button></li>)
});

        return(
          <ul class="dropdown-menu">


                
                    <li class="notification-box">
                      <div class="row">
                        <div class="col-lg-3 col-sm-3 col-3 text-center">
                          <img src="/demo/man-profile.jpg" class="w-50 rounded-circle"/>
                        </div>
                        <div class="col-lg-8 col-sm-8 col-8">
                          <strong class="text-info">David John</strong>
                          <div>
                            Lorem ipsum dolor sit amet, consectetur
                          </div>
                          <small class="text-warning">27.11.2015, 15:00</small>
                        </div>
                      </div>
                    </li>
                    <li class="notification-box bg-gray">
                      <div class="row">
                        <div class="col-lg-3 col-sm-3 col-3 text-center">
                          <img src="/demo/man-profile.jpg" class="w-50 rounded-circle"/>
                        </div>
                        <div class="col-lg-8 col-sm-8 col-8">
                          <strong class="text-info">David John</strong>
                          <div>
                            Lorem ipsum dolor sit amet, consectetur
                          </div>
                          <small class="text-warning">27.11.2015, 15:00</small>
                        </div>
                      </div>
                    </li>
                    <li class="notification-box">
                      <div class="row">
                        <div class="col-lg-3 col-sm-3 col-3 text-center">
                          <img src="/demo/man-profile.jpg" class="w-50 rounded-circle"/>
                        </div>
                        <div class="col-lg-8 col-sm-8 col-8">
                          <strong class="text-info">David John</strong>
                          <div>
                            Lorem ipsum dolor sit amet, consectetur
                          </div>
                          <small class="text-warning">27.11.2015, 15:00</small>
                        </div>
                      </div>
                    </li>
                    <li class="footer bg-dark text-center">
                      <a href="" class="text-light">View All</a>
                    </li>

          </ul>
              )

}


export default ConversationsList;
