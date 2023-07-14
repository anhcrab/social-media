import { createContext, useState } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import CommunitySideBar from "../CommunitySideBar/CommunitySideBar"
import Overview from "../Overview/Overview"
import Members from "../Members/Members"
import Proposals from '../Proposals/Proposals'
import Courses from "../Courses/Courses"
import Events from "../Events/Events"
import Bounties from "../Bounties/Bounties"
import './Community.scss'

export const context = createContext()

const Community = (props) => {
    const { community } = props
    const [mobileStatus, setMobileStatus] = useState(false)
    const [active, setActive] = useState('Overview')
    return (
        <context.Provider value={({ community, mobileStatus, setMobileStatus, active, setActive })} >
            <div className="comm-wrapper">
                <div className="comm-container">
                    <div className={`comm-sidebar${mobileStatus === false ? '' : '-open'}`}>
                        <CommunitySideBar />
                    </div>
                    <div className="comm-content">
                        <div className="comm-main-wrapper">
                            <Routes>
                                <Route path='/' element={<Navigate to={`/app/dao/${community.community}/${community.communityId}/overview`} />} />
                                <Route path='overview' element={<Overview />} />
                                <Route path='members' element={<Members />} />
                                <Route path="bounties" element={<Bounties />} />
                                <Route path="proposals" element={<Proposals />} />
                                <Route path="courses" element={<Courses />} /> 
                                <Route path="events" element={<Events />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </context.Provider>
    )
}

export default Community