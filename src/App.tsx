import { Routes, Route } from "react-router-dom";
import Index from "./pages/index"; // ប្រើ i តូច បើឈ្មោះ file គឺ index.tsx

const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
  </Routes>
);

export default App;
