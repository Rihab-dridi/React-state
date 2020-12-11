import React from "react";
import NavBarChild from "./NavBarChild";


const Items =[
    {
        title:"home",
        url:"#",      // drop:["x","y","z"]

  
    },
    {
        title:"Meet me",
        url:" #"
 
    },
    {
        title:"Contact",
        url:" #"//,
       //drop:["x","y","z"]
    }
]
const noun="flen";

const NavBarParent =()=>{

    return (
        <nav className="NavBarParent">
            <NavBarChild  Array={Items} name="PORTFOLIO" />
             
        </nav>
    )

}

export default NavBarParent