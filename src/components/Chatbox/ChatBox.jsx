
import './ChatBox.scss'

const ChatBox = () => {
    return (
        <div className="chat-box-container row">
            <div className="chat-box-topside row">
                <div className="chat-box-title">
                    <i className="bi bi-chat-fill"></i>Cuộc hội thoại
                </div>
                <div className="chat-box-intro">Chúng tôi sẵn sàng hỗ trợ bạn!</div>
                <div className="chat-box-online">
                    <div className="online-icon"></div>
                    Trực tuyến
                </div>
            </div>
            <div className="chat-box-midside row">
                <div className="chat-box-msg-container row">
                    {/* hien thi noi dung chat */}
                </div>
                <div className="chat-box-input row">
                    <input type="text" placeholder='Nhập tin nhắn ...' />
                </div>
            </div>
            <div className="chat-box-downside row">
                <div className="chat-box-downside-left">
                    <i className="bi bi-emoji-smile"></i>
                    <i className="bi bi-paperclip"></i>
                    <i className="bi bi-soundwave"></i>
                </div>
                <div className="chat-box-downside-right">
                    we ran on <span><i className="bi bi-chat-left-fill"></i></span> crisp
                </div>
            </div>
        </div>
    )
}

export default ChatBox