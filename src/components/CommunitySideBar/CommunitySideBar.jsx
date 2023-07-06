import { useContext } from 'react'
import './CommunitySideBar.scss'
import { context } from '../Community/Community'
import SidebarList from '../SidebarList/SidebarList'

const CommunitySideBar = () => {
    const { active, setActive, community } = useContext(context)

    return (
        <div
            className="col-lg-4"
            style={{
                paddingLeft: '8px',
                paddingRight: '16px',
                maxWidth: '300px',
            }}
        >
            <div className="comm-side-bar-container">
                <div className="comm-sidebar-main-container">
                    <div className="comm-sidebar-top">
                        <div
                            className="comm-sidebar-background"
                            style={{
                                width: '100%',
                            }}
                        >
                            <img
                                src={community.backgroundURL}
                                alt={`${community.communityName}-bg`}
                                style={{
                                    width: '100%',
                                    height: '84px',
                                    borderTopRightRadius: '20px',
                                    borderTopLeftRadius: '20px',
                                    objectFit: 'cover',
                                }}
                                />
                            <div style={{
                                background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0) 100%)',
                                height: '84px',
                                position: 'absolute',
                                width: '100%',
                                top: 0,
                            }}></div>
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: '55%',
                            left: '7%',
                            backgroundColor: 'transparent',
                        }}>
                            <img
                                src={`${community.logoURL}`}
                                alt={`${community.communityName}-logo`}
                                className='comm-sidebar-logo'
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    border: '1px solid #fff'
                                }}
                            />
                        </div>
                    </div>
                    <ul className="comm-sidebar-down">
                        <li className="comm-sidebar-down-list">
                            <div className="comm-sidebar-overview">Overview</div>
                            <div className="comm-sidebar-members">
                                Members ({community.members})
                            </div>
                        </li>
                        <li className="comm-sidebar-down-list">
                            <div className="comm-sidebar-modules">Modules</div>
                            <SidebarList list={community.modulesList} />
                        </li>
                        <li className="comm-sidebar-down-list">
                            <div className="comm-sidebar-discuss">All Discussions</div>
                            <SidebarList list={community.discussions} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CommunitySideBar