import "./Search.scss";

export default function SearchBar(props) {
  return (
    <>
      <div
        style={{
          position: "relative",
          zIndex: "10000",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="blur-background"
          onClick={() => {
            // eslint-disable-next-line react/prop-types
            props.setValue(!props.value);
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top:"-80vh",
            right:"-67vw"
          }}
        >
          <div style={{display:"flex", backgroundColor:"#fff", padding:"15px 30px", borderRadius:"15px"}}>
            <i className="bi bi-search" style={{marginRight:"15px"}}></i>
            <input type="text" placeholder="Search for keywords" style={{border:"none", width:"500px"}}/>
          </div>
        </div>
      </div>
    </>
  );
}
