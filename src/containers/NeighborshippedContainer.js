import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { storeNeighborships } from "../actions/NeighborshipActions";
import CircularProgress from '@material-ui/core/CircularProgress';
// import Neighborship from '../components/profile/Neighborship'


function NeighborshippedContainer(props) {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  // const classes = useStyles();

  useEffect(() => {
    props
    .storeNeighborships()
    .then(() => {
      setLoading(true);

    })
    .catch((error) => {

      setError(error);
    });

  }, []);

  let neighborshippedList;
  if (loading === false){
        return(
          <div><CircularProgress /></div>
        )
      } else if (error){
        return(
          <div>Unable to Load Bulletins.</div>
        )
      } else{

  const filteredNeighborships = props.neighborships.filter(neighborship => neighborship.neighbor.id === props.selectedUser.id);
  if(filteredNeighborships.length > 0){

    neighborshippedList = filteredNeighborships.map(neighbor =>{
      return (
        <div>
            <h6>{neighbor.user.first_name} {neighbor.user.last_name}</h6>
        </div>
      )


    })
  }else{
    neighborshippedList = <h6>Not Neighborshipped</h6>
  }
}



return(
  <div>
  {neighborshippedList}

  </div>
)

}
const mapStateToProps = (state) => ({
  neighborships: state.neighborshipsStore.neighborships,

});

export default connect(mapStateToProps, {storeNeighborships})(NeighborshippedContainer);
