import { useState } from 'react'

//spam, delete, draft, add in general,
export default (initialValue) => {
  const [emails, setEmails] = useState(initialValue)

  const permaDeleteEmail = (key)=>{
    setEmails(emails.filter((email) => email.id !== key))
  }

  return {
    emails,
    setEmails,

    allSelected: (page) => {
      if(emails.filter((email) => email.page === page).length ===0) return false;
      return(emails.filter((email)=> (!email.selected) && (email.page===page)).length === 0)
    },

    grabPage: (page) => {
      return emails.filter((email)=> email.page === page)
    },

    moveToTrash: (key) => {
      //really just move to deleted page (perma delete is below)
      setEmails(emails.map((email) => {
        if(email.id===key){
          email.page = 'deleted'
          email.selected = false
        }
        return email;
      }))
    },

    permaDeleteEmail: permaDeleteEmail,

    permaDeleteSelected: () => {
      setEmails(emails.filter((email) => email.selected !== true))
    },

    selectEmail: (key) => {
      setEmails(
        emails.map((email) => {
          if (email.id === key) {
            email.selected = !email.selected
          }
          return email
        })
      )
    },

    toggleSelectAll: (page, newState) => {
      setEmails(emails.map((email)=>{
        if(email.page === page){
          email.selected = newState
        }
        return email
      }))
    },

    selectedToSpam: () => {
      setEmails(
        emails.map((email) => {
          if (email.selected) {
            email.page = 'spam'
            email.selected = false
          }
          return email;
        })
      )
    },

    selectedToTrash: () => {
      setEmails(
        emails.map((email) => {
          if (email.selected) {
            email.page = 'deleted'
            email.selected = false
          }
          return email;
        })
      )
    },

    selectedToInbox: () => {
      setEmails(
        emails.map((email) => {
          if (email.selected) {
            email.page = 'inbox'
            email.selected = false
          }
          return email;
        })
      )
    },

    saveDraft: (newEmail) => {
      let draftEmail = { ...newEmail }
      draftEmail.selected = false
      draftEmail.page = 'draft'
      if(!draftEmail.id){
        draftEmail.id = Date.now()
        setEmails([...emails, draftEmail])
      } else { 
        setEmails(
          emails.map((email)=>{
            if(email.id === draftEmail.id){
              email = {...draftEmail}
            }
            return email
          })
        )
      }
      
    },
  }
}
