import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm'
import CommentsContainer from '../../containers/CommentsContainer'
import LikesContainer from '../../containers/LikesContainer'

function Bulletin(props) {

  const [state, setState] = useState({
    user_id: props.currentUser,
    bulletin_id: props.bulletin.id
  });

const [toggleComments, setToggleComments] = useState(false);

const handleToggleComments = () =>{
  console.log("toggle Comments")
  setToggleComments(true)
}

let commentForm;

if (toggleComments) {
  commentForm = <div><CommentForm currentUser={props.currentUser}/><CommentsContainer bulletin={props.bulletin} /></div>
}

  // const handleLike = (e) => {
  //   e.preventDefault();
  //   // debugger
  //   props
  //     .updateBulletin(state)
  //     .then(() => {
  //
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  //
  // };


  return (
    <div class="panel">
      <div class="panel-body">
        <div class="media-block">
          <a class="media-left" href="#">{props.bulletin.featured_image ? <img src={props.bulletin.featured_image.url} alt="Profile Image" width="40" class="rounded-circle"/> : <img src='https://comotion.uw.edu/wp-content/uploads/2019/05/generic-profile.png' alt="Default Profile Image" width="40" class="rounded-circle"/>}</a>
          <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">{props.bulletin.user.first_name} {props.bulletin.user.last_name}</span><span class="date text-black-50"> {props.bulletin.created_at}</span></div>

          <div class="media-body">
            <p>{props.bulletin.bulletin}</p>
            <div class="pad-ver">
                <div class="bg-white">

                  <div class="d-flex flex-row-reverse">

                    <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">{props.bulletin.likes.length}</span></div>
                    <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span onClick={handleToggleComments} class="mt-2 text-right">{props.bulletin.comments.length} Comments</span></div>

                  </div>
                </div>

                <div class="bg-white">
                  <div class="d-flex flex-row fs-12">
                    <LikesContainer currentUser={props.currentUser} bulletin={props.bulletin} />
                    <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span onClick={handleToggleComments} class="ml-1">Comment</span></div>

                  </div>
                </div>

            </div>
            <hr/>
            {commentForm}
          </div>
        </div>
      </div>
    </div>


  )

}


export default Bulletin



// <div class="panel panel-default">
// <div class="panel-body">
//                <section class="post-heading">
//                     <div class="row">
//                         <div class="col-md-11">
//                             <div class="media">
//                               <div class="media-left">
//                                 <a href="#">
//                                   <img class="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="40" height="40" alt="..."/>
//                                 </a>
//                               </div>
//                               <div class="media-body">
//                                 <a href="#" class="anchor-username"><h4 class="media-heading">Bayu Darmantra</h4></a>
//                                 <a href="#" class="anchor-time">51 mins</a>
//                               </div>
//                             </div>
//                         </div>
//                          <div class="col-md-1">
//                              <a href="#"><i class="glyphicon glyphicon-chevron-down"></i></a>
//                          </div>
//                     </div>
//                </section>
//                <section class="post-body">
//                    <p>{props.bulletin.bulletin}</p>
//                </section>
//                <section class="post-footer">
//                    <hr/>
//                    <div class="post-footer-option container">
//                         <ul class="list-unstyled">
//                             <li><a href="#"><i class="glyphicon glyphicon-thumbs-up"></i> Like</a></li>
//                             <li><a href="#"><i class="glyphicon glyphicon-comment"></i> Comment</a></li>
//                             <li><a href="#"><i class="glyphicon glyphicon-share-alt"></i> Share</a></li>
//                         </ul>
//                    </div>
//                    <div class="post-footer-comment-wrapper">
//                        <div class="comment-form">
//                         <CommentForm currentUser={props.currentUser} bulletin={props.bulletin}/>
//                        </div>
//
//                        <CommentsContainer bulletin={props.bulletin} />
//
//                    </div>
//                </section>
//             </div>
//           </div>


// <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>


