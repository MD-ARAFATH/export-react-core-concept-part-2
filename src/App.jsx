import "./App.css";
import Country from "./components/Country/Country";
import Countries from "./components/Countries/Countries";
import Team from "./team";

function App() {
  return (
    <div>
      <h1>React World Tour</h1>
      <Team></Team>
      <Country></Country>
      <Countries></Countries>
    </div>
  );
}

export default App;
