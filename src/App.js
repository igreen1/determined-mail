import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Emails from './components/Emails';
import About from './components/pages/About';
import NewMessage from './components/NewMessage'
import Spam from './components/Spam';
import Deleted from './components/Deleted';
import DummyEmail from './components/pages/DummyEmail';
import SideNav from './components/layout/SideNav'


import profile1 from './components/profiles/profile1.png'
import profile2 from './components/profiles/profile2.png'
import profile3 from './components/profiles/profile3.png'
import profile4 from './components/profiles/profile4.png'
import profile5 from './components/profiles/profile5.png'
import profile6 from './components/profiles/profile6.png'
import profile7 from './components/profiles/profile7.png'
import profile8 from './components/profiles/profile8.png'
import profile9 from './components/profiles/profile9.png'
import profile10 from './components/profiles/profile10.png'

import {BsFillTrashFill} from 'react-icons/bs'



import './App.css';



class App extends Component {
  state = {
    allSelected: false,
    emails: [
      {
        id: 1,
        profile: <img src={profile2} alt='profile1' height='60' width='60'/>,
        from: "From: Leigh Lewis",
        subject: "Subject: How are you?",
        selected: false
      },
      {
        id: 2,
        profile: <img src={profile3} alt='profile1' height='60' width='60'/>,
        from: "From: Nolan Jacobs Walker",
        subject: "Subject: Class Today",
        selected: false
      },
      {
        id: 5,
        profile: <img src={profile9} alt='profile9' height='60' width='60'/>,
        from: "From: Taylor Flanagan",
        subject: "Subject: Help with Homework",
        selected: false
      },
      {
        id: 10,
        profile: <img src={profile10} alt='profile1' height='60' width='60'/>,
        from: "From: Megan West",
        subject: "Subject: Take DEEP",
        selected: false
      },
      {
        id: 3,
        profile: <img src={profile1} alt='profile1' height='60' width='60'/>,
        from: "From: Nicole Infantino",
        subject: "Subject: Homework",
        selected: false
      },
      {
        id: 4,
        profile: <img src={profile5} alt='profile1' height='60' width='60'/>,
        from: "From: Dr. Trevor Zink",
        subject: "Subject: TA Grading",
        selected: false
      }
    ],
    spam: [
      {
        id: 6,
        profile: <img src={profile6} alt='profile6' height='60' width='60'/>,
        from: "From: SNAIL MAIL",
        subject: "Subject: SPAMMMMMY",
        selected: false
      }
    ],
    deleted: [
      {
      id: 7,
      profile: <img src={profile7} alt='profile7' height='60' width='60'/>,
      from: "From: Jack Manson",
      subject: "Subject: Complete this Survey",
      selected: false
    },
    {
      id: 8,
      profile: <img src={profile8} alt='profile8' height='60' width='60'/>,
      from: "From: Jenny Little",
      subject: "Subject: Lost Items",
      selected: false
    }
  ]
  }

  // Toggle Select All In Inbox
  toggleSelectAllInInbox = () => {
    this.state.allSelected = !this.state.allSelected;
    for (var i = 0; i < this.state.emails.length; i++) {
      var email = this.state.emails[i];
      email.selected = this.state.allSelected;
    }
          
    this.setState({emails: this.state.emails})
  }

  // Toggle Select All In Deleted
  toggleSelectAllInDeleted = () => {
    this.state.allSelected = !this.state.allSelected;
    for (var i = 0; i < this.state.deleted.length; i++) {
      var email = this.state.deleted[i];
      email.selected = this.state.allSelected;
    }       
    this.setState({deleted: this.state.deleted})
  }

  // Toggle Select All In Spam
  toggleSelectAllInSpam = () => {
    this.state.allSelected = !this.state.allSelected;
    for (var i = 0; i < this.state.spam.length; i++) {
      var email = this.state.spam[i];
      email.selected = this.state.allSelected;
    }       
    this.setState({spam: this.state.spam})
  }

  // Toggle Email Selected in Inbox
  markSelected = (id) => {
    this.setState({ emails: this.state.emails.map(email => {
      if (email.id === id && this.state.allSelected) {
        email.selected = false;
        this.state.allSelected = false;
      } 
      if (email.id === id && !this.state.allSelected) {
        email.selected = !email.selected;
      }
      if (email.id === id && email.selected) {
        this.state.allSelected = false;
      }
      return email;
    }) 
  });
  }

  // Toggle Email Selected in Spam
  markSelectedSpam = (id) => {
    this.setState({ spam: this.state.spam.map(email => {
      if (email.id === id && this.state.allSelected) {
        email.selected = false;
        this.state.allSelected = false;
      } 
      if (email.id === id && !this.state.allSelected) {
        email.selected = !email.selected;
      }
      if (email.id === id && email.selected) {
        this.state.allSelected = false;
      }
      return email;
    }) 
  });
  }

