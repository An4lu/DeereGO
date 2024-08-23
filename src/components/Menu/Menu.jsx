import { House, Package, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import React from "react";
import './styles.css';

export function Menu() {
    return (
        <nav className="menu">
            <div className="icone-active">
                <House size={38} weight="fill"></House>
                <Link to={`/`}>Home</Link>
            </div>
            <div className="icone">
                <User size={38} weight="fill" ></User>
                <Link to={`/perfil`}>Perfil</Link>
            </div>
            <div className="icone">
                <Package size={38} weight="fill"></Package>
                <Link to={`/entregas`}>Entregas</Link>
            </div>
        </nav>
    );
}