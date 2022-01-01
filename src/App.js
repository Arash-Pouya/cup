import "./App.css";
import SuperCup from "./Pages/SuperCup";
import Monthlyfinal from "./Pages/monthlyFinal";
import Weekendfinal from "./Pages/WeekendFinal";
import Notfound from "../src/Pages/Notfound";
import Cup from "../src/component/Cup/Cup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CupPanel from "../src/component/CupPanel/CupPanel";
import Footer from "./component/Footer/Footer";
import Tollbar from "./component/Tolbal/Tollbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Tollbar />
        <CupPanel />
        <Routes>
          <Route exact strict path="/" element={<Cup />} />
          <Route exact strict path="/SuperCup" element={<SuperCup />} />
          <Route exact strict path="/Monthlyfinal" element={<Monthlyfinal />} />
          <Route exact strict path="/Weekendfinal" element={<Weekendfinal />} />
          <Route path="*" element={<Notfound />} />
          {/* <Route path="" /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
