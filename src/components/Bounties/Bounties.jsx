import { useContext, useState } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import './Bounties.scss'
import { context } from '../Community/Community'
import emptyImg from '../../assets/Communities/comm-main-empty/no_bounties.c1.svg'
import BountiesCard from '../BountiesCard/BountiesCard'

const Bounties = () => {
    const { community } = useContext(context)
    const [selected, setSelected] = useState(1)
    const [filter, setFilter] = useState(false)
    const [creationDate, setCreationDate] = useState(false)
    
    return (
        <>
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
                <div style={{
                    marginBottom: '4px',
                }}>
                    <div style={{
                        display: 'inline-block',
                        position: 'relative',
                        textAlign: 'left',
                    }}>
                        <button
                            className='comm-main-btn'
                            style={{
                                border: '1px solid rgb(226, 232, 240)',
                                borderRadius: '20px',
                                marginRight: '8px',
                                fontWeight: 500,
                                outline: 'none',
                            }}
                            onClick={() => {
                                setFilter(!filter)
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
                        </button>
                    </div>
                    <BountiesCard type='filter' state={filter} />
                    <div style={{
                        display: 'inline-block',
                        position: 'relative',
                        textAlign: 'left',
                    }}>
                        <button
                            className='comm-main-btn'
                            style={{
                                border: '1px solid rgb(226, 232, 240)',
                                borderRadius: '20px',
                                marginRight: '8px',
                                fontWeight: 500,
                                outline: 'none',
                            }}
                            onClick={() => {
                                setCreationDate(!creationDate)
                            }}
                        >
                            <svg style={{ width: '15px' }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span style={{ marginLeft: '8px' }}>Creation date</span>
                        </button>
                    </div>
                    <BountiesCard type='creation-date' state={creationDate} />
                </div>
            </div>
            {community.bounty.length === 0 ? emptyPage() : commonPage()}
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

const commonPage = () => {

    return (
        <></>
    )
}
export default Bounties