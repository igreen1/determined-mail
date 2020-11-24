import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import './ReadEmail.css'
/* eslint-disable */

const ReadEmail = ({ emails }) => {
  const { id } = useParams()
  const [email] = emails.filter((email) => email.id === Number(id))
  return (
    <div>
      {' '}
      {/* <profile?> */}
      <h2 alt={`From: ${email?.from}`}>From: {email?.from}</h2>
      <h2 alt={`Subject: ${email?.subject}`}>Subject: {email?.subject}</h2>
      <p className="emailBody" alt={`${email?.body}`}>{email?.body}</p>
    </div>

  )
}

ReadEmail.propTypes = {
  emails: PropTypes.array.isRequired,
}

// export class ReadEmail extends Component {
//   render() {
//     const { id } = this.props.match.params
//     let email
//     for (let i = 0; i < this.props.emails.length; i++) {
//       if (this.props.emails[i].id === Number(id)) {
//         email = this.props.emails[i]
//       }
//     }

//     return (
//       <div>
//         {/* <profile?> */}
//         <h2>From: {email?.from}</h2>
//         <h2>Subject: {email?.subject}</h2>
//         <p>{email?.body}</p>
//       </div>
//     )
//   }

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
// }

// export default withRouter(Users);
export default ReadEmail
