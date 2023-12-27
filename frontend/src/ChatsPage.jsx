import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic( 
        '073abae8-0c8a-42c6-bd63-c189a8741b61', 
        props.user.username, 
        props.user.secret);

    return (
        <div style={{height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <PrettyChatWindow {...chatProps} style={{height: '100%' }}/>
        </div>
    )
};

export default ChatsPage;