  // Toggle Email Selected In Deleted
  markSelectedDeleted = (id) => {
    this.setState({ deleted: this.state.deleted.map(email => {
      if (email.id === id && this.state.allSelected) {
        email.selected = false;
        this.state.allSelected = false;
      } 
      if (email.id === id && !this.state.allSelected) {
        email.selected = !email.selected;
      }
      if (email.id === id && email.selected) {
        this.state.allSelected = false;
      }
      return email;
    }) 
  });
  }

  // Remove Email from Inbox if selected
  removeIfSelected = () => {
    this.setState((prevState) => {
      prevState.deleted =[...prevState.deleted, ...prevState.emails.filter(email => email.selected)]
      prevState.emails = prevState.emails.filter(email => !email.selected);
      prevState.deleted.map(email => {
        email.selected = false;
        return email;
      });

      return prevState;
    
    })
  }

  // Mark Spam if Email in Inbox is Selected
  markSpamIfSelected = () => {
    this.setState((prevState) => {
      prevState.spam =[...prevState.spam, ...prevState.emails.filter(email => email.selected)]
      prevState.emails = prevState.emails.filter(email => !email.selected);
      prevState.spam.map(email => {
        email.selected = false;
        return email;
      });

      return prevState;
    
    })
  }

  // Remove Email from deleted if selected
  removeIfSelectedInDeleted = () => {
    this.setState({deleted: [...this.state.deleted.filter(email => !email.selected)] }); 
}

// Remove Email from spam if selected
removeIfSelectedInSpam = () => {
  this.setState((prevState) => {
    prevState.deleted =[...prevState.deleted, ...prevState.spam.filter(email => email.selected)]
    prevState.spam = prevState.spam.filter(email => !email.selected);
    prevState.deleted.map(email => {
      email.selected = false;
      return email;
    });

    return prevState;
  
  })
}


  // Delete Email from Spam Folder
  delSpam = (id) => {
    this.setState({deleted: [...this.state.deleted, ...this.state.spam.filter(email => email.id === id)]});
    this.setState({ spam: [...this.state.spam.filter(spam => spam.id !== id)] });
  }

  // Delete Email from Deleted Folder
  delDeleted = (id) => {
    this.setState({ deleted: [...this.state.deleted.filter(deleted => deleted.id !== id)] });
  }

  // Delete Email from Inbox
  delEmail = (id) => {
    this.setState({deleted: [...this.state.deleted, ...this.state.emails.filter(email => email.id === id)]});
    this.setState({ emails: [...this.state.emails.filter(email => email.id !== id)] });
  }

    render() {
        return (
          
          <Router>
            <div className="App">
              <div className="container">
                <SideNav />
                <div className="inbox">
                  <switch>
                   <Route exact path="/" render={props => (
                      <React.Fragment>
                        <header className="page-header">
                          Inbox
                          <input className="select" 
                        type="checkbox"
                        id="selectAll"
                        checked={this.state.allSelected}
                        onClick={this.toggleSelectAllInInbox} /> {' '}
                        <button className="discard-button" onClick={this.removeIfSelected}>Discard</button>
                        <button className="mark-spam-button" onClick={this.markSpamIfSelected}>Mark as Spam</button>
                        </header>
                          <Emails emails={this.state.emails}
                                markSelected={this.markSelected}
                                delEmail={this.delEmail} 
                                onLoad={this.state.allSelected = false} />
                      </React.Fragment>
                    )} />
                    <Route path="/spam" render={props => (
                      <React.Fragment>
                       <header className="page-header">
                         Spam
                         <input className="select" 
                        type="checkbox"
                        id="selectAll"
                        checked={this.state.allSelected}
                        selected={this.state.allSelected}
                        onClick={this.toggleSelectAllInSpam} /> {' '}
                        <button className="discard-button" onClick={this.removeIfSelectedInSpam}>Discard</button>
                         </header>
                          <Spam spam={this.state.spam}
                                markSelectedSpam={this.markSelectedSpam}
                                delSpam={this.delSpam} 
                                onLoad={this.state.allSelected = false} />
                      </React.Fragment>
                    )} />  
                    <Route path="/deleted" render={props => (
                      <React.Fragment>
                        <header className="page-header">
                          Deleted
                          <input className="select" 
                        type="checkbox"
                        id="selectAll"
                        checked={this.state.allSelected}
                        selected={this.state.allSelected}
                        onClick={this.toggleSelectAllInDeleted} /> {' '}
                        <button className="discard-button" onClick={this.removeIfSelectedInDeleted}>Discard</button>
                        </header>
                          <Deleted deleted={this.state.deleted}
                                markSelectedDeleted={this.markSelectedDeleted}
                                delDeleted={this.delDeleted} 
                                onLoad={this.state.allSelected = false} />
                      </React.Fragment>
                    )} />  
                  <Route path="/about" component={About} />
                  <Route path="/newMessage" component={NewMessage}/>
                  <Route path="/email" component={DummyEmail}/>

                  </switch>
                </div>              
              </div>
            </div>
          </Router>
        );
    }
}

export default App;



