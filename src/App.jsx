import "./App.css";
import Header from "./components/Header";
import MovieDetails from "./components/MovieDetails";
import Movies from "./components/Movies";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-stone-900 min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
