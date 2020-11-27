import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import hardcodedEmails from './hardcodedEmails'
import EmailList from './components/EmailList'
import WriteEmail from './components/pages/WriteEmail'
import useEmails from './useEmails'
import logo from './components/layout/logo.png'
import ReadEmail from './components/pages/ReadEmail.js'

import './App.css'
import SideNav from './components/layout/SideNav'

const App = () => {

  // because we haven't used redux,, little ugly
  const {
    emails,
    moveToTrash,
    selectEmail,
    allSelected,
    saveDraft,
    grabPage,
    selectedToTrash,
    selectedToInbox,
    toggleSelectAll,
    selectedToSpam,
    permaDeleteEmail,
    permaDeleteSelected,
  } = useEmails(hardcodedEmails)

  return (
    <Router>
      <div className="app" aria-label="Welcome to Determined Mail">
        <div className="header">
          <header className="header">
            <h1>Determined Mail</h1>
            <div className="logo" aria-label="Determined Mail logo, magnifying glass with letter envelope inside">
              <img src={logo} alt="logo" height="80" width="80" />
            </div>
          </header>
        </div>
        <div className="SideNav">
          <SideNav />
        </div>
        <div className="email-viewport">
          {/* The view email list pages */}
          <Route exact path="/">
            <div className="EmailList">
              <header className="page-header" aria-label="Main Inbox">
                {'Inbox'}
                <input
                  aria-label="Select all emails in main inbox"
                  className="select"
                  type="checkbox"
                  id="selectAll"
                  checked={allSelected('inbox')}
                  onChange={() => {
                    const selected = !allSelected('inbox')
                    toggleSelectAll('inbox', selected)
                  }}
                />{' '}
                <button
                  className="discard-button"
                  onClick={() => {
                    selectedToTrash()
                  }}
                  aria-label="Move to trash"
                >
                  Trash
                </button>
                <button
                  className="mark-spam-button"
                  onClick={() => {
                    selectedToSpam()
                  }}
                  aria-label="Move to spam"
                >
                  Move to Spam
                </button>
              </header>

              <EmailList
                emails={grabPage('inbox')}
                deleteEmail={moveToTrash}
                selectEmail={selectEmail}
              />
            </div>
          </Route>
          <Route path="/spam">
            <div className="EmailList">
              <header className="page-header" aria-label="Spam">
                {'Spam'}
                <input
                  aria-label="Select all emails in spam"
                  className="select"
                  type="checkbox"
                  id="selectAll"
                  checked={allSelected('spam')}
                  onChange={() => {
                    const selected = !allSelected('spam')
                    toggleSelectAll('spam', selected)
                  }}
                />{' '}
                <button
                  className="discard-button"
                  onClick={() => {
                    selectedToTrash()
                  }}
                  aria-label="Move to trash"
                >
                  Trash
                </button>
              </header>
              <EmailList
                emails={grabPage('spam')}
                deleteEmail={moveToTrash}
                selectEmail={selectEmail}
              />
            </div>
          </Route>
          <Route path="/trash">
            <div className="EmailList">
              <header className="page-header" aria-label="Trash">
                {'Trash'}
                <input
                  aria-label="Select all emails in trash"
                  className="select"
                  type="checkbox"
                  id="selectAll"
                  checked={allSelected('deleted')}
                  onChange={() => {
                    const selected = !allSelected('deleted')
                    toggleSelectAll('deleted', selected)
                  }}
                />{' '}
                <button
                  className="mark-spam-button"
                  onClick={() => {
                    selectedToInbox()
                  }}
                  aria-label="Move to inbox"
                >
                  Move to inbox
                </button>
                <button
                  className="discard-button"
                  onClick={() => {
                    permaDeleteSelected()
                  }}
                  aria-label="Permanently delete"
                >
                  Delete
                </button>
              </header>
              <EmailList
                emails={grabPage('deleted')}
                deleteEmail={permaDeleteEmail}
                selectEmail={selectEmail}
              />
            </div>
          </Route>
          <Route path="/drafts">
            <div className="EmailList">
              <header className="page-header" aria-label="Drafts">
                <div className="savedDrafts"> Saved Drafts</div>
                <input
                  aria-label="Select all emails in drafts"
                  className="select"
                  type="checkbox"
                  id="selectAll"
                  checked={allSelected('draft')}
                  onChange={() => {
                    const selected = !allSelected('draft')
                    toggleSelectAll('draft', selected)
                  }}
                />
                <button
                  className="discard-button"
                  onClick={() => {
                    permaDeleteSelected()
                  }}
                  aria-label="Permanently delete"
                >
                  Trash
                </button>
              </header>
              <EmailList
                emails={grabPage('draft')}
                deleteEmail={permaDeleteEmail}
                selectEmail={selectEmail}
              />
            </div>
          </Route>
          {/* The write email page */}
          <Route exact path="/new">
            <div className="EmailList">
              <header className="page-header" aria-label="Write an email">{'New Message'}</header>
            </div>
            <WriteEmail
              sendEmail={(newEmail) => console.log(newEmail)}
              saveDraft={saveDraft}
            />
          </Route>
          <Route path="/new/:id">
            <div className="EmailList">
              <header className="page-header" aria-label="Edit draft">{'Edit Draft'}</header>
            </div>

            <WriteEmail
              sendEmail={(newEmail) => console.log(newEmail)}
              saveDraft={saveDraft}
              emails={emails}
            />
          </Route>
          <Route path="/email/:id">
            <ReadEmail emails={emails} />
          </Route>
        </div>
      </div>
    </Router>
  )
}

export default App