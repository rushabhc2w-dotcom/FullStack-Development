

function User({displayName,name,onclick}){

    return (
        <div>
            <button onClick={()=>displayName(name)}>Display Name</button>
            <button onClick={()=>onclick}>Get User</button>
        </div>
    )
}

export default User