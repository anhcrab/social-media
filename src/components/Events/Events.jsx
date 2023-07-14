import SearchBox from '../SearchBox/SearchBox'
import emptyImg from '../../assets/Communities/comm-main-empty/eventsFeedEmpty.svg'
import './Events.scss'
import { useState } from 'react'
import TitleBox from '../TitleBox/TitleBox'
import icon from '../../assets/Communities/comm-side-bar/events.svg'

const Events = () => {
    const [selected, setSelected] = useState(1)
    return (
        <>
            <div className="comm-title-box-container">
                <TitleBox icon={icon}>
                    Events
                </TitleBox>
            </div>
            <SearchBox>
                Search Events
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
                        className={`events-state-filter ${selected === 1 ? 'bounties-state-filter-selected' : ''}`}
                        onClick={() => {
                            setSelected(1)
                        }}
                    >Upcoming</span>
                    <span
                        className={`events-state-filter ${selected === 2 ? 'bounties-state-filter-selected' : ''}`}
                        onClick={() => {
                            setSelected(2)
                        }}
                    >Past</span>
                </div>
            </div>
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
        </>
    )
}

export default Events