import { useContext, useState } from 'react'
import './CommunitySideBar.scss'
import { context } from '../Community/Community'
import SidebarBox from '../SidebarBox/SidebarBox'
import iconOverview from '../..//assets/Communities/comm-side-bar/overview-icon.svg'
import iconMember from '../../assets/Communities/comm-side-bar/members-icon.svg'
import iconBounty from '../../assets/Communities/comm-side-bar/bounty-icon.svg'
import iconCourse from '../../assets/Communities/comm-side-bar/course-icon.svg'
import iconProposal from '../../assets/Communities/comm-side-bar/proposal-icon.svg'
import iconEvent from '../../assets/Communities/comm-side-bar/events.svg'

const CommunitySideBar = () => {
    const { community, mobileStatus, setMobileStatus } = useContext(context)
    const [status, setStatus] = useState(true)
    return (
        <div className="comm-sidebar-wrapper">
            <div className="comm-side-bar-container">
                <div className="comm-sidebar-main-container">
                    <div className="comm-sidebar-top">
                        <div className="comm-sidebar-background">
                            <img
                                src={community.backgroundURL}
                                alt={`${community.communityName}-bg`}
                                className='comm-sidebar-bg'
                            />
                            <div className='comm-sidebar-bg-cover'></div>
                        </div>
                        <img
                            src={`${community.logoURL}`}
                            alt={`${community.communityName}-logo`}
                            className='comm-sidebar-logo'
                        />
                        <div className="comm-sidebar-name">
                            {community.communityName}
                        </div>
                    </div>
                    {/* done */}
                    <div className="comm-sidebar-down">
                        <SidebarBox
                            text={'Overview'}
                            type={'item'}
                            icon={iconOverview}
                            redirect={`/overview`}
                        />
                        <SidebarBox
                            text={`Members (${community.members})`}
                            type={'item'}
                            icon={iconMember}
                            redirect={`/members`}
                        />
                        <div style={{ width: '100%', height: '2px', backgroundColor: '#f5f3ff' }}></div>
                        <div className="comm-sidebar-list">
                            <SidebarBox
                                text={'Modules'}
                                icon={'none'}
                                type={'list'}
                                status={status}
                                setStatus={setStatus}
                            />
                            <SidebarBox
                                text={'Bounties'}
                                icon={iconBounty}
                                type={'item'}
                                status={status}
                                redirect={`/bounties`}
                            />
                            <SidebarBox
                                text={'Proposals'}
                                icon={iconProposal}
                                type={'item'}
                                status={status}
                                redirect={`/proposals`}
                            />
                            <SidebarBox
                                text={'Courses'}
                                icon={iconCourse}
                                type={'item'}
                                status={status}
                                redirect={`/courses`}
                            />
                            <SidebarBox
                                text={'Events'}
                                icon={iconEvent}
                                type={'item'}
                                status={status}
                                redirect={`/events`}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <i 
                className="bi bi-arrow-left-circle-fill comm-sidebar-close-btn"
                onClick={() => {
                    setMobileStatus(false)
                }}
            ></i>
        </div>
    )
}

export default CommunitySideBar