import "./App.css";
import { Navigation } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div className="bg-[color:var(--body-bg)] h-screen">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
