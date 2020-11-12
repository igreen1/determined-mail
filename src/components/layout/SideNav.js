import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import EmailIcon from '@material-ui/icons/Email';
import DeleteIcon from '@material-ui/icons/Delete';
import ErrorIcon from '@material-ui/icons/Error';
import EditIcon from '@material-ui/icons/Edit';
import logo from './logo.png';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
  dividerColor: {
      backgroundColor: '#aaaaaa',
  },
  selectedItemStyle: {
      color: '#fb6949',
      backgroundColor: '#c9fdff',
  },
}));
const headerStyle = {
    background: '#c9fdff',
    color: '#000000',
    textAlign: 'center',
    padding: '1px',
    fontFamily: 'Ariel, sans-serif',
    border: '1px solid #aaaaaa',
}

export default function SideNav() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
      <React.Fragment>
          <header className='header' style={headerStyle}>
                <h1>Determined Mail</h1>

                <div className="logo">
                <img src={logo} alt='logo' height='80' width='80'/>
                </div>
            </header>
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
          <Divider className={classes.dividerColor}/>
      <ListItem
          component={Link} to="/newMessage"
          button
          classes={{selected: classes.selectedItemStyle}}
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="NewMessage" />
        </ListItem>
        <Divider className={classes.dividerColor} />
        <ListItem
          component={Link} to="/"
          button
          classes={{selected: classes.selectedItemStyle}}
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider className={classes.dividerColor} />
        <ListItem
          component={Link} to="/deleted"
          classes={{selected: classes.selectedItemStyle}}
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Deleted" />
        </ListItem>
        <Divider className={classes.dividerColor} />
        <ListItem
        component={Link} to="/spam"
        classes={{selected: classes.selectedItemStyle}}
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <ErrorIcon />
          </ListItemIcon>
          <ListItemText primary="Spam" />
        </ListItem>
        <Divider className={classes.dividerColor}/>
      </List>
      
    </div>
    </React.Fragment>
  );
}
