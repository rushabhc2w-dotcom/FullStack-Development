


function Demo(){
    const name ="Rushabh Pawar";
    const userObj ={
        name:"Rahul",
        email:"rahul@gmail.com",
        age:29
    }
const userArray =['Sam','Raj','Bruce']

let path="https://t4.ftcdn.net/jpg/02/90/84/47/360_F_290844781_V4hoIL3E291xvY5nEL7NCaWIoCIQxHfI.jpg"

    let x=10;
    let y=20;
    function fruit(){
        return "Apple"
    }
    function sum(a,b){
        return a+b
    }
    function operation(a,b, op){
        if(op=="+"){
            return a+b
        }else if(op=="-"){
            return a-b
        }else{
            return a*b
        }
    }
    return(
        <div>
            <h1>JSX with Curly Braces</h1>
            <h1>{name?name:"User not found"}</h1>
            <h1>{x+y}</h1>
            <h1>{fruit()}</h1>
            <h1>{sum(10,100)}</h1>
            <h1>{operation(20,10,"")}</h1>
            <h1>{userObj.name}</h1>
            <h1>{userObj.age}</h1>
            <h1>{userObj.email}</h1>
            <h1>{userArray[0]}</h1>
            <input type="text" value={name} id={name }/>
            <br />
            <img src={path} alt="" />
        </div>
    )
}

export default Demo