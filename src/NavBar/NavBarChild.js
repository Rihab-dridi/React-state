import React, {components} from 'react';
import "./NavBarChild.css";


const NavBarChild =(props)=>{
  console.log(props);
  const{Array,name}= props;
        return (
          <nav className="navbar">
          <h1 className="noun" >  {name} </h1>
          <ul  className="items">
              { Array.map((item,index)=> {

                  return (<li  key={index}><a  href="item.url">
                      {item.title}
                      </a>
                      {
                        item.drop&& <ul>
                          {item.drop.map(el=> <li> {el} </li>)}
                        </ul>
                      }
                      </li>)
                      //props.tab.drop
              })}
              {/* 
                <ul>
                <li><yfhyf/li>
                <li>bjjj,</li>
                <li>kjhhk
                  <ul>
                    <li> </li>
                    <li> </li>
                    <li> </li>
                  </ul>
                </li>
                </ul>
              */}
          </ul>
      </nav>
  )

    
}



export default NavBarChild
