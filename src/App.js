import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'tippy.js/dist/tippy.css'; // optional
function App() {
  return (
    <>
      <div className="App"> 
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>
          </BrowserRouter>
      </div>
    </>
  );
}

export default App;
