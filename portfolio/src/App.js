import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Index from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path={"/contact"} element={<Contact />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
