import { Header, Footer } from "./components";
import { Home } from "./screens";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home header={<Header />} footer={<Footer />} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
