import { useState } from "react";

export default function App() {

    const [data, setData] = useState([
        "anil", "sam", "peter", "tony"
    ]);

    const [dataDetails, setDataDetails] = useState([
        { name: "anil", age: "29" },
        { name: "sam", age: "35" },
        { name: "peter", age: "33" },
    ]);

    const handleUser = (name) => {
        setData(data.map((item, index) =>
            index === data.length - 1 ? name : item
        ));
    };

    const handleAge = (age) => {
        setDataDetails(dataDetails.map((item, index) =>
            index === dataDetails.length - 1
                ? { ...item, age: age }
                : item
        ));
    };

    return (
        <div>
            <h1>Updating Array in State</h1>

            <input
                type="text"
                placeholder="Enter last user name"
                onChange={(e) => handleUser(e.target.value)}
            />

            {
                data.map((item, index) => (
                    <h3 key={index}>{item}</h3>
                ))
            }

            <hr />

            <input
                type="text"
                placeholder="Enter your age"
                onChange={(e) => handleAge(e.target.value)}
            />

            {
                dataDetails.map((item, index) => (
                    <h4 key={index}>
                        {item.name}: {item.age}
                    </h4>
                ))
            }
        </div>
    );
}