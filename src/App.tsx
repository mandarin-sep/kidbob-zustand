import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LandingPage from "./pages/LadingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/main" element={<MainPage />}></Route>
    </Routes>
  );
}

export default App;
