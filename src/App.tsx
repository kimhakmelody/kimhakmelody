import { Routes, Route } from "react-router-dom";
import Index from "./pages/index"; 

const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
  </Routes>
);

export default App;
