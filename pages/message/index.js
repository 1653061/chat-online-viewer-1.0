import MessageBody from 'components/MessageBody';
import { withAuth } from 'middlewares/auth.middleware';

const Main = ({}) => {
    return <MessageBody />       
}

export default withAuth(Main);