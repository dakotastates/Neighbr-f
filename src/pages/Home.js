import React from 'react'
import { connect } from "react-redux";
import NeighborsBoardContainer from "../containers/NeighborsBoardContainer";
import ClosestNeighborsContainer from "../containers/ClosestNeighborsContainer";



function Home(props) {

        return(
            <div>

              <NeighborsBoardContainer />
              <ClosestNeighborsContainer />
            </div>
        )

}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
});

export default connect(mapStateToProps)(Home);
