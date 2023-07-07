import DiscoveryBodyNo1 from "../DiscoveryBodyNo1/DiscoveryBodyNo1";
import DiscoveryBodyNo2 from "../DiscoveryBodyNo2/DiscoveryBodyNo2";
import { createContext, useState } from "react";
export const Context = createContext();
const Discovery = () => {
    const [navi, setNavi] = useState("btn1");
    const [show, setShow] = useState("body2btn1");

    return(
        <Context.Provider value={({navi,setNavi,show,setShow})}>
            <DiscoveryBodyNo1/>
            <DiscoveryBodyNo2/>
        </Context.Provider>
    )
}

export default Discovery;