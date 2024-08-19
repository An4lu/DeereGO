import './styles.css'
import React from 'react'
import { Trophy, ShoppingCartSimple } from '@phosphor-icons/react'

export function Buttons(){
    return(
        <div className="btn-container">
            <button><Trophy weight='bold'/>Metas</button>
            <button><ShoppingCartSimple weight='bold'/>Iniciar Entrega</button>
        </div>
    );
}