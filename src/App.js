import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/ErrorPage";
import GamePage from "./pages/GamePage";
import RegistrationPage from "./pages/RegistrationPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/error/:errorCode" element={<ErrorPage />} />
      <Route path="/new" element={<RegistrationPage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}

export default App;
