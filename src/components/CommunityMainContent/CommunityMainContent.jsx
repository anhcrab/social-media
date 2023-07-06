import { useContext } from 'react'
import './CommunityMainContent.scss'
import { context } from '../Community/Community'

const CommunityMainContent = (props) => {
    const { active, setActive, community } = useContext(context)
    return (
        <div className="col-lg-8">
            <div style={{
                float: 'right',
                width: '95%',
            }}>
                <div className="comm-main-title">
                    {active}
                </div>
            </div>
        </div>
    )
}

export default CommunityMainContent