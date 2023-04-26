import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

function App() {
  return (
    <>
      <Suspense fallback={<>Downloading...</>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
