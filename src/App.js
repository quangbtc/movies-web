import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "tippy.js/dist/tippy.css"; // optional
import Movies from "./pages/movies";
//Firebase
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfX2GFC3kfOLD-J77RWNqbpdRhNDiddGc",
  authDomain: "appmovies-a0a54.firebaseapp.com",
  projectId: "appmovies-a0a54",
  storageBucket: "appmovies-a0a54.appspot.com",
  messagingSenderId: "110464181903",
  appId: "1:110464181903:web:03b72df54f82d3437f32fa",
  measurementId: "G-HZTVCCF7H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/*" element={<Movies />} />
            <Route path="/tv/*" element={<Movies />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
