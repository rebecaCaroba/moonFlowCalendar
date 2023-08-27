import { Routes, Route } from "react-router-dom";
import { Calendar } from "./pages/Calendar";
import { Home } from "./pages/Home";

export function Router() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    )
}