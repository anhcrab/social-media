import { useContext } from 'react'
import './CommunityMainContent.scss'
import { context } from '../Community/Community'
import TitleBox from '../TitleBox/TitleBox'

const CommunityMainContent = (props) => {
    const { active, setActive, community } = useContext(context)
    const useActive = () => {
        if (active.match(/^overview/i)) {
            return(
                <TitleBox icon={'/src/assets/Communities/comm-side-bar/overview-icon.svg'} text={'Overview'} />
            )
        }
        if (active.match(/^members/i)) {
            return(
                <TitleBox icon={'/src/assets/Communities/comm-side-bar/members-icon.svg'} text={'Members'} />
            )
        }
    }
    return (
        <div className="comm-main-wrapper">
            {useActive()}
        </div>
    )
}

export default CommunityMainContent