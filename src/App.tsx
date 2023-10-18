import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/login/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}>
        </Route>
        <Route path='/dashboard' element={<DashboardPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
