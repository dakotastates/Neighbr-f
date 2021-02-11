
import React, { useState } from 'react';
import ProfileNav from './ProfileNav'
import ProfileIntroCard from './ProfileIntroCard'
import ProfileSidePanel from './ProfileSidePanel'
import ProfilePostCard from './ProfilePostCard'
import ProfilePostForm from './ProfilePostForm'




function FullProfile() {
// debugger
  return(
  <div >
  <ProfileNav />

      <div class="container-fluid gedf-wrapper">
          <div class="row">
              <div class="col-md-3">
                <ProfileIntroCard />
              </div>
              <div class="col-md-6 gedf-main">
                  <ProfilePostForm />
                  <ProfilePostCard />
              </div>

              <div class="col-md-3">
              <ProfileSidePanel />
              </div>
          </div>
      </div>
  </div>
  )
}

export default FullProfile;



//
// <div class="jumbotron text-center" style="margin-bottom:0">
//   <h1>My First Bootstrap 4 Page</h1>
//   <p>Resize this responsive page to see the effect!</p>
// </div>
//
// <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="collapsibleNavbar">
//     <ul class="navbar-nav">
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//     </ul>
//   </div>
// </nav>
//
// <div class="container" style="margin-top:30px">
//   <div class="row">
//     <div class="col-sm-4">
//       <h2>About Me</h2>
//       <h5>Photo of me:</h5>
//       <div class="fakeimg">Fake Image</div>
//       <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
//       <h3>Some Links</h3>
//       <p>Lorem ipsum dolor sit ame.</p>
//       <ul class="nav nav-pills flex-column">
//         <li class="nav-item">
//           <a class="nav-link active" href="#">Active</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#">Disabled</a>
//         </li>
//       </ul>
//       <hr class="d-sm-none" />
//     </div>
//     <div class="col-sm-8">
//       <h2>TITLE HEADING</h2>
//       <h5>Title description, Dec 7, 2017</h5>
//       <div class="fakeimg">Fake Image</div>
//       <p>Some text..</p>
//       <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
//       <br />
//       <h2>TITLE HEADING</h2>
//       <h5>Title description, Sep 2, 2017</h5>
//       <div class="fakeimg">Fake Image</div>
//       <p>Some text..</p>
//       <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
//     </div>
//   </div>
// </div>
//
// <div class="jumbotron text-center" style="margin-bottom:0">
//   <p>Footer</p>
// </div>


// <div class="card gedf-card">
//     <div class="card-header">
//         <div class="d-flex justify-content-between align-items-center">
//             <div class="d-flex justify-content-between align-items-center">
//                 <div class="mr-2">
//                     <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="" />
//                 </div>
//                 <div class="ml-2">
//                     <div class="h5 m-0">@LeeCross</div>
//                     <div class="h7 text-muted">Miracles Lee Cross</div>
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
//     <div class="card-body">
//         <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i> 10 min ago</div>
//         <a class="card-link" href="#">
//             <h5 class="card-title"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur
//                 deserunt illo esse distinctio.</h5>
//         </a>
//
//         <p class="card-text">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis nihil, aliquam est, voluptates officiis iure soluta
//             alias vel odit, placeat reiciendis ut libero! Quas aliquid natus cumque quae repellendus. Lorem
//             ipsum dolor sit amet consectetur adipisicing elit. Ipsa, excepturi. Doloremque, reprehenderit!
//             Quos in maiores, soluta doloremque molestiae reiciendis libero expedita assumenda fuga quae.
//             Consectetur id molestias itaque facere? Hic!
//         </p>
//         <div>
//             <span class="badge badge-primary">JavaScript</span>
//             <span class="badge badge-primary">Android</span>
//             <span class="badge badge-primary">PHP</span>
//             <span class="badge badge-primary">Node.js</span>
//             <span class="badge badge-primary">Ruby</span>
//             <span class="badge badge-primary">Paython</span>
//         </div>
//     </div>
//     <div class="card-footer">
//         <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
//         <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
//         <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
//     </div>
// </div>













// <ProfileNav />
//
//     <div class="container-fluid gedf-wrapper">
//         <div class="row">
//
//             <ProfileIntroCard />
//             <div class="col-md-6 gedf-main">
//                 <ProfilePostForm />
//                 <ProfilePostCard />
//             </div>
//
//             <div class="col-md-3">
//             <ProfileSidePanel />
//             </div>
//         </div>
//     </div>
