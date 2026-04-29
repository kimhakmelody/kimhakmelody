import { Routes, Route } from "react-router-dom";
import Index from "./pages/index"; // ប្រើ index (អក្សរតូច)

const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
  </Routes>
);

export default App;
