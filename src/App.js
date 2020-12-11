


import React, { Component} from 'react';
import Profile from './Profile'
import Navbar from './NavBar/navBarParent';
import './App.css';


class App extends React.Component {
   
    constructor(){ 
      super ()
      this.state={
        Person :{ fullName:"DRIDI RIHAB ",
        bio:"Hello There!",
        imgSrc: "./rhb.jpg",
        profession:"Web Developer"
        },
        show: false,
        digit:0
      
      }
    }
    

    showFunction(){
      this.setState({
        show: !this.state.show 
      })
    }
    
   
    componentDidMount = () => {     // start the life cycle of the  timer
     this.myInterval = setInterval (() => {             // the setInterval function to the myUnterval name so we can have access to it later 
       this.setState(prevState =>({                      // setInterval is a method already built in JS 
         digit: prevState.digit +1,
       }));
      }, 1000);                                           // 1000= 1s which the time that i want the state to be updated after 
    }

    

   /* componentWillUnmount = () =>{
      clearInterval (this.myInterval)
    }*/
    

    render(){
      
        return(
            <div className="App">
              <Navbar/>
              <button onClick={ () => {this.showFunction()}} > {this.state.show === true ? "Hide Profile" : "Show Profile"}</button>
             
         <div> { (this.state.show === true)?

       <div> 
        <div className="digit">  <img src="https://i.imgur.com/XGuhjhc.gif"/><span>  {this.state.digit}   </span> </div>
        <Profile fullName={this.state.Person.fullName}
                 bio={this.state.Person.bio} 
                 img={this.state.Person.imgSrc} 
                 profession={this.state.Person.profession}/>
      </div>: null }
              
        </div>
            </div>)
        }}

    


export default App