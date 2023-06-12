import { useState } from "react";
import Card from "./components/Card";
import "./styles/App.css";

function App() {
  const [selectMonthly, setSelectMonthly] = useState(true);
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="topic">Our Pricing</h1>
          <div className="row">
            <p>Annually</p>

            <label htmlFor="checkbox" className="switch">
              <input
                type="checkbox"
                id="checkbox"
                className="checkbox"
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
              />
              <div className="slider"></div>
            </label>

            <p>Monthly</p>
          </div>
        </header>
        <div className="three-cards">
          <Card
            title="Basic"
            price={selectMonthly ? "19.99" : "199.99"}
            storage="500 GB"
            userAllowed="2"
            sendUp="3"
          />
          <Card
            title="Professional"
            price={selectMonthly ? "24.99" : "249.99"}
            storage="1 TB"
            userAllowed="5"
            sendUp="10"
          />
          <Card
            title="Master"
            price={selectMonthly ? "39.99" : "399.99"}
            storage="2 TB"
            userAllowed="10"
            sendUp="20"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
