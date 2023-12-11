import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./layout/Layout";
import { CheckoutProvider } from "./context/CheckoutContext";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <CheckoutProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </CheckoutProvider>
  );
}

export default App;
