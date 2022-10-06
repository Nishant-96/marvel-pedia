import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components";
import { Home, SavedCharactersPage } from "./pages";

function App() {
  return (
    <div className="bg-[color:var(--body-bg)] h-screen">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<SavedCharactersPage />} />
      </Routes>
    </div>
  );
}

export default App;
