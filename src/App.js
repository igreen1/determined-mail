import React from 'react'

/* eslint-disable */
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Imports for old code - TBDeleted
// import Emails from "./components/Emails"
// import About from "./components/pages/About"
// import NewMessage from "./components/NewMessage"
// import Spam from "./components/Spam"
// import Deleted from "./components/Deleted"
// import ReadEmail from "./components/pages/ReadEmail"
// import SideNav from "./components/layout/SideNav"
// import { BsFillTrashFill } from "react-icons/bs"

import hardcodedEmails from './hardcodedEmails'
import EmailList from './components/EmailList'
import WriteEmail from './components/WriteEmail'
import useEmails from './useEmails'

import './App.css'

const App = () => {  // eslint-disable no-unused-vars 


  const {emails, setEmails, deleteEmail, selectEmail, 
      saveDraft, grabPage, selectedToDeleted, 
      selectedToSpam, selectedToInbox} = useEmails(hardcodedEmails)

  const spam = (
    <EmailList 
      emails={grabPage('spam')}
      deleteEmail={deleteEmail}
      selectEmail={selectEmail}
    />
  )

  return (
    <Router>
    <div className='app'>
      <div className='header'>
        {/* todo */}
      </div>
      <div className='sidebar'>
        {/* todo */}
      </div>
      <div className='email-viewport'>
        {/* The view email list pages */}
        <Route exact path="/">
          <EmailList 
            emails={grabPage('inbox')}
            deleteEmail={deleteEmail}
            selectEmail={selectEmail}/>
        </Route>
        <Route path='/spam'>
        <EmailList 
            emails={grabPage('spam')}
            deleteEmail={deleteEmail}
            selectEmail={selectEmail}/>
        </Route>
        <Route path='/trash'>
        <EmailList 
            emails={grabPage('deleted')}
            deleteEmail={deleteEmail}
            selectEmail={selectEmail}/>
        </Route>
        <Route path='/drafts'>
        <EmailList 
            emails={grabPage('draft')}
            deleteEmail={deleteEmail}
            selectEmail={selectEmail}/>
        </Route>
          {/* The write email page */}
        <Route exact path='/new'>
          <WriteEmail
            sendEmail={(newEmail) => console.log(newEmail)}
            saveDraft={saveDraft}
            />
        </Route>
        <Route path='/new/:id'>
          <WriteEmail 
              sendEmail={(newEmail) => console.log(newEmail)}
              saveDraft={saveDraft}
              emails={emails}
            />
        </Route>
      </div>
    </div>
    </Router>
  )

/*
  return (
    <Router>
      <WriteEmail 
        sendEmail={ (newEmail) => console.log(newEmail) } //just for debugging, no backend
        saveDraft
      />
      <EmailList
        emails={grabPage('inbox')}
        deleteEmail
        selectEmail
      />
    </Router>

  )
  */
}




export default App
//below is the old code

//   // Toggle Select All In Inbox
//   toggleSelectAllInInbox = () => {
//     this.state.allSelected = !this.state.allSelected
//     for (var i = 0; i < this.state.emails.length; i++) {
//       var email = this.state.emails[i]
//       email.selected = this.state.allSelected
//     }

//     this.setState({ emails: this.state.emails })
//   }

//   // Toggle Select All In Deleted
//   toggleSelectAllInDeleted = () => {
//     this.state.allSelected = !this.state.allSelected
//     for (var i = 0; i < this.state.deleted.length; i++) {
//       var email = this.state.deleted[i]
//       email.selected = this.state.allSelected
//     }
//     this.setState({ deleted: this.state.deleted })
//   }

//   // Toggle Select All In Spam
//   toggleSelectAllInSpam = () => {
//     this.state.allSelected = !this.state.allSelected
//     for (var i = 0; i < this.state.spam.length; i++) {
//       var email = this.state.spam[i]
//       email.selected = this.state.allSelected
//     }
//     this.setState({ spam: this.state.spam })
//   }

//   // Toggle Email Selected in Inbox
//   markSelected = (id) => {
//     this.setState({
//       emails: this.state.emails.map((email) => {
//         if (email.id === id && this.state.allSelected) {
//           email.selected = false
//           this.state.allSelected = false
//         }
//         if (email.id === id && !this.state.allSelected) {
//           email.selected = !email.selected
//         }
//         if (email.id === id && email.selected) {
//           this.state.allSelected = false
//         }
//         return email
//       }),
//     })
//   }

//   // Toggle Email Selected in Spam
//   markSelectedSpam = (id) => {
//     this.setState({
//       spam: this.state.spam.map((email) => {
//         if (email.id === id && this.state.allSelected) {
//           email.selected = false
//           this.state.allSelected = false
//         }
//         if (email.id === id && !this.state.allSelected) {
//           email.selected = !email.selected
//         }
//         if (email.id === id && email.selected) {
//           this.state.allSelected = false
//         }
//         return email
//       }),
//     })
//   }

//   // Toggle Email Selected In Deleted
//   markSelectedDeleted = (id) => {
//     this.setState({
//       deleted: this.state.deleted.map((email) => {
//         if (email.id === id && this.state.allSelected) {
//           email.selected = false
//           this.state.allSelected = false
//         }
//         if (email.id === id && !this.state.allSelected) {
//           email.selected = !email.selected
//         }
//         if (email.id === id && email.selected) {
//           this.state.allSelected = false
//         }
//         return email
//       }),
//     })
//   }

