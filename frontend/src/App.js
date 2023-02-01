import HomePage from "./components/HomePage";
import SingleCard from './components/SingleCard'
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/single/:productID" element={<SingleCard />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
