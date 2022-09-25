import Home from "./pages/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Profile from "./components/profile/Profile"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Home /> */}
        </Route>
        <Route path="/login" element={<Login />}>
          {/* <Login /> */}
        </Route>
        <Route path="/register" element={<Register />}>
          {/* <Register /> */}
        </Route>
        <Route path="/profile/:username" element={<Profile />}>
          {/* <Profile /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
