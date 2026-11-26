import { useState } from "react"

function Skills(){

    const [skills,setSkills]=useState([])

    const handleSkills=(event)=>{
        console.log(event.target.value,event.target.checked)
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }   
    return (
        <div>
            <h3>Select your Skills</h3>
            <input onChange={handleSkills} type="checkbox" id="php" value="php"/>
            <label htmlFor="php">PHP</label>

            <br /><br />
             <input onChange={handleSkills} type="checkbox" id="JS" value="JS"/>
            <label htmlFor="JS">JS</label>

            <br /><br />
             <input onChange={handleSkills} type="checkbox" id="Node" value="Node"/>
            <label htmlFor="Node">Node</label>

            <br /><br />
             <input onChange={handleSkills} type="checkbox" id="Java" value="Java"/>
            <label htmlFor="Java">Java</label>

            <h1>{skills.toString()}</h1>
        </div>
    )
}


export default Skills