import { useState } from "react";

function RadioDropdown(){
    const [gender,setGender] = useState('male');
    const [city,setCity] = useState('delhi')
    return(
        <div>
            <h1>Handle Radio and Dropdown</h1>
            <h4>Select Gender</h4>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value={"male"} checked={gender == 'male'} id="male" />
            <label htmlFor="male">Male</label>

            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value={"female"} checked={gender == 'female'} id="female" />
            <label htmlFor="male">Female</label>
            <h2>Select Gender :{gender}</h2>
            <br /><br /><br /><br />
            <select onChange={(event)=>setCity(event.target.value)} defaultValue={"delhi"}>
                <option value="noida">Noida</option>
                <option value="gurgaon">Gurgaon</option>
                <option value="delhi">Delhi</option>
            </select>
            <h2>Selected City: {city}</h2>
        </div>
    )
}

export default RadioDropdown;