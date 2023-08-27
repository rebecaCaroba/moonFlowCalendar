import { Routes, Route } from "react-router-dom";
import { Calendar } from "./pages/Calendar";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./Layout/DefaultLayout";

export function Router() {
    return (
        <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
        </Route>
      </Routes>
    )
}

