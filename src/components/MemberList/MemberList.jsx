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
            return(
                <img
                    src='/src/assets/Communities/comm-main-members/medal_2.svg'
                    style={{
                        marginRight: '10px',
                        width: '30px',
                    }}
                />
            )
        } else if (rank === 3) {
            return(
                <img
                    src='/src/assets/Communities/comm-main-members/medal_3.svg'
                    style={{
                        marginRight: '10px',
                        width: '30px',
                    }}
                />
            )
        } else if (rank >= 4) {}

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
                    </div>
                </div>
            </div>
        )
    )
}

export default MemberList