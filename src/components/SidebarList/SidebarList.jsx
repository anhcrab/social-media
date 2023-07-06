
const SidebarList = (props) => {
    return (
        <ul>
            {props.list.map(item =>
                <li>{item.theme} {item.count !== undefined ? `(${item.count})` : ''}</li>
            )}
        </ul>
    )
}

export default SidebarList