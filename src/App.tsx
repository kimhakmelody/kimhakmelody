import { Routes, Route } from "react-router-dom";
import Index from "./pages/index"; 

const App = () => {
  return (
    <Routes>
      {/* ប្រើ path="*" ដើម្បីឱ្យវាក្តោបយកគ្រប់ផ្លូវទាំងអស់ ការពារការរកផ្លូវមិនឃើញ */}
      <Route path="/" element={<Index />} />
      <Route path="*" element={<Index />} /> 
    </Routes>
  );
};

export default App;
