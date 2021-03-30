import React, { useState, useEffect } from 'react';




function CreateNeighborship(props) {

  const [state, setState] = useState({
    id: null,
    user_id: props.currentUser.id,
    neighbor_id: props.selectedUser.id,

  });



  const [neighborship, setNeighborship] = useState(false);

  const handleFollow = (e) =>{
    e.preventDefault()

    props
      .createNeighborship(state)
      .then(()=>{
        setNeighborship(!neighborship)
        // console.log(props.bulletin.likes)
      })
      .catch(()=>{

      })
  }

  const handleUnfollow = (e) =>{
    e.preventDefault()

    const neighborshipId = props.neighborships.reduce((acc, current) => {if((current.user.id === props.currentUser.id)&& (current.neighbor.id === props.selectedUser.id)) {return current.id}}, [])

    state.id = neighborshipId

    props
      .deleteNeighborship(state)
      .then(()=>{
        setNeighborship(!neighborship)
        state.id = null

      })
      .catch(()=>{

      })
  }

  useEffect(() => {
  props.neighborships.map(neighbor =>{
    // debugger
      if((neighbor.user.id === props.currentUser.id) && (neighbor.neighbor.id === props.selectedUser.id)){
        console.log(neighborship)
        setNeighborship(true)
        console.log(neighborship)
        // console.log(props.bulletin.likes)
      }
    })

  }, [neighborship]);




  let followBtn;



  if (props.currentUser.id != props.selectedUser.id){
    if (neighborship){
      // debugger
      followBtn = <span onClick={handleUnfollow} class="btn btn-outline-light btn-sm btn-block">Unfollow</span>
    }else {
      followBtn = <span  onClick={handleFollow} class="btn btn-outline-light btn-sm btn-block">Follow</span>
    }
  }
  return(

    <div >
    {followBtn}
    </div>

  )
}

export default CreateNeighborship;
