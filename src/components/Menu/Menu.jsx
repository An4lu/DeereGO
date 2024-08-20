import { Gear, House, Package, User } from "@phosphor-icons/react";
import { Outlet, Link } from "react-router-dom";
import React from "react";
import './styles.css';

export function Menu() {
    return (
        <nav className="menu">
            <div className="icone">
                <House size={32}></House>
                <a><Link to={`/`}>Home</Link></a>
            </div>
            <div className="icone">
                <User size={32}></User>
                <a><Link to={`/perfil`}>Perfil</Link></a>
            </div>
            <div className="icone">
                <Package size={32}></Package>
                <a><Link to={`/entregas`}>Entregas</Link></a>
            </div>
            <div className="icone">
                <Gear size={32}></Gear>
                <Link to={`/ajustes`}>Ajustes</Link>
            </div>
        </nav>
    );
}