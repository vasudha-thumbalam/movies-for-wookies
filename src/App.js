import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import "./App.css";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/details/:id" element={<Details />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
