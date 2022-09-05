import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Table from "./Table";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/data" element={<Table />} />
      </Routes>
    </>
  );
}

export default App;
