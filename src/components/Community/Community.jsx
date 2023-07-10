import { createContext, useState } from "react"
import { useLocation, Route, Routes, Link, Navigate, redirect, Outlet } from "react-router-dom"
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
                            <Routes>
                                <Route path='/' element={<Navigate to={`/app/dao/${community.community}/${community.communityId}/overview`} />} />
                                <Route path='overview' element={<Overview />} />
                                <Route path='members' element={<Members />} />
                                <Route path="bounties" />
                                <Route path="proposals" />
                                <Route path="courses" />
                                <Route path="events" />
                                <Route path="discussions" />
                                <Route />
                            </Routes>
                        </div>
                    </div>
                </div>
                {/* <ChatBox /> */}
            </div>
            <Outlet />
        </context.Provider>
    )
}

export default Community