import { createContext, useState } from "react"
import ChatBox from "../Chatbox/ChatBox"
import CommunityMainContent from "../CommunityMainContent/CommunityMainContent"
import CommunitySideBar from "../CommunitySideBar/CommunitySideBar"

import './Community.scss'

export const context = createContext()

const Community = (props) => {
    const [active, setActive] = useState('overview')
    const { community } = props
    return (
        <context.Provider value={({ active, setActive, community })} >
            <div className="comm-wrapper row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div className="row">
                        <CommunitySideBar />
                        <CommunityMainContent />
                    </div>
                </div>
                <div className="col-lg-2"></div>
                {/* <ChatBox /> */}
            </div>
        </context.Provider>
    )
}

export default Community