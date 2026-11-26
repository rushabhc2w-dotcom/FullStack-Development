const User = ({data})=>{
    return(
        <div style={
            {
                border:"1px solid green",
                padding:"10px",
                margin:"10px",
                width:"400px",
                borderRadius:"10px"
            }
        }>
            <h3>Name: <span>{data.name}</span></h3>
            <h3>Age: <span>{data.age}</span></h3>
            <h3>Email: <span>{data.email}</span></h3>
        </div>
    )
}

export default User;