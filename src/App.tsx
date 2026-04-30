import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index"; // ឆែកអក្សរ i ឱ្យច្បាស់

const App = () => {
  return (
    <BrowserRouter basename="/kimhakmelody">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
