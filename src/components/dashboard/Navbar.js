import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";
import ConversationsContainer from '../../containers/ConversationsContainer'


// const useStyles = makeStyles((theme) => ({
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
//   sectionDesktop: {
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'flex',
//     },
//   },
//   sectionMobile: {
//     display: 'flex',
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
// }));

export default function Navbar(props) {

return(
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <form class="form-inline">
     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
     <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
   </form>
    <a class="navbar-brand" href="#">Navbar</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-bell"></i>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <ConversationsContainer />
          </div>
        </li>
      </ul>
    </div>
  </nav>
)

  // const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  //
  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  //
  // const history = useHistory();
  //
  // function handleHomeClick() {
  //   history.push("/");
  // }
  //
  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  //
  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };
  //
  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };
  //
  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };
  //
  // const handleLogout = () =>{
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  //   props.handleLogout()
  //
  // }
  //
  // const menuId = 'primary-search-account-menu';
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //     <MenuItem onClick={handleLogout}>Logout</MenuItem>
  //   </Menu>
  // );
  //
  // const mobileMenuId = 'primary-search-account-menu-mobile';
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton aria-label="show 4 new mails" color="inherit">
  //         <Badge badgeContent={4} color="secondary">
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton aria-label="show 11 new notifications" color="inherit">
  //         <Badge badgeContent={11} color="secondary">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );
  //
  // return (
  //   <div className={classes.grow}>
  //     <AppBar position="static">
  //       <Toolbar>
  //         <IconButton
  //           edge="start"
  //           className={classes.menuButton}
  //           color="inherit"
  //           aria-label="open drawer"
  //         >
  //           <MenuIcon />
  //         </IconButton>
  //         <Typography className={classes.title} variant="h6" noWrap>
  //           The Neighborhood
  //         </Typography>
  //         <div className={classes.search}>
  //           <div className={classes.searchIcon}>
  //             <SearchIcon />
  //           </div>
  //           <InputBase
  //             placeholder="Search…"
  //             classes={{
  //               root: classes.inputRoot,
  //               input: classes.inputInput,
  //             }}
  //             inputProps={{ 'aria-label': 'search' }}
  //           />
  //         </div>
  //         <IconButton  color="inherit" onClick={handleHomeClick}>
  //           <HomeIcon />
  //         </IconButton>
  //         <div className={classes.grow} />
  //         <div className={classes.sectionDesktop}>
  //           <IconButton aria-label="show 4 new mails" color="inherit">
  //             <Badge badgeContent={4} color="secondary">
  //               <MailIcon />
  //             </Badge>
  //           </IconButton>
  //           <IconButton aria-label="show 17 new notifications" color="inherit">
  //             <Badge badgeContent={17} color="secondary">
  //               <NotificationsIcon />
  //             </Badge>
  //           </IconButton>
  //           <IconButton
  //             edge="end"
  //             aria-label="account of current user"
  //             aria-controls={menuId}
  //             aria-haspopup="true"
  //             onClick={handleProfileMenuOpen}
  //             color="inherit"
  //           >
  //             <AccountCircle />
  //           </IconButton>
  //         </div>
  //         <div className={classes.sectionMobile}>
  //           <IconButton
  //             aria-label="show more"
  //             aria-controls={mobileMenuId}
  //             aria-haspopup="true"
  //             onClick={handleMobileMenuOpen}
  //             color="inherit"
  //           >
  //             <MoreIcon />
  //           </IconButton>
  //         </div>
  //       </Toolbar>
  //     </AppBar>
  //     {renderMobileMenu}
  //     {renderMenu}
  //
  //   </div>
  // );
}
