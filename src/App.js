import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "tippy.js/dist/tippy.css"; // optional
import Movies from "./pages/movies";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie" element={<Movies />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
