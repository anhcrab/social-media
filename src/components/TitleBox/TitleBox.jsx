
import './TitleBox.scss'

const TitleBox = (props) => {
    
    return(
        <div className="comm-box-wrapper">
            <img src={props.icon} style={{ marginRight: '10px' }} />
            {props.text}
        </div>
    )
}

export default TitleBox