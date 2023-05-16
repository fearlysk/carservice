import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import Auth from "./pages/Auth/Auth";
import Repair from "./pages/Repair/Repair";
import Profile from "./pages/Profile/Profile";
import routes from "./constants/routes";
import './App.scss';
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.HOME} element={<Home/>} />
        <Route path={routes.LOGIN} element={<Auth />} />
        <Route path={routes.REGISTRATION} element={<Auth />} />
        <Route path={routes.REPAIR} element={<Repair />} />
        <Route path={routes.USER_PROFILE} element={<Profile />} />
        <Route path={routes.ADMIN} element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
