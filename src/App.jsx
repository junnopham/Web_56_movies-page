import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Layout from "./layouts";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.classList.add("font-sans", "bg-gray-900", "text-white");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movie/:movieId" exact element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
