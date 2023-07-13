import { createContext, useContext, useEffect, useState } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import './Bounties.scss'
import { context } from '../Community/Community'
import emptyImg from '../../assets/Communities/comm-main-empty/no_bounties.c1.svg'
import diamondIcon from '../../assets/Communities/diamondIconGreen.svg'

export const bountiesContext = createContext()

const Bounties = () => {
    const { community } = useContext(context)
    const [selected, setSelected] = useState(1)
    const [tab, setTab] = useState()
    const [filter, setFilter] = useState(false)
    const [sort, setSort] = useState(false)
    const [order, setOrder] = useState('Ascending')
    const handleOrder = () => {
        if (order === 'Ascending') {
            return (
                <svg
                    style={{
                        width: '15px',
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            )
        }
        if (order === 'Desending') {
            return (
                <svg
                    style={{ width: '15px' }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            )
        }
    }
    useEffect(() => {
        if (tab === 'filter') {
            setFilter(true)
            setSort(false)
        }
        if (tab === 'sort') {
            setSort(true)
            setFilter(false)
        }
        if (tab === 'none') {
            setFilter(false)
            setSort(false)
        }
    }, [tab])


    return (
        <bountiesContext.Provider value={({ order, setOrder })}>
            <SearchBox>
                Search Bounties
            </SearchBox>
            <div style={{
                marginBottom: '16px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #d9d9d9',
                zIndex: '10'
            }}>
                <div style={{
                    display: 'flex',
                }}>
                    <span
                        className={`bounties-state-filter ${selected === 1 ? 'bounties-state-filter-selected' : ''}`}
                        onClick={() => {
                            setSelected(1)
                        }}
                    >🏆 Available</span>
                    <span
                        className={`bounties-state-filter ${selected === 2 ? 'bounties-state-filter-selected' : ''}`}
                        onClick={() => {
                            setSelected(2)
                        }}
                    >✅ Completed</span>
                    <span
                        className={`bounties-state-filter ${selected === 3 ? 'bounties-state-filter-selected' : ''}`}
                        onClick={() => {
                            setSelected(3)
                        }}
                    >🚫 Missed</span>
                </div>
                <div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <div>
                            <div style={{
                                display: 'inline-block',
                                textAlign: 'left',
                            }}>
                                <div>
                                    <div
                                        className={`comm-main-tab ${tab === 'filter' ? 'comm-tab-slt' : ''}`}
                                        onClick={() => {
                                            if (tab === 'filter') {
                                                setTab('none')
                                            } else {
                                                setTab('filter')
                                            }
                                        }}
                                    >
                                        <svg style={{ width: '15px' }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        <span style={{ marginLeft: '8px' }}>Filters</span>
                                    </div>

                                </div>
                            </div>
                            <div style={{
                                display: 'inline-block',
                                position: 'relative',
                                textAlign: 'left',
                            }}>
                                <div
                                    className={`comm-main-tab ${tab === 'sort' ? 'comm-tab-slt' : ''}`}
                                    onClick={() => {
                                        if (tab === 'sort') {
                                            setTab('none')
                                        } else {
                                            setTab('sort')
                                        }
                                    }}
                                >
                                    {handleOrder()}
                                    <span style={{ marginLeft: '8px' }}>Creation date</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {community.bounty.length === 0 ? emptyPage() :
                <div>
                    {community.bounty.map(item =>
                        <div className='bounties-item-wrapper'>
                            <div className="bounties-item">
                                <div style={{
                                    display: 'flex',
                                    rowGap: '12px',
                                    marginBottom: '12px'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        color: 'rgb(100, 116, 139)',
                                        fontWeight: 500,
                                        fontSize: '12px',
                                        cursor: 'pointer'
                                    }}>{item.bountyType === 'Submission'
                                        ? <svg
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.21872 7.78128C8.71865 7.28136 8.04049 7.00052 7.33339 7.00052C6.62628 7.00052 5.94813 7.28136 5.44805 7.78128L2.78139 10.4479C2.52669 10.6939 2.32354 10.9882 2.18378 11.3135C2.04403 11.6389 1.97046 11.9888 1.96739 12.3429C1.96431 12.697 2.03178 13.0481 2.16586 13.3758C2.29994 13.7035 2.49795 14.0013 2.74833 14.2517C2.99871 14.502 3.29645 14.7001 3.62418 14.8341C3.9519 14.9682 4.30305 15.0357 4.65712 15.0326C5.0112 15.0295 5.36112 14.956 5.68647 14.8162C6.01181 14.6765 6.30606 14.4733 6.55205 14.2186L7.28672 13.4846M6.78139 10.2186C7.28146 10.7185 7.95962 10.9994 8.66672 10.9994C9.37382 10.9994 10.052 10.7185 10.5521 10.2186L13.2187 7.55195C13.7045 7.04901 13.9733 6.3754 13.9672 5.67621C13.9611 4.97702 13.6807 4.30819 13.1862 3.81376C12.6918 3.31934 12.023 3.03889 11.3238 3.03282C10.6246 3.02674 9.95099 3.29552 9.44805 3.78128L8.71472 4.51461"
                                                stroke="#0E9F6E"
                                                stroke-width="1.33333"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></path>
                                        </svg> : '🆓 '}
                                        {item.bountyType}
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        fontSize: '12px',
                                        color: 'rgb(100, 116, 139)'
                                    }}>
                                        • Posted by
                                        <span style={{
                                            color: 'rgb(100, 116, 139)',
                                            fontWeight: 500,
                                            fontSize: '12px',
                                            cursor: 'pointer'
                                        }}>{item.postedBy}</span>
                                        •
                                        <span style={{
                                            color: 'rgb(100, 116, 139)',
                                            fontWeight: 500,
                                            fontSize: '12px',
                                            cursor: 'pointer'
                                        }}>{item.datetime}</span>
                                    </div>
                                    <div style={{
                                        marginLeft: 'auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        columnGap: '5px'
                                    }}>
                                        <span
                                            role='img'
                                            aria-label='pushpin'
                                            style={{
                                                color: 'rgb(99, 102, 241)'
                                            }}
                                        >
                                            <svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                data-icon="pushpin"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3-15.4 12.3-16.6 35.4-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 00-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8z"
                                                ></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '12px',
                                    flexWrap: 'wrap'
                                }}>
                                    <h4 style={{
                                        margin: 0,
                                        padding: 0,
                                        color: 'rgba(0, 0, 0, .85)',
                                        display: '-webkit-box',
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        lineHeight: '28px',
                                        width: 'fit-content'
                                    }}>{item.title}</h4>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        gap: '8px',
                                    }}>
                                        {item.xp!== undefined ? <div className='bounty-status-bar'>
                                            <span>⭐️{item.xp}XP</span>
                                        </div> : ''}
                                        {item.submissions !== undefined ? <div className='bounty-status-bar'>
                                            <span>
                                                📜 <span>{item.submissions}</span> Submissions
                                            </span>
                                        </div> : ''}
                                        {item.token !== undefined ? <div className='bounty-status-bar'>
                                            <span>
                                                <img src={diamondIcon} alt="dia-icon" />
                                                {' ' + item.token} MATIC
                                            </span>
                                        </div> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>}
        </bountiesContext.Provider>
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
                >No Bounties available yet</h1>
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



export default Bounties