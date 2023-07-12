import { useContext } from 'react'
import './BountiesCard.scss'
import { context } from '../Community/Community'
import { bountiesContext } from '../Bounties/Bounties'

const BountiesCard = (props) => {
    const { order, setOrder } = useContext(bountiesContext)
    const { state, type } = props
    const handleOrder = () => {
        if (order === 'Desending') {
            return (
                <svg
                    style={{
                        width: '15px',
                        marginRight: '5px',
                        marginBottom: '2px',
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
        if (order === 'Ascending') {
            return (
                <svg
                    style={{
                        width: '15px',
                        marginRight: '5px',
                        marginBottom: '2px',
                    }}
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
    return (
        <div className={`comm-bounties-card${state ? '-open' : ''}`}>
            <div className="comm-bounties-card-head">
                <div className="comm-bounties-card-wrapper">
                    <div className="comm-bounties-card-head-title">
                        {type === 'filter' ? 'Filters By' : 'Sort By'}
                    </div>
                    <div className="comm-bounties-card-extra">
                        <button
                            className='bounites-extra-btn'
                            onClick={() => {
                                if (type === 'filter') {

                                } else {
                                    if (order === 'Ascending') {
                                        setOrder('Desending')
                                    } else setOrder('Ascending')
                                }
                            }}
                        >
                            {type === 'filter' ? 'Clear All' : <>
                                <span>{handleOrder()}</span>
                                <span>{order}</span>
                            </>}
                        </button>
                    </div>
                </div>
            </div>
            <div className="comm-bounties-card-body">
                {type === 'filter' ? <div>

                </div> : <div>
                    <div className="comm-bounties-card-body-container">
                        <label htmlFor="radio-1" className="comm-bounties-card-label">
                            <span className='bounties-card-radio'>
                                <input id='radio-1' className='bounties-card-radio-input' type="radio" value={true} />
                                <span className="bounties-card-radio-inner"></span>
                            </span>
                            <span style={{ padding: '0 8px' }}>Creation date</span>
                        </label>
                        <label htmlFor="radio-2" className="comm-bounties-card-label">
                            <span className='bounties-card-radio'>
                                <input id='radio-2' className='bounties-card-radio-input' type="radio" value={true} />
                                <span className="bounties-card-radio-inner"></span>
                            </span>
                            <span style={{ padding: '0 8px' }}>Bounty amount</span>
                        </label>
                        <label htmlFor="radio-3" className="comm-bounties-card-label">
                            <span className='bounties-card-radio'>
                                <input id='radio-3' className='bounties-card-radio-input' type="radio" value={true} />
                                <span className="bounties-card-radio-inner"></span>
                            </span>
                            <span style={{ padding: '0 8px' }}>Priority</span>
                        </label>
                        <label htmlFor="radio-4" className="comm-bounties-card-label">
                            <span className='bounties-card-radio'>
                                <input id='radio-4' className='bounties-card-radio-input' type="radio" value={true} />
                                <span className="bounties-card-radio-inner"></span>
                            </span>
                            <span style={{ padding: '0 8px' }}>Story point</span>
                        </label>
                        <label htmlFor="radio-5" className="comm-bounties-card-label">
                            <span className='bounties-card-radio'>
                                <input id='radio-5' className='bounties-card-radio-input' type="radio" value={true} />
                                <span className="bounties-card-radio-inner"></span>
                            </span>
                            <span style={{ padding: '0 8px' }}>Due date</span>
                        </label>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default BountiesCard