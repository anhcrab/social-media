import { createContext, useState } from "react"
import { useLocation, Route, Routes, Link, Navigate, redirect, Outlet } from "react-router-dom"
import ChatBox from "../Chatbox/ChatBox"
import CommunitySideBar from "../CommunitySideBar/CommunitySideBar"
import Overview from "../Overview/Overview"
import Members from "../Members/Members"
import Proposals from '../Proposals/Proposals'
import Courses from "../Courses/Courses"
import Events from "../Events/Events"
import Bounties from "../Bounties/Bounties"
import Discussions from "../Discussions/Discussions"
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
                        overflow: 'hidden',
                    }}>
                        <CommunitySideBar />
                    </div>
                    <div style={{
                        width: '70% ',
                        overflowY: 'hidden',
                    }}>
                        <div className="comm-main-wrapper">
                            <Routes>
                                <Route path='/' element={<Navigate to={`/app/dao/${community.community}/${community.communityId}/overview`} />} />
                                <Route path='overview' element={<Overview />} />
                                <Route path='members' element={<Members />} />
                                <Route path="bounties" element={<Bounties />} />
                                <Route path="proposals" element={<Proposals />} />
                                <Route path="courses" element={<Courses />} /> 
                                <Route path="events" element={<Events />} />
                                <Route path="discussions" element={<Discussions />} />
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