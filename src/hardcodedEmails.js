import React from "react"

import profile1 from "./components/profiles/profile1.png"
import profile2 from "./components/profiles/profile2.png"
import profile3 from "./components/profiles/profile3.png"
//import profile4 from "./components/profiles/profile4.png"
import profile5 from "./components/profiles/profile5.png"
import profile6 from "./components/profiles/profile6.png"
import profile7 from "./components/profiles/profile7.png"
import profile8 from "./components/profiles/profile8.png"
import profile9 from "./components/profiles/profile9.png"
import profile10 from "./components/profiles/profile10.png"

const allEmails = {

    emails: [
        {
            id: 1,
            profile: <img src={profile2} alt="profile1" height="60" width="60" />,
            from: "Leigh Lewis",
            subject: "How are you?",
            body: "Hello",
            selected: false,
            page: 'inbox'
        },
        {
            id: 2,
            profile: <img src={profile3} alt="profile1" height="60" width="60" />,
            from: "Nolan Jacobs Walker",
            body: "Hello",
            subject: "Class Today",
            selected: false,
            page: 'inbox'
        },
        {
            id: 5,
            profile: <img src={profile9} alt="profile9" height="60" width="60" />,
            from: "Taylor Flanagan",
            body: "Hello",
            subject: "Help with Homework",
            selected: false,
            page:'inbox'
        },
        {
            id: 10,
            profile: <img src={profile10} alt="profile1" height="60" width="60" />,
            from: "Megan West",
            body: "Hello",
            subject: "Take DEEP",
            selected: false,
            page: 'inbox'
        },
        {
            id: 3,
            profile: <img src={profile1} alt="profile1" height="60" width="60" />,
            from: "Nicole Infantino",
            body: "Hello",
            subject: "Homework",
            selected: false,
            page: 'inbox'
          },
          {
            id: 4,
            profile: <img src={profile5} alt="profile1" height="60" width="60" />,
            from: "Dr. Trevor Zink",
            body: "Hello",
            subject: "TA Grading",
            selected: false,
            page: 'inbox'
          },
          {
            id: 6,
            profile: <img src={profile6} alt="profile6" height="60" width="60" />,
            from: "SNAIL MAIL",
            body: "Hello",
            subject: "SPAMMMMMY",
            selected: false,
            page: 'spam'
          },
          {
            id: 7,
            profile: <img src={profile7} alt="profile7" height="60" width="60" />,
            from: "Jack Manson",
            body: "Hello",
            subject: "Complete this Survey",
            selected: false,
            page: 'deleted'
          },
          {
            id: 8,
            profile: <img src={profile8} alt="profile8" height="60" width="60" />,
            from: "Jenny Little",
            body: "Hello",
            subject: "Lost Items",
            selected: false,
            page: 'deleted'
          },

    ]
}
export default allEmails;