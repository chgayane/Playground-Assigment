import { Routes, Route } from 'react-router-dom';
import SignUp from '../../pages/SignUp';
import VerificationPage from '../../pages/VerificationPage';
import Dashboard from '../../pages/Dashboard';

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/homepage/account" element={<VerificationPage />} />
            <Route path="/homepage/account/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default AppRoutes;