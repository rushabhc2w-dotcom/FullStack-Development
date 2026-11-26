import { useState } from "react";
import "./App.css";

function App() {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #cccccc3b",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px",
    backgroundColor: "white",
    color: "black",
  });

  const [grid, setGrid] = useState(true);

  const updateTheme = (bgColor, textColor) => {
    setCardStyle({
      ...cardStyle,
      backgroundColor: bgColor,
      color: textColor,
    });
  };

  return (
    <>
      <h1 style={{ color: "red" }}>
        Dynamic and Conditional Inline Style
      </h1>

      <button onClick={() => updateTheme("#aaa", "red")}>
        Gray Theme
      </button>

      <button onClick={() => updateTheme("white", "black")}>
        Default Theme
      </button>

      <button onClick={() => setGrid(prev => !prev)}>
        Toggle Grid
      </button>

      <div
        style={{
          display: grid ? "flex" : "block",
          flexWrap: "wrap",
        }}
      >
        {
          Array.from({ length: 15 }).map((_, index) => (
            <div key={index} style={cardStyle}>
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg"
                alt="Profile"
                style={{ width: "200px" }}
              />

              <div style={{ padding: "5px" }}>
                <h4>Rushabh Pawar</h4>
                <p>Software Developer</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;