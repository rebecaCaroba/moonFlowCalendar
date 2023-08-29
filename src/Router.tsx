import { Routes, Route } from "react-router-dom";
import { MoonFlow } from "./pages/MoonFlow";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./Layout/DefaultLayout";

export function Router() {
    return (
        <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/moonflow" element={<MoonFlow />} />
        </Route>
      </Routes>
    )
}

