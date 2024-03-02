import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./layout/Layout";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import PrivateRoutes from "./components/route/PrivateRoutes";
import GuestRoutes from "./components/route/GuestRoutes";
import AdminRoutes from "./components/route/AdminRoutes";
import Admin from "./pages/Admin";

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<GuestRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        <Route element={<AdminRoutes />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
