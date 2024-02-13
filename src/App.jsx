import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./layout/Layout";

// using object
// const router = createBrowserRouter([
//   {
//     path: "/home",
//     element: <Home />,
//   },
//   {
//     path: "/detail/:id",
//     element: <Detail />,
//   },
// ]);

function App() {
  return (
    <Layout>
      {/* using object */}
      {/* <RouterProvider router={router} /> */}

      {/* usign jsx */}
      <Routes>
        {/* navigate for redirecting */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Layout>
  );
}

export default App;
