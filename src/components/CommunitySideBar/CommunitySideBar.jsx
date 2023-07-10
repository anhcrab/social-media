import { useContext, useState } from 'react'
import './CommunitySideBar.scss'
import { context } from '../Community/Community'
import SidebarBox from '../SidebarBox/SidebarBox'

const CommunitySideBar = () => {
    const { active, setActive, community } = useContext(context)
    const [status, setStatus] = useState(true)
    const { communityId} = community

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
                            icon={'/src/assets/Communities/comm-side-bar/overview-icon.svg'}
                            redirect={`/overview`}
                        />
                        <SidebarBox
                            text={`Members (${community.members})`}
                            type={'item'}
                            icon={'/src/assets/Communities/comm-side-bar/members-icon.svg'}
                            redirect={`/members`}
                        />
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
                                icon={'/src/assets/Communities/comm-side-bar/bounty-icon.svg'}
                                type={'item'}
                                status={status}
                                redirect={`/bounties`}
                            />
                            <SidebarBox
                                text={'Proposals'}
                                icon={'/src/assets/Communities/comm-side-bar/proposal-icon.svg'}
                                type={'item'}
                                status={status}
                                redirect={`/proposals`}
                            />
                            <SidebarBox
                                text={'Courses'}
                                icon={'/src/assets/Communities/comm-side-bar/course-icon.svg'}
                                type={'item'}
                                status={status}
                                redirect={`/courses`}
                            />
                            <SidebarBox
                                text={'Events'}
                                icon={'/src/assets/Communities/comm-side-bar/events.svg'}
                                type={'item'}
                                status={status}
                                redirect={`/events`}
                            />
                        </div>
                        <SidebarBox
                            text={'💬 Discussions'}
                            icon={'none'}
                            type={'item'}
                            redirect={`/discussions`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunitySideBar