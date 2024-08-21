import './styles.css'
import React from 'react'
import { Trophy, ShoppingCartSimple } from '@phosphor-icons/react'

export function Buttons(){
    return(
        <div className="btn-container">
            <button><Trophy weight='bold' width={24} height={24}/>Metas</button>
            <button><ShoppingCartSimple weight='bold'width={24} height={24}/>Iniciar Entrega</button>
        </div>
    );
}