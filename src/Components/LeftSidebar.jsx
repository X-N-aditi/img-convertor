function LeftSidebar({ user }) {
    return (
        <aside className="left-sidebar">

            {/* Logo */}
            <div className="logo">
                <div className="logo-box">✦</div>

                <div>
                    <h2>x1conv</h2>
                    <p>Image Converter</p>
                </div>
            </div>

            {/* Profile */}
            <div className="sidebar-profile">
                <div className="sidebar-profile-logo">
                    {user?.firstName?.charAt(0).toUpperCase() || "U"}
                </div>

                <div>
                    <h3>{user?.firstName || "USER"}</h3>
                    <p>Premium User</p>
                </div>
            </div>

            {/* Menu */}
            <div className="menu">

                <div className="menu-item active">
                    🏠
                    <span>Dashboard</span>
                </div>

                <div className="menu-item">
                    👤
                    <span>Profile</span>
                </div>

                <div className="menu-item">
                    🔔
                    <span>Notifications</span>
                    <b>4</b>
                </div>

                <div className="menu-item">
                    ⚙️
                    <span>Settings</span>
                </div>

                <div className="menu-item">
                    ❔
                    <span>Help & Support</span>
                </div>

            </div>

            {/* Premium */}
            <div className="premium">

                <h3>👑 Go Premium</h3>

                <p>
                    Unlock unlimited
                    conversions and
                    premium features.
                </p>

                <button>
                    Upgrade Now →
                </button>

            </div>

        </aside>
    );
}

export default LeftSidebar;