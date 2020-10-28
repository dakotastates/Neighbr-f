import React from 'react'
import SearchContainer from "../../containers/SearchContainer";
import Account from "./Account";

function Header(props) {
  const { user } = props;

  return (
    <div>
    <h1>Header</h1>
    <h2>Welcome {user.firstName}</h2>
    <SearchContainer />
    <Account />
    </div>
  )

}

export default Header
