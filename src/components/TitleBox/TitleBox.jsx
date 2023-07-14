import { useContext } from 'react'
import './TitleBox.scss'
import { context } from '../Community/Community'

const TitleBox = (props) => {
    const { mobileStatus, setMobileStatus } = useContext(context)
    return(
        <div className="comm-box-wrapper">
            <i className="bi bi-list nav-mb" onClick={() => {
                setMobileStatus(!mobileStatus)
            }}></i>
            <img src={props.icon} style={{ marginRight: '10px' }} />
            {props.children}
        </div>
    )
}

export default TitleBox