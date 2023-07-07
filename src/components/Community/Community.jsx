import { createContext, useState } from "react"
import ChatBox from "../Chatbox/ChatBox"
import CommunityMainContent from "../CommunityMainContent/CommunityMainContent"
import CommunitySideBar from "../CommunitySideBar/CommunitySideBar"

import './Community.scss'

export const context = createContext()

const Community = (props) => {
    const [active, setActive] = useState('Overview')
    const { community } = props
    return (
        <context.Provider value={({ active, setActive, community })} >
            <div
                className="comm-wrapper"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                <div style={{
                    width: '1150px',
                    display: 'flex',
                }}
                >
                    <div style={{
                        width: '30%',
                    }}>
                        <CommunitySideBar />
                    </div>
                    <div style={{
                        width: '70% ',
                    }}>
                       <CommunityMainContent />
                    </div>
                </div>
                {/* <ChatBox /> */}
            </div>
        </context.Provider>
    )
}

export default Community