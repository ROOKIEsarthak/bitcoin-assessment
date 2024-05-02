import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import TransactionPage from "./pages/TransactionPage";
import WalletPage from "./pages/WalletPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transaction" element={<TransactionPage />} />
          <Route path="/wallet" element={<WalletPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
