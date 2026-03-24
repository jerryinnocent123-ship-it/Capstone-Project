// Sidebar.jsx
import { Folder } from 'lucide-react';
import './Sidebar.css';

export default function SideBar() {
    return (
        <div className="sidebar">

            <div className="system-title">
                <Folder />
                <h3>HR_SYSTEM</h3>
            </div>

            <nav className="nav-menu">

                <button className="nav-btn">
                    <span className="nav-icon">📊</span>
                    Dashboard
                </button>

                <button className="nav-btn">
                    <span className="nav-icon">👥</span>
                    Employes
                </button>

                <button className="nav-btn">
                    <span className="nav-icon">➕</span>
                    addEmployes
                </button>

            </nav>
        </div>
    );
};

