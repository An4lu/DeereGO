import './index.css';
import { HouseSimple, MapTrifold, Toolbox, UserCircle } from '@phosphor-icons/react';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='logo-sidebar'>
                <img src='Logo-DeereGo.svg' />
            </div>
            <div className='conteudo-sidebar'>
                <div className='home-sidebar'>
                    <HouseSimple size={30} weight='fill' />
                    <a href='#'>VISÃO GERAL</a>
                </div>
                <div className='mapa-sidebar'>
                    <MapTrifold size={30} weight='fill' />
                    <a href='#'>MAPA</a>
                </div>
                <div className='carrokits-sidebar'>
                    <Toolbox size={30} weight='fill' />
                    <a href='#'>CARRO-KITS</a>
                </div>
                <div className='perfil-sidebar'>
                    <UserCircle size={30} weight='fill' />
                    <a href='#'>PERFIL</a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar