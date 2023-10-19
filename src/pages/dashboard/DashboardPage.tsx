import { Link } from "react-router-dom";
import './DashboardPage.scss'

function DashboardPage() {

    return (
        <div className='dashboard'>
            <div className='font-regular-color7'>You have successfully logged in! This page will be protected later!</div>
            <Link to={{
                pathname: '/login-react',
            }}>Go back to Login page</Link>
        </div>
    );

}

export default DashboardPage;