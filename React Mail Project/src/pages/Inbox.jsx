import './inbox.scss'
import MailList from '../components/MailList'
import MailPreview from '../components/MailPreview'
const Inbox = () => {
    return (
        <div className='inbox'>
            <MailList className="mailList" />
            <MailPreview className="mailpreview" />
        </div>
    )
}

export default Inbox