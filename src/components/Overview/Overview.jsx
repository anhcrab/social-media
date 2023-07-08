import TitleBox from "../TitleBox/TitleBox"
import { context } from "../Community/Community"
import { useContext, useEffect } from "react"

import './Overview.scss'

const Overview = () => {
    const { active, setActive, community } = useContext(context)
    useEffect(() => {
        document.querySelector('.comm-main-about').innerHTML = community.overview.overviewDescription
    })
    return (
        <>
            <TitleBox icon={'/src/assets/Communities/comm-side-bar/overview-icon.svg'}>
                Overview
            </TitleBox>
            <div className="comm-main-box">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <h3 style={{
                        color: 'rgba(0,0,0,.85)',
                        fontWeight: 500,
                        fontSize: '17px',
                        marginBottom: '.5em',
                        marginTop: 0,
                        backgroundColor: 'white',
                        fontFamily: 'Inter,sans-serif',
                    }}>About</h3>
                </div>
                <div className="comm-main-about"></div>
            </div >
        </>
    )
}

export default Overview