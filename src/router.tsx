import { Route, Routes } from "react-router-dom";
import App from "./App";
import Profile from "./components/profile";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<App />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
