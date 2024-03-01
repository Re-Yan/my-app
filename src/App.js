// import Header from "./header.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="header">
      {/* <h1>Header</h1> */}
      <div className="optionRow">
        <button className="optionDiv">Home</button>
        <button className="optionDiv">About Us</button>
        <button className="optionDiv">Branches</button>
        <button className="optionDiv">Pricing</button>
      </div>
    </div>
    // <Header />;
  );
};

export default App;
