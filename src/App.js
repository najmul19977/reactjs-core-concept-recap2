import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
       <LoadPost></LoadPost>
      <District name="mymensingh" spacial="Nothing" ></District>
      <District name ="Dhaka" spacial="foods"></District>
      <District name = "sylhet" spacial="cha bagan"></District>
     
      
    </div>
  );
}

function LoadPost(){
  const [users,setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    //.then(data=>console.log(data))
    .then(data=>setUser(data));
    
    
  },[])
  
  return(
    
    <div className='user-main'>
     <h1> user:{users.length}</h1>
     {
      
      users.map(user=><User name={user.name} email={user.email} username={user.username}></User>)

     }
    </div>
    
  )
}

function User(props){
  return(
    <div className='user-info'>
      <h2>Name: {props.name}</h2>
      <h3>User-Name:{props.username}</h3>
      <h2>Email:{props.email}</h2>

    </div>
  )
}
function District(props){
  const [power,setPower] = useState(1);
  const BoostPower = () =>{
    const newPower = power*2;
    setPower(newPower);
  }
  return(
    <div className='district'>
      <h2>Name:{props.name}</h2>
      <p>spacialty:{props.spacial}</p>
      <h2>power:{power}</h2>
      <button onClick={BoostPower}>BOOST POWER</button>

    </div>
  )
}

export default App;
