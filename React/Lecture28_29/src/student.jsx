const Student = ({ student }) => {
  return (
    <div>
      <h3>Students</h3>

      {
        student.map((item, index) => {
          return (
            <ul key={index}>
              <li>Name: {item.name}</li>
            </ul>
          )
        })
      }
    </div>
  );
};

export default Student;