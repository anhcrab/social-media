import { createContext, useState } from "react"
import { useLocation, Route, Routes } from "react-router-dom"
import ChatBox from "../Chatbox/ChatBox"
import CommunitySideBar from "../CommunitySideBar/CommunitySideBar"
import Overview from "../Overview/Overview"
import Members from "../Members/Members"

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
                        <div className="comm-main-wrapper">
                            <Routes >
                                <Route path='/*' element={<Overview />} />
                                <Route path='overview' element={<Overview />} />
                                <Route path={`${useLocation().pathname}/members`} element={<Members />} />
                                <Route />
                            </Routes>
                        </div>
                    </div>
                </div>
                {/* <ChatBox /> */}
            </div>
        </context.Provider>
    )
}

export default Community