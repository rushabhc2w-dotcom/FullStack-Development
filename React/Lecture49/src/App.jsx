import { useState } from "react";



export default function App(){

  const [data,setData]=useState(
    {
      name:'Rushabh',
      address:{
        city:'Delhi',
        country:'India'
      }
    }
  )
  const handleName=(val)=>{
    data.name=val
    setData({...data})
  }
  const handleCity=(city)=>{
    data.address.city=city;
    console.log(data);
    setData({...data,address:{...data.address}})
  }
  const handleCountry=(country)=>{
    data.address.country=country;
    setData({...data,address:{...data.address}})
  }

  return(
    <div>
      <h1>Updating Object in State</h1>
      <input type="text" placeholder="update name" onChange={(event)=>handleName(event.target.value)} />
      <br /><br />
      <input type="text" placeholder="update City" onChange={(event)=>handleCity(event.target.value)} />
      <br /><br />
      <input type="text" placeholder="update country" onChange={(event)=>handleCountry(event.target.value)} />
      <h2>Name:{data.name}</h2>
      <h2>City:{data.address.city}</h2>
      <h2>Country:{data.address.country}</h2>
    </div>
  )
}
