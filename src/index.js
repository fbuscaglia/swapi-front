import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Planets from "./pages/planets/Planets";
import PlanetDetail from "./pages/planets/components/PlanetDetail";
import ResidentDetail from "./pages/resident/components/ResidentDetail";
import Breadcrumbs from "./pages/planets/components/Breadcrumbs";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Breadcrumbs />
    <Routes>
      {/* redirect a la ruta planets */}
      <Route path="/" element={<Navigate to="/planets" />} />
      <Route path="planets" element={<Planets />} />
      <Route path="planets/:planetId" element={<PlanetDetail />} />
      <Route path="planets/:planetId/:id" element={<ResidentDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
