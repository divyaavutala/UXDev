import React from "react";
import ReactDOM from "react-dom";
import Test from "./Content";
import Test2 from "./Content2";

function App() {
  return (
    <div className="App">
      <section>
        <h2>
          Apply some styles to make the content below asthetically pleasing. Use
          whatever resources you need.
        </h2>
        <p>Do not use floats or other alignment "hacks"</p>
        <p>Accessibility is key</p>
        <h3>Secondary bonus points:</h3>
        <ul>
          <li>BEM</li>
          <li>Properly structured directories</li>
          <li>
            Any new components/content using the already established structure
          </li>
        </ul>
      </section>
      <Test />
      <Test2 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
