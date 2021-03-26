import React, { useState, useEffect } from 'react';

function BulletinForm(props) {


  return (
    <div class="panel">
        <div class="panel-body">
          <textarea class="form-control" rows="2" placeholder="What are you thinking?"></textarea>
          <div class="mar-top clearfix">
            <button class="btn btn-sm btn-primary pull-right" type="submit"><i class="fa fa-pencil fa-fw"></i> Share</button>
            <a class="btn btn-trans btn-icon fa fa-video-camera add-tooltip" href="#"></a>
            <a class="btn btn-trans btn-icon fa fa-camera add-tooltip" href="#"></a>
            <a class="btn btn-trans btn-icon fa fa-file add-tooltip" href="#"></a>
          </div>
        </div>
      </div>


  )

}


export default BulletinForm
