import SearchBox from '../SearchBox/SearchBox'
import emptyImg from '../../assets/Communities/comm-main-empty/no_course.13.svg'
import './Courses.scss'
import { useContext, useState } from 'react'
import { context } from '../Community/Community'

const Courses = () => {
    const { community } = useContext(context)
    const [tab, setTab] = useState('all')
    return (
        <>
            <SearchBox>
                Search Courses
            </SearchBox>
            <div style={{
                marginBottom: '8px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <div>
                    <div style={{
                        display: 'inline-block',
                        position: 'relative',
                        textAlign: 'left',
                    }}>
                        <div
                            className={`comm-main-tab ${tab === 'all' ? 'comm-tab-slt' : ''}`}
                            onClick={() => {
                                setTab('all')
                            }}
                        >
                            All Courses
                        </div>
                    </div>
                    <div style={{
                        display: 'inline-block',
                        position: 'relative',
                        textAlign: 'left',
                    }}>
                        <div
                            className={`comm-main-tab ${tab === 'my' ? 'comm-tab-slt' : ''}`}
                            onClick={() => {
                                setTab('my')
                            }}
                        >
                            My Courses
                        </div>
                    </div>
                </div>
            </div>
            {community.course.length === 0 ? emptyPage() : <div>
                {community.course.map(item =>
                    <div className='courses-item-wrapper'>
                        <div className="courses-item">
                            <img src={item.courseURL} alt="course-img" style={{
                                width: '96px',
                                height: '96px',
                                border: '1px solid rgb(241, 245, 249)',
                                borderRadius: '16px',
                                objectFit: 'cover',
                            }} />
                            <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                    gap: '4px'
                                }}>
                                <h4 style={{
                                    display: 'flex',
                                    fontSize: '16px',
                                    textOverflow: 'ellipsis',
                                    color: 'rgba(0,0,0,.85)',
                                    width: '100%',
                                    margin: 0
                                }}>{item.courseName}</h4>
                                <div className='course-content'>{item.desc}</div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}>
                                    <span className='course-status-bar'>📕 {item.books}</span>
                                    <span className='course-status-bar'>⭐️ {item.stars}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div >}
        </>
    )
}
const emptyPage = () => {
    return (
        <div
            style={{
                marginBottom: '16px',
                display: 'flex',
                flexDirection: 'column',
                rowGap: '1rem',
                alignItems: 'center',
                background: 'rgb(255, 255, 255)',
                boxShadow: 'rgba(180, 195, 205, 0.1) 0px 4px 24px',
                borderRadius: '12px',
                padding: '2.5rem',
            }}
        >
            <img
                src={emptyImg}
                alt="emptyDao"
                style={{
                    objectFit: 'contain',
                    width: '200px',
                }}
            />
            <div
                class="ant-col"
                style={{
                    paddingLeft: '8px',
                    paddingRight: '8px',
                }}
            >
                <h1
                    level="4"
                    style={{
                        fontWeight: 600,
                        fontSize: '19px',
                        marginBottom: '4px',
                        textAlign: 'center',
                    }}
                >No Courses available yet</h1>
                <h1
                    level="5"
                    style={{
                        color: 'rgb(100, 116, 139)',
                        fontWeight: 500,
                        fontSize: '14px',
                        marginTop: 0,
                        textAlign: 'center',
                    }}
                > Be sure to check here again in a while </h1>
            </div>
        </div>
    )
}

const commonPage = () => {

    return (
        <></>
    )
}

export default Courses