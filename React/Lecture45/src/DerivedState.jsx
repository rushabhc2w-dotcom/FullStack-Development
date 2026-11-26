import { useState } from "react";


function DerivedState(){
    const [users,setUsers]=useState([]);
    const [user,setUser]=useState('');
    const handleAddUsers=()=>{
        setUsers([...users,user])
    }
    const total = users.length;
    const last = users[users.length-1];
    const unique=[...new Set(users)].length
    
    return(
        <div>
            <h2>Total User : {total}</h2>
            <h2>Last User : {last}</h2>
            <h2>Unique Total User : {unique}</h2>

            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Add new user" />
            <button onClick={handleAddUsers}>Add User</button>
            {
                users.map((item,index)=>(
                    <h4 key={index}>{item}</h4>
                ))
            }
        </div>
    );
}
export default DerivedState