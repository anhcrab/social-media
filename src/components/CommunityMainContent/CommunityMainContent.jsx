import { useContext } from 'react'
import './CommunityMainContent.scss'
import { context } from '../Community/Community'
import Overview from '../Overview/Overview'
import Members from '../Members/Members'
import { Link, Route, Routes, useLocation } from 'react-router-dom'

const CommunityMainContent = (props) => {
    const { active, setActive } = useContext(context)
    
    const useActive = () => {
        if (active.match(/overview/i)) {
            return(
                <Link to={'/app/dao/giveth/1/overview'} />
            )
        }
        if (active.match(/members/i)) {
            return(
                <Link to={'/app/dao/giveth/1/members'} />
            )
        }
        if (active.match(/modules/i)) {
            
        }
    }
    return (
        <div className="comm-main-wrapper">
            {useActive()}
            <Routes>
                <Route path='/' element={<Overview />} />
                <Route path='overview' element={<Overview />} />
                <Route path={`${useLocation().pathname}/members`} element={<Members />} />
                <Route />
            </Routes>
        </div>
    )
}

export default CommunityMainContent