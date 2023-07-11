import './MemberList.scss'

const MemberList = (props) => {
    const { list } = props
    const rankFilter = (rank) => {
        console.log(rank)
        if (rank === 1) {
            return (
                <img
                    src='/src/assets/Communities/comm-main-members/medal_1.svg'
                    style={{
                        marginRight: '10px',
                        width: '30px',
                    }}
                />
            )
        } else if (rank === 2) {
            return (
                <img
                    src='/src/assets/Communities/comm-main-members/medal_2.svg'
                    style={{
                        marginRight: '10px',
                        width: '30px',
                    }}
                />
            )
        } else if (rank === 3) {
            return (
                <img
                    src='/src/assets/Communities/comm-main-members/medal_3.svg'
                    style={{
                        marginRight: '10px',
                        width: '30px',
                    }}
                />
            )
        } else if (rank >= 4) {
            return (
                <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgb(119, 119, 119)',
                    borderRadius: '5rem',
                    width: '30px',
                    height: '30px',
                    color: 'rgb(119, 119, 119)',
                    marginRight: '10px',
                }}>{rank < 10 ? '0' + rank : rank}</span>
            )
        }

    }
    return (
        list.map(item =>
            <div className='comm-main-members-item'>
                <div style={{
                    cursor: 'pointer',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexFlow: 'row wrap',
                    }}>
                        {rankFilter(item.top)}
                        <img
                            src="/src/assets/Communities/comm-main-members/Suzy_main-1671190074890.png"
                            alt=""
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                marginRight: '8px',
                            }}
                        />
                        <div style={{
                            rowGap: '8px',
                        }}>
                            <div>
                                {item.memberName}
                                {item.role === 'admin' ? <span style={{ marginLeft: '4px' }}>👑</span> : ''}
                            </div>
                            <span style={{
                                fontSize: '12px',
                                fontWeight: '400',
                                color: 'rgb(100, 116, 139)',
                            }}>{item.username}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span style={{
                        fontSize: '12px',
                        color: 'rgb(100, 116, 139)',
                    }}>🔥 Lvl {item.lvl}</span>
                    <span style={{
                        fontSize: '12px',
                        color: 'rgb(226, 232, 240)',
                    }}>|</span>
                    <span style={{
                        fontSize: '12px',
                        color: 'rgb(100, 116, 139)',
                    }}>⭐️  XP {item.xp}</span>
                </div>
            </div>
        )
    )
}

export default MemberList