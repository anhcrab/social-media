import TitleBox from "../TitleBox/TitleBox"
import { context } from "../Community/Community"
import { useContext, useEffect } from "react"
import icon from '../../assets/Communities/comm-side-bar/overview-icon.svg'

import './Overview.scss'

const Overview = () => {
    const { community } = useContext(context)
    useEffect(() => {
        document.querySelector('.comm-main-about').innerHTML = community.overview.overviewDescription
    })
    return (
        <>
            <TitleBox icon={icon}>
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
                <div className="comm-main-media">
                    {
                        community.overview.tags.map(tag => {
                            if (tag === 'twitter') {
                                return (
                                    <i
                                        className="bi bi-twitter comm-main-media-icon"
                                        style={{
                                            background: 'rgb(98, 157, 255)'
                                        }}
                                    ></i>
                                )
                            } else if (tag === 'discord') {
                                return (
                                    <i 
                                        className="bi bi-discord comm-main-media-icon"
                                        style={{
                                            background: 'rgb(98, 157, 255)'
                                        }}
                                    ></i>
                                )
                            } else if (tag === 'web') {
                                return (
                                    <i 
                                        className="bi bi-globe2 comm-main-media-icon"
                                        style={{
                                            background: 'red'
                                        }}
                                    ></i>
                                )
                            }
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default Overview