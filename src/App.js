import "./App.css";
import SupetCup from "../src/Pages/SuperCup";
import Monthlyfinal from "./Pages/monthlyFinal";
import Weekendfinal from "./Pages/WeekendFinal";
// import Homepage from "./Pages/HomePage";
import Cup from "../src/Pages/Cup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cuplist from "./Pages/CupList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cuplist />
        <Routes>
          <Route exact strict path="/" element={<Cup />} />
          <Route exact strict path="/SupetCup" element={<SupetCup />} />
          <Route exact strict path="/Monthlyfinal" element={<Monthlyfinal />} />
          <Route exact strict path="/Weekendfinal" element={<Weekendfinal />} />
          {/* <Route path="" /> */}
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
