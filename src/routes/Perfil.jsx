import { Menu } from "../components/Menu/Menu";
import { ProfileCard } from "../components/Profile Card/ProfileCard";
import { Record } from "../components/Record/Record";
import { Trophy} from '@phosphor-icons/react'
export function Perfil(){
    return(
        <>
            <ProfileCard/>
            <div className="btn-container">
                <button><Trophy weight='bold'/>Metas</button>
            </div>
            <Record/>
            <Menu/>
        </>
        
    );
}