import "./App.css";
import Country from "./components/Country/Country";
import Countries from "./components/Countries/Countries";
import Team from "./team";
import Users from "./Users";
import Friends from "./Friends";
import Friend from "./Friend";

function App() {
  return (
    <div>
      <h1>React World Tour</h1>
      <Friends></Friends>
      <Friend></Friend>
      <Users></Users>
      <Team></Team>
      <Country></Country>
      <Countries></Countries>
    </div>
  );
}

export default App;
