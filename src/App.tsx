import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LoginPage />}>
    //     </Route>
    //     <Route path='/dashboard' element={<DashboardPage />}>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <LoginPage></LoginPage>
  );
}

export default App;
