

function App(){
  const userNames=['anil','sam','peter','bruce'];

  const userData=[
    {
      name:'Anil',
      age:'29',
      email:'anil@gmail.com',
      id:1
    },
    {
      name:'Sam',
      age:'24',
      email:'sam@gmail.com',
      id:2
    },
    {
      name:'Peter',
      age:'32',
      email:'peter@gmail.com',
      id:3
    },
    {
      name:'Bruce',
      age:'20',
      email:'bruce@gmail.com',
      id:4
    }
  ]
  return(
    <div>
      <h1>Loop in JSX with Map Function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user)=>(
            <tr key={user}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Dummy Data</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Anil</td>
            <td>anil@gmail.com</td>
            <td>29</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Anil</td>
            <td>anil@gmail.com</td>
            <td>29</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Anil</td>
            <td>anil@gmail.com</td>
            <td>29</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Anil</td>
            <td>anil@gmail.com</td>
            <td>29</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


export default App;