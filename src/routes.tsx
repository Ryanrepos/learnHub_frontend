import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import LoginPage from "./pages/LoginPage.tsx";
import SignUpPage from "./pages/SignupPage.tsx";
import VerifyPage from "./pages/VerifyPage.tsx";
import HomeStudent from './pages/HomeStudent.tsx';
import { LandingPage } from './pages/LandingPage.tsx';
import Profile from './pages/Profile.tsx';
import StudentDashboard from './pages/StudentDashboard.tsx';
import MyCourses from './components/CoursesStudent/MyCourses.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
        ],
    },

    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <SignUpPage />,
            },
             {
                path: 'verify-email',
                element: <VerifyPage />,
            },
        ],
    },

    {
        path: '/student-home',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomeStudent />,
            },
            {
                path: 'update-profile',
                element: <Profile />,
            },
            {
                path: 'dashboard',
                element: <StudentDashboard />,
            },
            {
                path: 'my-courses',
                element: <MyCourses />,
            }
        ],

    }
]);