import "./App.css";
import SuperCup from "../src/Pages/SuperCup";
import Monthlyfinal from "./Pages/monthlyFinal";
import Weekendfinal from "./Pages/WeekendFinal";
// import Homepage from "./Pages/HomePage";
import Cup from "../src/Pages/Cup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tollbar from "./Pages/Tollbar";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Tollbar />
        <Routes>
          <Route exact strict path="/" element={<Cup />} />
          <Route exact strict path="/SuperCup" element={<SuperCup />} />
          <Route exact strict path="/Monthlyfinal" element={<Monthlyfinal />} />
          <Route exact strict path="/Weekendfinal" element={<Weekendfinal />} />
          {/* <Route path="" /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
