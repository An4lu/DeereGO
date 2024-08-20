import { Gear, House, Package, User } from "@phosphor-icons/react";
import { Outlet, Link } from "react-router-dom";
import React from "react";
import './styles.css';

export function Menu() {
    return (
        <nav className="menu">
            <div className="icone">
                <House size={32}></House>
                <a><Link to={`/home`}>Home</Link></a>
            </div>
            <div className="icone">
                <User size={32}></User>
                <a>Perfil</a>
            </div>
            <div className="icone">
                <Package size={32}></Package>
                <a>Entregas</a>
            </div>
            <div className="icone">
                <Gear size={32}></Gear>
                <a>Ajustes</a>
            </div>
        </nav>
    );
}