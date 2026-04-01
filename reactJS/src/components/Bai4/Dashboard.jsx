import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../Bai6/AuthContext'

export default function Dashboard() {
    const { logout } = useAuth()
    return (
        <div>
            <h2>Dashboard</h2>

            <nav>
                <Link to="profile">Profile</Link> |{" "}
                <Link to="orders">Orders</Link> |{" "}
                <Link to="settings">Settings</Link>
                <button onClick={logout}>Logout</button>
            </nav>

            <hr />

            {/* Nơi hiển thị route con */}
            <Outlet />
        </div>
    )
}