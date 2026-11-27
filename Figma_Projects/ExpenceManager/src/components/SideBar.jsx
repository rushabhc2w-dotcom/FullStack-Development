import {
  LayoutDashboard,
  CirclePlus,
  ArrowLeftRight,
  LayoutGrid,
  Settings,
  LogOut
} from "lucide-react";

import "../styles/Layout.css";

function SideBar({ activePage, setActivePage, onLogout }) {

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard
    },
    {
      name: "Add Expense",
      icon: CirclePlus
    },
    {
      name: "Transactions",
      icon: ArrowLeftRight
    },
    {
      name: "Categories",
      icon: LayoutGrid
    },
    {
      name: "Settings",
      icon: Settings
    }
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <img src="/images/wallet.png" alt="Wallet" />
        <h2>Expense Manager</h2>
      </div>

      <nav className="sidebar-menu">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`menu-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );

        })}

      </nav>

      <button
        className="logout-button"
        onClick={onLogout}
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>

    </aside>
  );
}

export default SideBar;