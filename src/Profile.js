import React, {components} from 'react';



const Profile =(props)=>{
 const{fullName, bio, profession, img}=props;
 const styleObject = { backgroundColor:"black", color:"white"}
    return(
     <div className="Profile" style={styleObject}>
      
      <div  style={{width:"252px", backgroundColor:"black", textAlign:"center",padding:"80px 0px 50px 70px" }}>  
      <img className= "img" src={img} alt ="photo"/>
      <h1>{fullName}</h1>
      <h1>{profession}</h1>
      <p>{bio}</p>
      </div> 
      < img src="./cover2.jpg" alt ="cover" style={{width:"1000px", paddingLeft:"0"}}/>
      </div>
      
    )
}




export default Profile;