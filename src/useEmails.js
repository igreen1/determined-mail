import { useState } from 'react'

//spam, delete, draft, add in general,
export default (initialValue) => {
  const [emails, setEmails] = useState(initialValue)

  return {
    emails,
    setEmails,

    grabPage: (page) => {
        return emails.filter((email)=> email.page === page)
    },

    deleteEmail: (key) => {
      //really just move to deleted page (perma delete is below)
      setEmails(emails.map((email) => {
        if(email.id===key){
          email.page = 'deleted'
        }
      }))
    },

    permaDeleteEmail: (key) => {
      setEmails(emails.filter((email) => email.id !== key))
    },

    selectEmail: (key) => {
      setEmails(
        emails.map((email) => {
          if (email.id === key) {
            email.selected = !email.selected
          }
        })
      )
    },

    selectedToSpam: () => {
      setEmails(
        emails.map((email) => {
          if (email.selected) {
            email.page = 'spam'
          }
        })
      )
    },

    selectedToDeleted: () => {
      setEmails(
        emails.map((email) => {
          if (email.selected) {
            email.page = 'deleted'
          }
        })
      )
    },

    selectedToInbox: () => {
      setEmails(
        emails.map((email) => {
          if (email.selected) {
            email.page = 'inbox'
          }
        })
      )
    },

    saveDraft: (newEmail) => {
      let draftEmail = { ...newEmail }
      draftEmail.selected = false
      draftEmail.page = 'draft'
      draftEmail.id = Date.now()
      setEmails([...emails, draftEmail])
    },
  }
}
