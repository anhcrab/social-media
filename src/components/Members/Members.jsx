import TitleBox from "../TitleBox/TitleBox"

const Members = (props) => {
    const { icon, text } = props
    return (
        <>
            <TitleBox icon={'/src/assets/Communities/comm-side-bar/members-icon.svg'}>
                Members
            </TitleBox>
        </>
    )
}

export default Members