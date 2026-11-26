import College from "./College";
function App() {
  const collegeData = [
    {
      name: "IET Alwar",
      city: "Alwar",
      website: "www.iet.com",
      student: [
        {
          name: "Anil sidhu",
          age: "29",
          email: "anil@gmail.com",
        },
        {
          name: "Peter",
          age: "23",
          email: "peter@gmail.com",
        },
        {
          name: "Bruce",
          age: "28",
          email: "bruce@gmail.com",
        },
      ],
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "www.IIT.com",
      student: [
        {
          name: "Anil sidhu",
          age: "29",
          email: "anil@gmail.com",
        },
        {
          name: "Peter",
          age: "23",
          email: "peter@gmail.com",
        },
        {
          name: "Bruce",
          age: "28",
          email: "bruce@gmail.com",
        },
      ],
    },
    {
      name: "KCIET Hisar",
      city: "Hisar",
      website: "www.kciet.com",
      student: [
        {
          name: "Anil sidhu",
          age: "29",
          email: "anil@gmail.com",
        },
        {
          name: "Peter",
          age: "23",
          email: "peter@gmail.com",
        },
        {
          name: "Bruce",
          age: "28",
          email: "bruce@gmail.com",
        },
      ],
    },
  ];
  return (
    <div>
      <h1>Nested Looping with Component</h1>

      {
      collegeData.map((college, index) => (
        <div key={index}>
          <College college={college}/>
        </div>
      ))}
    </div>
  );
}

export default App;
