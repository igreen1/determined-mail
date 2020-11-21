import React, { useState } from "react"

import { BrowserRouter as Router, Route } from "react-router-dom"

import Emails from "./components/Emails"
import About from "./components/pages/About"
import NewMessage from "./components/NewMessage"
import Spam from "./components/Spam"
import Deleted from "./components/Deleted"
import ReadEmail from "./components/pages/ReadEmail"
import SideNav from "./components/layout/SideNav"

import allEmails from "./hardcodedEmails"

import { BsFillTrashFill } from "react-icons/bs"

import "./App.css"

function App
  
  const [emails, setEmails] = useState(allEmails);

  // Toggle Select All In Inbox
  toggleSelectAllInInbox = () => {
    this.state.allSelected = !this.state.allSelected
    for (var i = 0; i < this.state.emails.length; i++) {
      var email = this.state.emails[i]
      email.selected = this.state.allSelected
    }

    this.setState({ emails: this.state.emails })
  }

  // Toggle Select All In Deleted
  toggleSelectAllInDeleted = () => {
    this.state.allSelected = !this.state.allSelected
    for (var i = 0; i < this.state.deleted.length; i++) {
      var email = this.state.deleted[i]
      email.selected = this.state.allSelected
    }
    this.setState({ deleted: this.state.deleted })
  }

  // Toggle Select All In Spam
  toggleSelectAllInSpam = () => {
    this.state.allSelected = !this.state.allSelected
    for (var i = 0; i < this.state.spam.length; i++) {
      var email = this.state.spam[i]
      email.selected = this.state.allSelected
    }
    this.setState({ spam: this.state.spam })
  }

  // Toggle Email Selected in Inbox
  markSelected = (id) => {
    this.setState({
      emails: this.state.emails.map((email) => {
        if (email.id === id && this.state.allSelected) {
          email.selected = false
          this.state.allSelected = false
        }
        if (email.id === id && !this.state.allSelected) {
          email.selected = !email.selected
        }
        if (email.id === id && email.selected) {
          this.state.allSelected = false
        }
        return email
      }),
    })
  }


  // Toggle Email Selected in Spam
  markSelectedSpam = (id) => {
    this.setState({
      spam: this.state.spam.map((email) => {
        if (email.id === id && this.state.allSelected) {
          email.selected = false
          this.state.allSelected = false
        }
        if (email.id === id && !this.state.allSelected) {
          email.selected = !email.selected
        }
        if (email.id === id && email.selected) {
          this.state.allSelected = false
        }
        return email
      }),
    })
  }

  // Toggle Email Selected In Deleted
  markSelectedDeleted = (id) => {
    this.setState({
      deleted: this.state.deleted.map((email) => {
        if (email.id === id && this.state.allSelected) {
          email.selected = false
          this.state.allSelected = false
        }
        if (email.id === id && !this.state.allSelected) {
          email.selected = !email.selected
        }
        if (email.id === id && email.selected) {
          this.state.allSelected = false
        }
        return email
      }),
    })
  }

  // Remove Email from Inbox if selected
  removeIfSelected = () => {
    this.setState((prevState) => {
      prevState.deleted = [
        ...prevState.deleted,
        ...prevState.emails.filter((email) => email.selected),
      ]
      prevState.emails = prevState.emails.filter((email) => !email.selected)
      prevState.deleted.map((email) => {
        email.selected = false
        return email
      })
      this.state.allSelected = false

      return prevState
    })
  }

  // Mark Spam if Email in Inbox is Selected
  markSpamIfSelected = () => {
    this.setState((prevState) => {
      prevState.spam = [
        ...prevState.spam,
        ...prevState.emails.filter((email) => email.selected),
      ]
      prevState.emails = prevState.emails.filter((email) => !email.selected)
      prevState.spam.map((email) => {
        email.selected = false
        return email
      })
      this.state.allSelected = false

      return prevState
    })
  }

  // Remove Email from deleted if selected
  removeIfSelectedInDeleted = () => {
    this.setState({
      deleted: [...this.state.deleted.filter((email) => !email.selected)],
    })
    this.state.allSelected = false
  }

  // Remove Email from spam if selected
  removeIfSelectedInSpam = () => {
    this.setState((prevState) => {
      prevState.deleted = [
        ...prevState.deleted,
        ...prevState.spam.filter((email) => email.selected),
      ]
      prevState.spam = prevState.spam.filter((email) => !email.selected)
      prevState.deleted.map((email) => {
        email.selected = false
        return email
      })
      this.state.allSelected = false

      return prevState
    })
  }

  // Delete Email from Spam Folder
  delSpam = (id) => {
    this.setState({
      deleted: [
        ...this.state.deleted,
        ...this.state.spam.filter((email) => email.id === id),
      ],
    })
    this.setState({
      spam: [...this.state.spam.filter((spam) => spam.id !== id)],
    })
  }

  // Delete Email from Deleted Folder
  delDeleted = (id) => {
    this.setState({
      deleted: [...this.state.deleted.filter((deleted) => deleted.id !== id)],
    })
  }

  // Delete Email from Inbox
  delEmail = (id) => {
    this.setState({
      deleted: [
        ...this.state.deleted,
        ...this.state.emails.filter((email) => email.id === id),
      ],
    })
    this.setState({
      emails: [...this.state.emails.filter((email) => email.id !== id)],
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <SideNav />
            <div className="inbox">
              <switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <React.Fragment>
                      <header className="page-header">
                        Inbox
                        <input
                          className="select"
                          type="checkbox"
                          id="selectAll"
                          checked={this.state.allSelected}
                          onClick={this.toggleSelectAllInInbox}
                        />{" "}
                        <button
                          className="discard-button"
                          onClick={this.removeIfSelected}
                        >
                          Discard
                        </button>
                        <button
                          className="mark-spam-button"
                          onClick={this.markSpamIfSelected}
                        >
                          Mark as Spam
                        </button>
                      </header>
                      <Emails
                        emails={this.state.emails}
                        markSelected={this.markSelected}
                        delEmail={this.delEmail}
                      />
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/spam"
                  render={(props) => (
                    <React.Fragment>
                      <header className="page-header">
                        Spam
                        <input
                          className="select"
                          type="checkbox"
                          id="selectAll"
                          checked={this.state.allSelected}
                          selected={this.state.allSelected}
                          onClick={this.toggleSelectAllInSpam}
                        />{" "}
                        <button
                          className="discard-button"
                          onClick={this.removeIfSelectedInSpam}
                        >
                          Discard
                        </button>
                      </header>
                      <Spam
                        spam={this.state.spam}
                        markSelectedSpam={this.markSelectedSpam}
                        delSpam={this.delSpam}
                      />
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/deleted"
                  render={(props) => (
                    <React.Fragment>
                      <header className="page-header">
                        Deleted
                        <input
                          className="select"
                          type="checkbox"
                          id="selectAll"
                          checked={this.state.allSelected}
                          selected={this.state.allSelected}
                          onClick={this.toggleSelectAllInDeleted}
                        />{" "}
                        <button
                          className="discard-button"
                          onClick={this.removeIfSelectedInDeleted}
                        >
                          Discard
                        </button>
                      </header>
                      <Deleted
                        deleted={this.state.deleted}
                        markSelectedDeleted={this.markSelectedDeleted}
                        delDeleted={this.delDeleted}
                      />
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/email/:id"
                  render={(props) => (
                    <React.Fragment>
                      <ReadEmail emails={this.state.emails} />
                    </React.Fragment>
                  )}
                />
                <Route path="/about" component={About} />
                <Route path="/newMessage" component={NewMessage} />
              </switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