//   // Remove Email from Inbox if selected
//   removeIfSelected = () => {
//     this.setState((prevState) => {
//       prevState.deleted = [
//         ...prevState.deleted,
//         ...prevState.emails.filter((email) => email.selected),
//       ]
//       prevState.emails = prevState.emails.filter((email) => !email.selected)
//       prevState.deleted.map((email) => {
//         email.selected = false
//         return email
//       })
//       this.state.allSelected = false

//       return prevState
//     })
//   }

//   // Mark Spam if Email in Inbox is Selected
//   markSpamIfSelected = () => {
//     this.setState((prevState) => {
//       prevState.spam = [
//         ...prevState.spam,
//         ...prevState.emails.filter((email) => email.selected),
//       ]
//       prevState.emails = prevState.emails.filter((email) => !email.selected)
//       prevState.spam.map((email) => {
//         email.selected = false
//         return email
//       })
//       this.state.allSelected = false

//       return prevState
//     })
//   }

//   // Remove Email from deleted if selected
//   removeIfSelectedInDeleted = () => {
//     this.setState({
//       deleted: [...this.state.deleted.filter((email) => !email.selected)],
//     })
//     this.state.allSelected = false
//   }

//   // Remove Email from spam if selected
//   removeIfSelectedInSpam = () => {
//     this.setState((prevState) => {
//       prevState.deleted = [
//         ...prevState.deleted,
//         ...prevState.spam.filter((email) => email.selected),
//       ]
//       prevState.spam = prevState.spam.filter((email) => !email.selected)
//       prevState.deleted.map((email) => {
//         email.selected = false
//         return email
//       })
//       this.state.allSelected = false

//       return prevState
//     })
//   }

//   // Delete Email from Spam Folder
//   delSpam = (id) => {
//     this.setState({
//       deleted: [
//         ...this.state.deleted,
//         ...this.state.spam.filter((email) => email.id === id),
//       ],
//     })
//     this.setState({
//       spam: [...this.state.spam.filter((spam) => spam.id !== id)],
//     })
//   }

//   // Delete Email from Deleted Folder
//   delDeleted = (id) => {
//     this.setState({
//       deleted: [...this.state.deleted.filter((deleted) => deleted.id !== id)],
//     })
//   }

//   // Delete Email from Inbox
//   delEmail = (id) => {
//     this.setState({
//       deleted: [
//         ...this.state.deleted,
//         ...this.state.emails.filter((email) => email.id === id),
//       ],
//     })
//     this.setState({
//       emails: [...this.state.emails.filter((email) => email.id !== id)],
//     })
//   }

//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <div className="container">
//             <SideNav />
//             <div className="inbox">
//               <switch>
//                 <Route
//                   exact
//                   path="/"
//                   render={(props) => (
//                     <React.Fragment>
//                       <header className="page-header">
//                         Inbox
//                         <input
//                           className="select"
//                           type="checkbox"
//                           id="selectAll"
//                           checked={this.state.allSelected}
//                           onClick={this.toggleSelectAllInInbox}
//                         />{" "}
//                         <button
//                           className="discard-button"
//                           onClick={this.removeIfSelected}
//                         >
//                           Discard
//                         </button>
//                         <button
//                           className="mark-spam-button"
//                           onClick={this.markSpamIfSelected}
//                         >
//                           Mark as Spam
//                         </button>
//                       </header>
//                       <Emails
//                         emails={this.state.emails}
//                         markSelected={this.markSelected}
//                         delEmail={this.delEmail}
//                       />
//                     </React.Fragment>
//                   )}
//                 />
//                 <Route
//                   path="/spam"
//                   render={(props) => (
//                     <React.Fragment>
//                       <header className="page-header">
//                         Spam
//                         <input
//                           className="select"
//                           type="checkbox"
//                           id="selectAll"
//                           checked={this.state.allSelected}
//                           selected={this.state.allSelected}
//                           onClick={this.toggleSelectAllInSpam}
//                         />{" "}
//                         <button
//                           className="discard-button"
//                           onClick={this.removeIfSelectedInSpam}
//                         >
//                           Discard
//                         </button>
//                       </header>
//                       <Spam
//                         spam={this.state.spam}
//                         markSelectedSpam={this.markSelectedSpam}
//                         delSpam={this.delSpam}
//                       />
//                     </React.Fragment>
//                   )}
//                 />
//                 <Route
//                   path="/deleted"
//                   render={(props) => (
//                     <React.Fragment>
//                       <header className="page-header">
//                         Deleted
//                         <input
//                           className="select"
//                           type="checkbox"
//                           id="selectAll"
//                           checked={this.state.allSelected}
//                           selected={this.state.allSelected}
//                           onClick={this.toggleSelectAllInDeleted}
//                         />{" "}
//                         <button
//                           className="discard-button"
//                           onClick={this.removeIfSelectedInDeleted}
//                         >
//                           Discard
//                         </button>
//                       </header>
//                       <Deleted
//                         deleted={this.state.deleted}
//                         markSelectedDeleted={this.markSelectedDeleted}
//                         delDeleted={this.delDeleted}
//                       />
//                     </React.Fragment>
//                   )}
//                 />
//                 <Route
//                   path="/email/:id"
//                   render={(props) => (
//                     <React.Fragment>
//                       <ReadEmail emails={this.state.emails} />
//                     </React.Fragment>
//                   )}
//                 />
//                 <Route path="/about" component={About} />
//                 <Route path="/newMessage" component={NewMessage} />
//               </switch>
//             </div>
//           </div>
//         </div>
//       </Router>
//     )
//   }
// }

// export default App
