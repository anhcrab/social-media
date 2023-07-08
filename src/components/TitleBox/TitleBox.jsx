
import './TitleBox.scss'

const TitleBox = (props) => {
    
    return(
        <div className="comm-box-wrapper">
            <img src={props.icon} style={{ marginRight: '10px' }} />
            {props.children}
        </div>
    )
}

export default TitleBox