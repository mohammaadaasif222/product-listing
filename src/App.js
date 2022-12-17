import HomePage from "./components/HomePage";
import SingleCard from "./components/SingleCard";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/single/:productID" element={<SingleCard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
