import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

import DetailPage from "./pages/DetailPage";
import CreatePage from "./pages/createPage";

import Sidebar from "./components/Sidebar";

const App = () => {
  return (
  <BrowserRouter>
  <div className="flex">
 <Sidebar/>
    <Routes>
      <Route path="/"element={<MainPage/>}/>
      <Route path="/tarif/:id"element={<DetailPage/>}/>
      <Route path="/ekle"element={<CreatePage/>}/>
    
    </Routes>
    </div>
  </BrowserRouter>
  );
};

export default App;