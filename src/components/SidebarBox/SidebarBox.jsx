import { useContext } from "react"
import { context } from "../Community/Community"

import './SidebarBox.scss'

const SidebarBox = (props) => {

    const { active, setActive } = useContext(context)

    return (
        <div
            className={`comm-sidebar-item ${active === props.text ? 'side-bar-active': ''}`}
            onClick={() => {
                setActive(props.text)
            }}
        >
            {props.icon !== 'none' ? <img src={props.icon} style={{ marginRight: '10px' }} /> : ''}
            {props.text}
        </div>
    )
}

export default SidebarBox