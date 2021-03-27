import React, { useState, useEffect } from 'react';

function BulletinForm(props) {

  const [state, setState] = useState({
    bulletin: "",
    user_id: props.currentUser.id
  });

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props
      .createBulletin(state)
      .then(() => {
        // setLoading(true);
      })
      .catch((error) => {
        alert(error);
      });
    setState({
      bulletin: ""
    })
  };


  return (
    <div class="panel">
        <div class="panel-body">
          <textarea class="form-control" name="bulletin" rows="2" onChange={handleOnChange} placeholder="Post a Bulletin!"></textarea>
          <div class="mar-top clearfix">
            <button class="btn btn-sm btn-primary pull-right" onClick={onSubmit} type="submit"><i class="fa fa-pencil fa-fw"></i> Share</button>
            <a class="btn btn-trans btn-icon fa fa-video-camera add-tooltip" href="#"></a>
            <a class="btn btn-trans btn-icon fa fa-camera add-tooltip" href="#"></a>
            <a class="btn btn-trans btn-icon fa fa-file add-tooltip" href="#"></a>
          </div>
        </div>
      </div>


  )

}


export default BulletinForm
