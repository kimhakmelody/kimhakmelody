import { Routes, Route } from "react-router-dom";
import Index from "./pages/index.tsx"; // បន្ថែម .tsx នៅខាងចុងឱ្យច្បាស់

const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
  </Routes>
);

export default App;
