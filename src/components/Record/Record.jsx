import { ArrowDown } from '@phosphor-icons/react';
import './styles.css'
import React from 'react'


export function Record(){
    return(
        <div className="container-info">
            <div className="head-info">
                <h3>Informações</h3>
                <div className="icone-profile">
                    <ArrowDown size={32} weight='bold'/>
                </div>
            </div>
            <div className="info">
                <p>Status</p>
                <div className="linha"></div>
                <p>20</p>
            </div>
            <div className="info">
                <p>Status</p>
                <div className="linha"></div>
                <p>20</p>
            </div>
            <div className="info">
                <p>Status</p>
                <div className="linha"></div>
                <p>20</p>
            </div>
        </div>
    );
}