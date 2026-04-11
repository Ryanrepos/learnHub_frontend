import { Outlet, useLocation } from 'react-router-dom';
import CommonHeader from "../common/CommonHeader.tsx";
import {CommonFooter} from "../common/CommonFooter.tsx";

export default function MainLayout() {
    const location = useLocation();

    const isLandingPage = location.pathname === '/';

    return (
        <div className="layout-container">
            {!isLandingPage && <CommonHeader />}

            <main className="main-content">
                <Outlet />
            </main>

            <CommonFooter />
        </div>
    );
}