function Navbar({user}) {
  return (
    <nav className="navbar">

      {/* Search */}
      <div className="search">
        <span className="search-icon">🔍</span>

        <input
          type="text"
          placeholder="Search tools..."
        />
      </div>


      {/* User */}
      <div className="navbar-user">

        <button className="notification-button">
          🔔
        </button>

        <div className="sidebar-profile-logo">
            {user?.firstName?.charAt(0).toUpperCase() || "U"}
        </div>

        <div className="navbar-user-info">
          <strong>USER</strong>
          <small>Premium User</small>
        </div>

        <span className="dropdown-arrow">
          ⌄
        </span>

      </div>

    </nav>
  );
}

export default Navbar;