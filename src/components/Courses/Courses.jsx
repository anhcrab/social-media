import SearchBox from '../SearchBox/SearchBox'
import emptyImg from '../../assets/Communities/comm-main-empty/no_course.13.svg'
import './Courses.scss'
import { useContext, useState } from 'react'
import { context } from '../Community/Community'

const Courses = () => {
    const { community } = useContext(context)
    const [tab, setTab] = useState('all')
    return(
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
            {community.course.length === 0 ? emptyPage() : commonPage()}
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