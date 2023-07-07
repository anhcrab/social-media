import { useContext, useState } from 'react'
import './CommunitySideBar.scss'
import { context } from '../Community/Community'
import SidebarBox from '../SidebarBox/SidebarBox'

const CommunitySideBar = () => {
    const { active, setActive, community } = useContext(context)
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
                            icon={'/src/assets/Communities/comm-side-bar/overview-icon.svg'}
                        />
                        <SidebarBox
                            text={`Members (${community.members})`}
                            icon={'/src/assets/Communities/comm-side-bar/members-icon.svg'}
                        />
                        <div className="comm-sidebar-list">
                            <SidebarBox
                                text={'Modules'}
                                icon={'none'}
                                role={true}
                                status={'open'}
                            />
                            <SidebarBox
                                text={'Bounties'}
                                icon={'/src/assets/Communities/comm-side-bar/bounty-icon.svg'}
                                role={false}
                            />
                            <SidebarBox
                                text={'Proposals'}
                                icon={'/src/assets/Communities/comm-side-bar/proposal-icon.svg'}
                                role={false}
                            />
                            <SidebarBox
                                text={'Courses'}
                                icon={'/src/assets/Communities/comm-side-bar/course-icon.svg'}
                                role={false}
                            />
                            <SidebarBox
                                text={'Events'}
                                icon={'/src/assets/Communities/comm-side-bar/events.svg'}
                                role={false}
                            />
                        </div>
                        <SidebarBox
                            text={'💬 Discussions'}
                            icon={'none'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunitySideBar