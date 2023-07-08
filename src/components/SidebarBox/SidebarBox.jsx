import { useContext } from "react"
import { context } from "../Community/Community"

import './SidebarBox.scss'

const SidebarBox = (props) => {
    const { active, setActive } = useContext(context)
    const setIcon = () => {
        if (props.type === 'item' && props.icon !== 'none') {
            return (
                <img src={props.icon} style={{ marginRight: '10px' }} />
            )
        }
        return ''
    }
    const setArrow = () => {
        if (props.type === 'list') {
            return(
                <i 
                    className={`bi bi-chevron-${props.status === true ? 'up' : 'down'}`}
                    style={{
                        float: 'right',
                    }}
                ></i>
            )
        }
        return ''
    }
    const setHidden = () => {
        if (props.type === 'item' && props.status === false) {
            return {
                display: 'none',
            }
        }
    }
    return (
        <div
            className={`comm-sidebar-item ${
                active === props.text && props.type === 'item' ? 'side-bar-active' : ''
            }`}
            style={setHidden()}
            onClick={() => {
                setActive(props.text)
                if (props.type === 'list') {
                    props.setStatus(!props.status)
                }
            }}
        >
            {setIcon()}
            {props.text}
            {setArrow()}
        </div>
    )
}

export default SidebarBox