import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
// import InboxIcon from "@material-ui/icons/Inbox"
// import DraftsIcon from "@material-ui/icons/Drafts"
import EmailIcon from "@material-ui/icons/Email"
import DeleteIcon from "@material-ui/icons/Delete"
import ErrorIcon from "@material-ui/icons/Error"
import EditIcon from "@material-ui/icons/Edit"
import SaveIcon from '@material-ui/icons/Save';
// import logo from "./logo.png"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
  },
  dividerColor: {
    backgroundColor: "#aaaaaa",
  },
  selectedItemStyle: {
    color: "#fb6949",
    backgroundColor: "#c9fdff",
  },
  listItemText: {
    fontSize: '20px',
  }
}))
// const headerStyle = {
//   background: "#c9fdff",
//   color: "#000000",
//   textAlign: "center",
//   padding: "1px",
//   fontFamily: "Ariel, sans-serif",
//   border: "1px solid #aaaaaa",
// }

function SideNav() {
  const classes = useStyles()
  const page = (window.location.pathname).substring(1)
  console.log(page)
  const [selectedIndex, setSelectedIndex] = React.useState(page)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <React.Fragment>
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          <Divider className={classes.dividerColor} />
          <ListItem
            component={Link}
            to="/new"
            button
            classes={{ selected: classes.selectedItemStyle }}
            selected={selectedIndex === 'new'}
            onClick={(event) => handleListItemClick(event, 'new')}
          >
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText classes={{primary:classes.listItemText}} primary="NewMessage" />
          </ListItem>
          <Divider className={classes.dividerColor} />
          <ListItem
            component={Link}
            to="/"
            button
            classes={{ selected: classes.selectedItemStyle }}
            selected={selectedIndex === 'inbox'}
            onClick={(event) => handleListItemClick(event, 'inbox')}
          >
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText classes={{primary:classes.listItemText}} primary="Inbox" />
          </ListItem>
          <Divider className={classes.dividerColor} />
          <ListItem
            component={Link}
            to="/trash"
            classes={{ selected: classes.selectedItemStyle }}
            button
            selected={selectedIndex === 'trash'}
            onClick={(event) => handleListItemClick(event, 'trash')}
          >
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText classes={{primary:classes.listItemText}} primary="Trash" />
          </ListItem>
          <Divider className={classes.dividerColor} />
          <ListItem
            component={Link}
            to="/spam"
            classes={{ selected: classes.selectedItemStyle }}
            button
            selected={selectedIndex === 'spam'}
            onClick={(event) => handleListItemClick(event, 'spam')}
          >
            <ListItemIcon>
              <ErrorIcon />
            </ListItemIcon>
            <ListItemText classes={{primary:classes.listItemText}} primary="Spam" />
          </ListItem>
          <Divider className={classes.dividerColor} />
          <ListItem
            component={Link}
            to="/drafts"
            classes={{ selected: classes.selectedItemStyle }}
            button
            selected={selectedIndex === 'drafts'}
            onClick={(event) => handleListItemClick(event, 'drafts')}
          >
            <ListItemIcon>
              <SaveIcon />
            </ListItemIcon>
            <ListItemText classes={{primary:classes.listItemText}} primary="Saved Drafts" />
          </ListItem>
          <Divider className={classes.dividerColor} />
        </List>
      </div>
    </React.Fragment>
  )
}

export default SideNav
