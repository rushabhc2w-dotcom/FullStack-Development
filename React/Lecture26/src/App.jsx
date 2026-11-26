import User from "./User";

function App() {
  const userData = [
    {
      name: "Anil",
      age: "29",
      email: "anil@gmail.com",
      id: 1,
    },
    {
      name: "Sam",
      age: "24",
      email: "sam@gmail.com",
      id: 2,
    },
    {
      name: "Peter",
      age: "32",
      email: "peter@gmail.com",
      id: 3,
    },
    {
      name: "Bruce",
      age: "20",
      email: "bruce@gmail.com",
      id: 4,
    },
  ];
  return (
    <div>
      <h1>Reuse Component in Loop</h1>
      {userData.map((user) => (
        <div key={user.id}>
          <User data={user}/>
          </div>
      ))}
    </div>
  );
}

export default App;
