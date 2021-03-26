import React, { useState, useEffect } from 'react';

function BulletinExample(props) {


  return (


    <div class="panel">
              <div class="panel-body">
              <div class="media-block">

              <a class="media-left" href="#"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /></a>
              <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">Marry Andrews</span><span class="date text-black-50">Shared publicly - Jan 2020</span></div>

                <div class="media-body">

                  <p>consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                  <div class="pad-ver">

                      <div class="bg-white">
                        <div class="d-flex flex-row fs-12">
                          <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                          <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                          <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
                        </div>
                    </div>

                  </div>
                  <hr/>


                  <div>
                    <div class="media-block">
                      <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar2.png"/></a>
                      <div class="media-body">
                        <div class="mar-btm">
                          <a href="#" class="btn-link text-semibold media-heading box-inline">Bobby Marz</a>
                          <p class="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i> - From Mobile - 7 min ago</p>
                        </div>
                        <p>Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        <div class="pad-ver">
                          <div class="bg-white">
                            <div class="d-flex flex-row fs-12">
                              <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                              <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                              <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
                            </div>
                          </div>
                        </div>
                        <hr/>
                      </div>
                    </div>

                    <div class="media-block">
                      <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
                      </a>
                      <div class="media-body">
                        <div class="mar-btm">
                          <a href="#" class="btn-link text-semibold media-heading box-inline">Lucy Moon</a>
                          <p class="text-muted text-sm"><i class="fa fa-globe fa-lg"></i> - From Web - 2 min ago</p>
                        </div>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate ?</p>
                        <div class="pad-ver">
                          <div class="bg-white">
                            <div class="d-flex flex-row fs-12">
                              <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                              <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                              <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
                            </div>
                          </div>
                        </div>
                        <hr/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div class="media-block pad-all">
                <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar1.png"/></a>
                <div class="media-body">
                  <div class="mar-btm">
                    <a href="#" class="btn-link text-semibold media-heading box-inline">John Doe</a>
                    <p class="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i> - From Mobile - 11 min ago</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <img class="img-responsive thumbnail" src="https://via.placeholder.com/400x300" alt="Image"/>
                  <div class="pad-ver">
                    <span class="tag tag-sm"><i class="fa fa-heart text-danger"></i> 250 Likes</span>
                    <div class="bg-white">
                      <div class="d-flex flex-row fs-12">
                          <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                          <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                          <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
                        </div>
                    </div>


                    <div class="bg-light p-2">
                        <div class="d-flex flex-row align-items-start"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /><textarea class="form-control ml-1 shadow-none textarea"></textarea></div>
                        <div class="mt-2 text-right"><button class="btn btn-primary btn-sm shadow-none" type="button">Post comment</button><button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></div>
                    </div>


                  </div>
                  <hr/>

                  <div>
                    <div class="media-block pad-all">
                      <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar2.png"/></a>
                      <div class="media-body">
                        <div class="mar-btm">
                          <a href="#" class="btn-link text-semibold media-heading box-inline">Maria Leanz</a>
                          <p class="text-muted text-sm"><i class="fa fa-globe fa-lg"></i> - From Web - 2 min ago</p>
                        </div>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate ?</p>
                        <div>
                          <div class="bg-white">
                            <div class="d-flex flex-row fs-12">
                              <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                              <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                              <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>





  )

}


export default BulletinExample



// <div class="d-flex justify-content-center row">
//     <div class="col-md-8">
//         <div class="d-flex flex-column comment-section">
//             <div class="bg-white p-2">
//                 <div class="d-flex flex-row user-info"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
//                     <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">Marry Andrews</span><span class="date text-black-50">Shared publicly - Jan 2020</span></div>
//                 </div>
//                 <div class="mt-2">
//                     <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                 </div>
//             </div>
//             <div class="bg-white">
//                 <div class="d-flex flex-row fs-12">
//                     <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
//                     <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
//                     <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
//                 </div>
//             </div>
//             <div class="bg-light p-2">
//                 <div class="d-flex flex-row align-items-start"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /><textarea class="form-control ml-1 shadow-none textarea"></textarea></div>
//                 <div class="mt-2 text-right"><button class="btn btn-primary btn-sm shadow-none" type="button">Post comment</button><button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></div>
//             </div>
//         </div>
//     </div>
// </div>







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
//                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
//                    turpis sem, dictum id bibendum eget, malesuada ut massa. Ut scel
//                    erisque nulla sed luctus dapibus. Nulla sit amet mi vitae purus sol
//                    licitudin venenatis. Praesent et sem urna. Integer vitae lectus nis
//                    l. Fusce sapien ante, tristique efficitur lorem et, laoreet ornare lib
//                    ero. Nam fringilla leo orci. Vivamus semper quam nunc, sed ornare magna dignissim sed. Etiam interdum justo quis risus
//                    efficitur dictum. Nunc ut pulvinar quam. N
//                    unc mollis, est a dapibus dignissim, eros elit tempor diam, eu tempus quam felis eu velit.</p>
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
//
//                        </div>
//                        <div class="comment">
//                             <div class="media">
//                               <div class="media-left">
//                                 <a href="#">
//                                   <img class="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="32" height="32" alt="..."/>
//                                 </a>
//                               </div>
//                               <div class="media-body">
//                                 <a href="#" class="anchor-username"><h4 class="media-heading">Media heading</h4></a>
//                                 <section class="post-body">
//                                     <p>Comment Testing</p>
//                                 </section>
//                                 <a href="#" class="anchor-time">51 mins</a>
//                               </div>
//                             </div>
//                        </div>
//
//                        <div class="comment">
//                             <div class="media">
//                               <div class="media-left">
//                                 <a href="#">
//                                   <img class="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="32" height="32" alt="..."/>
//                                 </a>
//                               </div>
//                               <div class="media-body">
//                                 <a href="#" class="anchor-username"><h4 class="media-heading">Media heading</h4></a>
//                                 <section class="post-body">
//                                     <p>Comment Testing 2</p>
//                                 </section>
//                                 <a href="#" class="anchor-time">51 mins</a>
//                               </div>
//                             </div>
//                        </div>
//                    </div>
//                </section>
//             </div>
//           </div>
