import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <div className="flex w-full justify-center items-center bg-black h-10 fixed z-20">
        <ul className="flex flex-row gap-10 font-bold text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>

      <div className="px-10 py-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
