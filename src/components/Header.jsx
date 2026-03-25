import "../components/styles/header.css"
import {UserRound} from 'lucide-react';


export default function Header({title}){
   const sizeIcon = 20;

    return(
        <>
        <div className="header-containers">

    
            
            {/* sa se an tit la */}
            <div className="title">
                <h1>{title}</h1>
            </div>

            {/* sa pati connexion an */}
            <div className="connexionBar" title="Unknow">
               <UserRound size={sizeIcon} />
            </div>
        </div>
        
        </>
    )
}