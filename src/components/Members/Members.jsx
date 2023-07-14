import { useContext, useState } from "react"
import TitleBox from "../TitleBox/TitleBox"
import './Members.scss'
import { context } from "../Community/Community"
import MemberList from "../MemberList/MemberList"
import icon1 from '../../assets/Communities/comm-side-bar/members-icon.svg'

const Members = (props) => {
    const { icon, text } = props
    const { community } = useContext(context)
    const [timechoice, setTimechoice] = useState('all-time')
    return (
        <>
            <TitleBox icon={icon1}>
                Members
            </TitleBox>
            <div 
                className="comm-main-box"
                style={{
                    paddingBottom: '0',
                }}
            >
                <div style={{
                    display: 'flex',
                    padding: '0 20px 12px 0',
                    font: '600 17px / 24px sans-serif',
                    fontWeight: '700',
                    opacity: 0.9,
                    alignItems: 'center',
                }}>
                    Members
                    <div style={{
                        font: '500 14px / 20px sans-serif',
                        color: 'rgb(100, 116, 139)',
                        margin: '0px 12px',
                        fontWeight: '600',
                    }}>{community.members - 1}</div>
                    <svg
                        width="18px"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            cursor: "pointer",
                        }}
                    >
                        <path
                            d="M21 21L15 15M17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                            stroke="#64748B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px 20px',
                        backgroundColor: 'rgb(249, 250, 251)',
                        fontSize: '13px',
                        fontFamily: 'Inter san-serif',
                        margin: '0 -20px'

                    }}
                >
                    <span style={{
                        color: 'black',
                        cursor: 'pointer',
                    }}>All time</span>
                    <span style={{
                        display: 'inline-block',
                        height: '5px',
                        width: '5px',
                        borderRadius: '5rem',
                        backgroundColor: 'rgb(156, 163, 175)',
                        margin: '0 10px',
                    }}
                    ></span>
                    <span style={{
                        color: 'rgb(156, 163, 175)',
                        cursor: 'pointer',
                    }}
                    >Monthly</span>
                    <span style={{
                        display: 'inline-block',
                        height: '5px',
                        width: '5px',
                        borderRadius: '5rem',
                        backgroundColor: 'rgb(156, 163, 175)',
                        margin: '0 10px',
                    }}
                    ></span>
                    <span style={{
                        color: 'rgb(156, 163, 175)',
                        cursor: 'pointer',
                    }}>Weekly</span>
                </div>
                <div className="comm-main-members">
                    <MemberList list={community.membersList} />
                </div>
            </div>
        </>
    )
}

export default Members