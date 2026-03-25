import { Folder } from 'lucide-react';
import './sideBar.css';
import { Link } from "react-router-dom"

import { LayoutDashboard } from 'lucide-react';
import { User } from 'lucide-react';
import { PlusIcon } from 'lucide-react';

export default function SideBar() {
    const sizeIcon = 30;

    return (
        <div className="sidebar">

            <div className="system-title">
                <Folder size={sizeIcon} />
                <h3>HR_SYSTEM</h3>
            </div>

            <div className="nav-menu">

                {/* Lien vers dashboard la */}
                <Link to={"/"} className="nav-btn">
                   <LayoutDashboard size={sizeIcon} />
                    Dashboard
                </Link>

                {/* Lien vers employe list la */}
                <Link to={"/list"} className="nav-btn">
                    <User />
                    Employes
                </Link>

                {/* Lien vers AddEmployes la */}
                <Link to={"/add"} className="nav-btn">
                    <PlusIcon />
                    addEmployes
                </Link>



            </div>
        </div>
    );
};