// <div class="profile-card gedf-card">
//  <div class="card-header">
//         <div class="d-flex justify-content-between align-items-center">
//             <div class="d-flex justify-content-between align-items-center">
//                 <div class="mr-2">
//                     <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="" />
//                 </div>
//                 <div class="ml-2">
//                     <div class="h5 m-0"></div>
//                     <div class="h7 text-muted">{props.bulletin.user.first_name} {props.bulletin.user.last_name}</div>
//                 </div>
//             </div>
//             <div>
//                 <div class="dropdown">
//                     <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                         <i class="fa fa-ellipsis-h"></i>
//                     </button>
//                     <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
//                         <div class="h6 dropdown-header">Configuration</div>
//                         <a class="dropdown-item" href="#">Save</a>
//                         <a class="dropdown-item" href="#">Hide</a>
//                         <a class="dropdown-item" href="#">Report</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//
//     </div>
//   <div class="profile-card-body">
//   <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>{props.bulletin.created_at}</div>
//
//   <p class="card-text">
//   {props.bulletin.bulletin}
//   </p>
//   </div>
//   <div class="profile-card-footer">
//      <a onClick={handleLike} class="card-link"><i class="fa fa-gittip"></i> Like</a>
//      <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
//   </div>
// </div>






// <div class="col-md-5">
//   <div class="panel panel-default">
//               <div class="panel-body">
//                  <section class="post-heading">
//                       <div class="row">
//                           <div class="col-md-11">
//                               <div class="media">
//                                 <div class="media-left">
//                                   <a href="#">
//                                     <img class="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="40" height="40" alt="..." />
//                                   </a>
//                                 </div>
//                                 <div class="media-body">
//                                   <a href="#" class="anchor-username"><h4 class="media-heading">Bayu Darmantra</h4></a>
//                                   <a href="#" class="anchor-time">51 mins</a>
//                                 </div>
//                               </div>
//                           </div>
//                            <div class="col-md-1">
//                                <a href="#"><i class="glyphicon glyphicon-chevron-down"></i></a>
//                            </div>
//                       </div>
//                  </section>
//                  <section class="post-body">
//                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
//                      turpis sem, dictum id bibendum eget, malesuada ut massa. Ut scel
//                      erisque nulla sed luctus dapibus. Nulla sit amet mi vitae purus sol
//                      licitudin venenatis. Praesent et sem urna. Integer vitae lectus nis
//                      l. Fusce sapien ante, tristique efficitur lorem et, laoreet ornare lib
//                      ero. Nam fringilla leo orci. Vivamus semper quam nunc, sed ornare magna dignissim sed. Etiam interdum justo quis risus
//                      efficitur dictum. Nunc ut pulvinar quam. N
//                      unc mollis, est a dapibus dignissim, eros elit tempor diam, eu tempus quam felis eu velit.</p>
//                  </section>
//                  <section class="post-footer">
//                      <hr/>
//                      <div class="post-footer-option container">
//                           <ul class="list-unstyled">
//                               <li><a href="#"><i class="glyphicon glyphicon-thumbs-up"></i> Like</a></li>
//                               <li><a href="#"><i class="glyphicon glyphicon-comment"></i> Comment</a></li>
//                               <li><a href="#"><i class="glyphicon glyphicon-share-alt"></i> Share</a></li>
//                           </ul>
//                      </div>
//                      <div class="post-footer-comment-wrapper">
//                          <div class="comment-form">
//
//                          </div>
//                          <div class="comment">
//                               <div class="media">
//                                 <div class="media-left">
//                                   <a href="#">
//                                     <img class="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="32" height="32" alt="..." />
//                                   </a>
//                                 </div>
//                                 <div class="media-body">
//                                   <a href="#" class="anchor-username"><h4 class="media-heading">Media heading</h4></a>
//                                   <a href="#" class="anchor-time">51 mins</a>
//                                 </div>
//                               </div>
//                          </div>
//                      </div>
//                  </section>
//               </div>
//           </div>
//           </div>
