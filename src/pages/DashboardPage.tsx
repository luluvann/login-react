import { Link } from "react-router-dom";

function DashboardPage() {

    return (
        <>
            <div className='font-regular-color7'>You have successfully logged in! This page will be protected later!</div>
            <Link to={{
                pathname: '/',
            }}>Go back to Login page</Link>
        </>
    );

}

export default DashboardPage;