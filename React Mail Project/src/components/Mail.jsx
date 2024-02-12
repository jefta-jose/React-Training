import './mail.scss'
import { formatDate } from '../utils/Utils'

const Mail = ({ email }) => {
    return (
        <div className='email'>
            <div className="logo">
                <img src={email.logo_url} alt="nopic" />
            </div>
            <div className="content">
                <div className="top">
                    <p className='subject'>{email.subject}</p>
                    <p className='date'>{formatDate(email.date)}</p>
                </div>
                <div className="bottom">
                    <p>{email.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail