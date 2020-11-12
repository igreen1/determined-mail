import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';

import Emails from './components/Emails';
import About from './components/pages/About';
import NewMessage from './components/NewMessage'
import Spam from './components/Spam';
import Deleted from './components/Deleted';
import DummyEmail from './components/pages/DummyEmail';
import SideNav from './components/layout/SideNav'
import NavBar from './components/layout/NavBar';

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

import './App.css';



class App extends Component {
  state = {
    emails: [
      {
        id: 1,
        profile: <img src={profile2} alt='profile1' height='60' width='60' />,
        from: "From: Leigh Lewis",
        subject: "Subject: How are you?",
        message: "placeholder",
        selected: false
      },
      {
        id: 2,
        profile: <img src={profile3} alt='profile1' height='60' width='60' />,
        from: "From: Nolan Jacobs Walker",
        message: "placeholder",
        subject: "Subject: Class Today",
        selected: false
      },
      {
        id: 5,
        profile: <img src={profile9} alt='profile9' height='60' width='60' />,
        from: "From: Taylor Flanagan",
        subject: "Subject: Help with Homework",
        message: "placeholder",
        selected: false
      },
      {
        id: 10,
        profile: <img src={profile10} alt='profile1' height='60' width='60' />,
        from: "From: Megan West",
        subject: "Subject: Take DEEP",
        message: "placeholder",
        selected: false
      },
      {
        id: 3,
        profile: <img src={profile1} alt='profile1' height='60' width='60' />,
        from: "From: Nicole Infantino",
        subject: "Subject: Homework",
        message: "placeholder",
        selected: false
      },
      {
        id: 4,
        profile: <img src={profile5} alt='profile1' height='60' width='60' />,
        from: "From: Dr. Trevor Zink",
        subject: "Subject: TA Grading",
        message: "placeholder",
        selected: false
      }
    ],
    spam: [
      {
        id: 6,
        profile: <img src={profile6} alt='profile6' height='60' width='60' />,
        from: "From: SNAIL MAIL",
        subject: "Subject: SPAMMMMMY",
        message: "placeholder",
        selected: false
      }
    ],
    deleted: [
      {
        id: 7,
        profile: <img src={profile7} alt='profile7' height='60' width='60' />,
        from: "From: Jack Manson",
        subject: "Subject: Complete this Survey",
        message: "placeholder",
        selected: false
      },
      {
        id: 8,
        profile: <img src={profile8} alt='profile8' height='60' width='60' />,
        from: "From: Jenny Little",
        subject: "Subject: Lost Items",
        message: "placeholder",
        selected: false
      }
    ]
  }

  // Toggle Selected
  markSelected = (id) => {
    this.setState({
      emails: this.state.emails.map(email => {
        if (email.id === id) {
          email.selected = !email.selected
        }
        return email;
      })
    });
  }

  // Toggle Spam Selected
  markSelectedSpam = (id) => {
    this.setState({
      spam: this.state.spam.map(spam => {
        if (spam.id === id) {
          spam.selected = !spam.selected
        }
        return spam;
      })
    });
  }

  // Toggle Deleted Selected
  markSelectedDeleted = (id) => {
    this.setState({
      deleted: this.state.deleted.map(deleted => {
        if (deleted.id === id) {
          deleted.selected = !deleted.selected
        }
        return deleted;
      })
    });
  }

  // Delete Spam
  delSpam = (id) => {
    this.setState({ deleted: [...this.state.deleted, ...this.state.spam.filter(email => email.id === id)] });
    this.setState({ spam: [...this.state.spam.filter(spam => spam.id !== id)] });
  }

  // Delete for Good
  delDeleted = (id) => {
    this.setState({ deleted: [...this.state.deleted.filter(deleted => deleted.id !== id)] });
  }

  // Delete Email
  delEmail = (id) => {
    this.setState({ deleted: [...this.state.deleted, ...this.state.emails.filter(email => email.id === id)] });
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
                    <header className="page-header">Inbox</header>
                    <Emails emails={this.state.emails}
                      markSelected={this.markSelected}
                      delEmail={this.delEmail} />
                  </React.Fragment>
                )} />
                <Route path="/spam" render={props => (
                  <React.Fragment>
                    <header className="page-header">Spam</header>
                    <Spam spam={this.state.spam}
                      markSelectedSpam={this.markSelectedSpam}
                      delSpam={this.delSpam} />
                  </React.Fragment>
                )} />
                <Route path="/deleted" render={props => (
                  <React.Fragment>
                    <header className="page-header">Deleted</header>
                    <Deleted deleted={this.state.deleted}
                      markSelectedDeleted={this.markSelectedDeleted}
                      delDeleted={this.delDeleted} />
                  </React.Fragment>
                )} />
                <Route path="/about" component={About} />
                <Route path="/newMessage" component={NewMessage} />
                <Route path="/email" component={DummyEmail} />

              </switch>
            </div>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;



