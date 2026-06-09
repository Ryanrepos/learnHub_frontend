import { Outlet, Navigate } from 'react-router-dom';
import AdminSidebar from '../../components/Admin/AdminSidebar.tsx';
import { StyledAdminLayout } from './AdminLayout.ts';
import { useAuthStore } from '../../store/auth.store.ts';

export default function AdminLayout() {
    const { user } = useAuthStore();

    // Role check - enable this after you have admin users
    // if (user?.role !== 'admin') {
    //     return <Navigate to="/" replace />;
    // }

    return (
        <StyledAdminLayout>
            <AdminSidebar />
            <main className="admin-content">
                <header className="admin-header">
                    <h1>Admin Panel</h1>
                    <div className="user-info">
                        <img 
                            src="https://i.pravatar.cc/150?u=admin" 
                            alt="Admin" 
                            className="avatar" 
                        />
                        <span className="name">{user?.firstName || 'Admin'}</span>
                    </div>
                </header>
                <Outlet />
            </main>
        </StyledAdminLayout>
    );
}
