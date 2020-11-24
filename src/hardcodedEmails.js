import React from "react"

import profile1 from "./components/profiles/profile1.png"
import profile2 from "./components/profiles/profile2.png"
import profile3 from "./components/profiles/profile3.png"
import profile4 from "./components/profiles/profile4.png"
import profile5 from "./components/profiles/profile5.png"
import profile6 from "./components/profiles/profile6.png"
import profile7 from "./components/profiles/profile7.png"
import profile8 from "./components/profiles/profile8.png"
import profile9 from "./components/profiles/profile9.png"
import profile10 from "./components/profiles/profile10.png"

const allEmails = [

        {
            id: 1,
            profile: <img src={profile2} alt="profile1" height="60" width="60" />,
            from: "Leigh Lewis",
            subject: "How are you?",
            body: `Hi! I wanted to reach out because we have not talked in forever. How have you been? Would you want to grab some coffee? \n \n Best, \n Leigh`,
            selected: false,
            page: 'inbox'
        },
        {
            id: 2,
            profile: <img src={profile3} alt="profile1" height="60" width="60" />,
            from: "Nolan Jacobs Walker",
            body: "Hey . . . unfortunately, I won't be able to make it to class today, so is there any chance you could send me your notes after class? \n Thank you so much! \n \n Best, \n Nolan",
            subject: "Class Today",
            selected: false,
            page: 'inbox'
        },
        {
            id: 5,
            profile: <img src={profile9} alt="profile9" height="60" width="60" />,
            from: "Taylor Flanagan",
            body: `Hey! I really am struggling with some calc II homework. Is there any chance you could help me out? I specifically need help with series . . . \n \n Best, \n Taylor`,
            subject: "Help with Homework",
            selected: false,
            page:'inbox'
        },
        {
            id: 10,
            profile: <img src={profile10} alt="profile1" height="60" width="60" />,
            from: "Megan West",
            body: "Hey!! I took a course last semester that I think you will really like. It's called Deep Learning! You should definitely take it! \n \n Megan",
            subject: "Take DEEP LEARNING",
            selected: false,
            page: 'inbox'
        },
        {
            id: 3,
            profile: <img src={profile1} alt="profile1" height="60" width="60" />,
            from: "Nicole Infantino",
            body: "Hey, I really don't know how to do homework for our biology class. Could you please help me? \n Thank you! \n Nicole",
            subject: "Homework",
            selected: false,
            page: 'inbox'
          },
          {
            id: 4,
            profile: <img src={profile5} alt="profile1" height="60" width="60" />,
            from: "Dr. Trevor Zink",
            body: "Hello, Could you please grade the section 4 essays before next Tuesday? \n Thank you, \n Dr. Zink",
            subject: "TA Grading",
            selected: false,
            page: 'inbox'
          },
          {
            id: 6,
            profile: <img src={profile6} alt="profile6" height="60" width="60" />,
            from: "SNAIL MAIL",
            body: "You should buy a snail!!",
            subject: "SPAMMMMMY",
            selected: false,
            page: 'spam'
          },
          {
            id: 7,
            profile: <img src={profile7} alt="profile7" height="60" width="60" />,
            from: "Jack Manson",
            body: "COMPLETE this survey for my class!",
            subject: "Complete this Survey",
            selected: false,
            page: 'deleted'
          },
          {
            id: 8,
            profile: <img src={profile8} alt="profile8" height="60" width="60" />,
            from: "Jenny Little",
            body: "Hey! I lost my air pods. Have you seen them anywhere? \n Let me know, \n Jenny",
            subject: "Lost Items",
            selected: false,
            page: 'deleted'
          },
          {
            id: 187178,
            profile: <img src={profile4} alt="profile8" height="60" width="60" />,
            to:"Alison Lewis",
            body: "Hello there!",
            subject: "Recipes",
            selected: false,
            page: 'draft',
          },
]
export default allEmails;