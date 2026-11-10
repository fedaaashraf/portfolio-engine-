import { Routes, Route } from "react-router-dom";
import Home from "./Padges/Home";
import Login from "./Padges/Login";
import PolishPage from "./Padges/PolishPage"
import PublishPage from"./Padges/PublishPage"
import SettingsPage from "./Padges/SettingsPage"




export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/polish" element={<PolishPage />} />
      <Route path="/publish" element={<PublishPage />} />
     

    </Routes>
  );
}