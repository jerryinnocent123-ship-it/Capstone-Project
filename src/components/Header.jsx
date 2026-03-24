import "../components/styles/header.css"
import { UserRound } from 'lucide-react';
import { Folder } from "lucide-react";

export default function Header(){
    const sizeIcon =20;

    return(
        <>
        <div className="header-containers">

    
            
            {/* sa se an tit la */}
            <div className="title">
                <h1>Employe Dashboard</h1>
            </div>

            {/* sa pati connexion an */}
            <div className="connexionBar" title="Unknow">
               <UserRound size={sizeIcon} />
            </div>
        </div>
        
        </>
    )
}