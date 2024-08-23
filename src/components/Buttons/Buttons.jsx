import './styles.css'
import React from 'react'
import { Trophy, ShoppingCartSimple } from '@phosphor-icons/react'

export function Buttons(){
    return(
        <div className="btn-container">
            <button><Trophy weight='light' width={20} height={20}/>Metas</button>
            <button><ShoppingCartSimple weight='light' width={20} height={22}/>Iniciar Entrega</button>
        </div>
    );
}