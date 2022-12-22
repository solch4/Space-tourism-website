import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Destination from "./components/Destination";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
