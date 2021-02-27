import React from 'react';
import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import UsersDrawer from './UsersDrawer'
// import RightDrawer from './RightDrawer'
// import ForumIcon from '@material-ui/icons/Forum';
// import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// // import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// // import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import AccountMenu from './AccountMenu'
// import MessagesMenu from './MessagesMenu'
// import NotificationsMenu from './NotificationsMenu'
// import {accountsMenu, notificationsMenu, messagesMenu} from './MenuActions'
// import MenuTemplate from './MenuTemplate'
import MessagesMenu from './MessagesMenu'
import AccountMenu from './AccountMenu'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarShiftRight: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  menuButton: {
    marginRight: 36,
  },
  // menuButtonRight: {
  //   marginLeft: 36,
  // },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function AppBarHeader(props) {
  // debugger
  const classes = useStyles();
  const theme = useTheme();
  const [openUsersDrawer, setOpenUsersDrawer] = React.useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const isMenuOpen = Boolean(anchorEl);

  const handleUsersDrawerOpen = () => {
    setOpenUsersDrawer(true);
  };

  const handleUsersDrawerClose = () => {
    setOpenUsersDrawer(false);
  };



  // const handleMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  //
  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };
  //
  // const menuId = 'primary-search-account-menu';
  // const renderMenu = (
  //
  //     <AppBarMenu menuId={menuId} handleMenuClose={handleMenuClose} anchorEl={anchorEl}/>
  // );

  return (
    <div className={classes.root}>
    <CssBaseline />
    <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: openUsersDrawer,})} >
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" onClick={handleUsersDrawerOpen} edge="start" className={clsx(classes.menuButton, {[classes.hide]: openUsersDrawer,})}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>The NeighborHood</Typography>

        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
        <MessagesMenu />
        <AccountMenu handleLogout={props.handleLogout}/>
        </div>
      </Toolbar>
    </AppBar>

    <UsersDrawer handleDrawerOpen={handleUsersDrawerOpen} handleDrawerClose={handleUsersDrawerClose} open={openUsersDrawer}/>

    </div>
  );
}


//
// <IconButton name="messages"aria-label="show 4 new mails" color="inherit" onClick={handleMenuOpen}>
//   <MailIcon />
// </IconButton>
