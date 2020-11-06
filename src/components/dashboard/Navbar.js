import React from 'react'
import { NavLink } from 'react-router-dom';


function Navbar(props) {

  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

    const { handleLogout } = props;

  return(
    <div>
    <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>
      <NavLink
          to="/map"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'darkblue'
          }}
        >Map</NavLink>
      <NavLink
          to="/messages"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'darkblue'
          }}
        >Messages</NavLink>
        <NavLink
            to={`/profile/${props.user.id}`}
            /* set exact so it knows to only set activeStyle when route is deeply equal to link */
            exact
            /* add styling to Navlink */
            style={link}
            /* add prop for activeStyle */
            activeStyle={{
              background: 'darkblue'
            }}
          >Profile</NavLink>
      <NavLink
          to="/about"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'darkblue'
          }}
        >About</NavLink>
        <NavLink
          to="/"

          onClick={handleLogout}
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'darkblue'
          }}
        >Logout</NavLink>

    </div>

  )
}

export default Navbar;
