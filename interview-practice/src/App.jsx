import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import Interview from "./pages/Interview";

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-gray-900 text-white px-6 py-3 flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/practice">Practice</Link>
          <Link to="/interview">Interview Mode</Link>
        </nav>

        {/* Routes */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/interview" element={<Interview />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
