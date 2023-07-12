import { useContext, useState } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import './Proposals.scss'
import { context } from '../Community/Community'
import emptyImg from '../../assets/Communities/comm-main-empty/no_proposal.svg'
import avatar from '../../assets/Communities/comm-main-members/Suzy_main-1671190074890.png'

const Proposals = () => {
    const { community } = useContext(context)
    const [tab, setTab] = useState('all')
    return (
        <div style={{
            overflowY: 'auto'
        }}>
            <SearchBox>
                Search Proposals
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
                            All
                        </div>
                    </div>
                    <div style={{
                        display: 'inline-block',
                        position: 'relative',
                        textAlign: 'left',
                    }}>
                        <div
                            className={`comm-main-tab ${tab === 'active' ? 'comm-tab-slt' : ''}`}
                            onClick={() => {
                                setTab('active')
                            }}
                        >
                            Active
                        </div>
                    </div>
                    <div style={{
                        display: 'inline-block',
                        position: 'relative',
                        textAlign: 'left',
                    }}>
                        <div
                            className={`comm-main-tab ${tab === 'pending' ? 'comm-tab-slt' : ''}`}
                            onClick={() => {
                                setTab('pending')
                            }}
                        >
                            Pending
                        </div>
                    </div>
                    <div style={{
                        display: 'inline-block',
                        position: 'relative',
                        textAlign: 'left',
                    }}>
                        <div
                            className={`comm-main-tab ${tab === 'closed' ? 'comm-tab-slt' : ''}`}
                            onClick={() => {
                                setTab('closed')
                            }}
                        >
                            Closed
                        </div>
                    </div>
                </div>
            </div>
            {community.proposal.length === 0 ? <div
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
                    >No Proposal available yet</h1>
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
            </div> : <div>
                {community.proposal.map(p => {
                    return (
                        <div
                            className='comm-proposal-item'
                            style={{
                                borderRadius: '16px',
                                border: '1px solid #f0f0f0',
                                marginBottom: '15px',
                                cursor: 'pointer',
                                fontFamily: 'sans-serif'
                            }}
                        >
                            <div style={{
                                padding: '16px 20px',
                                borderRadius: '16px',
                                background: 'white',
                                transition: 'all 0.2s ease 0s',
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <div>
                                        <img
                                            src={avatar}
                                            style={{
                                                width: '16px',
                                                height: '16px',
                                                marginRight: '4px',
                                            }}
                                        />
                                        <span style={{
                                            font: '500 12px / 20px sans-serif',
                                            color: 'rgb(100, 116, 139)',
                                            overflowWrap: 'break-word'
                                        }}>
                                            {p.proposalName}
                                        </span>
                                    </div>
                                    <div style={{
                                        background: 'rgb(104, 117, 245)',
                                        padding: '4px 12px',
                                        borderRadius: '18px',
                                        font: '500 13px / 20px sans-serif',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        columnGap: '12px',
                                    }}
                                    >Closed</div>
                                </div>
                                <div >
                                    <div><strong style={{
                                        fontFamily: 'sans-serif',
                                        fontSize: '16px'
                                    }}>{p.title}</strong></div>
                                    <div style={{
                                        fontFamily: 'sans-serif',
                                        fontSize: '14px',                                        
                                    }}>{p.text}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Proposals