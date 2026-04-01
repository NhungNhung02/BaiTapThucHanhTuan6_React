import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>

            <nav>
                <Link to="profile">Profile</Link> |{" "}
                <Link to="orders">Orders</Link> |{" "}
                <Link to="settings">Settings</Link>
            </nav>

            <hr />

            {/* Nơi hiển thị route con */}
            <Outlet />
        </div>
    )
}