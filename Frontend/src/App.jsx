import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Course from "./Pages/Course";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
