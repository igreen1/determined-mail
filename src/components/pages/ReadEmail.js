import React, {Component} from 'react'
import { withRouter } from "react-router-dom";


export class ReadEmail extends Component {

  render() {

      const { id } = this.props.match.params;
      let email;
      for(let i = 0 ; i < this.props.emails.length; i++){
        if(this.props.emails[i].id === Number(id))
        {
          email = this.props.emails[i];
        }
      }

      return (
          <div>
            {/* <profile?> */}
            <h2>From: {email?.from}</h2>
            <h2>Subject: {email?.subject}</h2>    
            <p>{email?.body}</p>
          </div>
      )

  }

// function ReadEmail(props) {
//     const { id } = props.match.params;
//     const { profile, from, subject} = this.props.emails.filter(email => email.id === id);

//     return (
//         <div>
//           <h2>from</h2>
//           <h2>Subject:</h2>    
//           <p>Hey</p>
//           <p>email {id}</p>
//           <p>from: {from}</p>
//           <p>helloworld</p>
//         </div>
//     )
// }

}

// export default withRouter(Users);
export default withRouter(ReadEmail);