import React from 'react'
import './styles.css'
import { Bell } from '@phosphor-icons/react'

export function ProfileCard(){
    return (
        <div className="profile-container">
            <div className="head">
                <div className="detalhes">
                    <div className="img-profile">
                        <p>.</p>
                    </div>
                    <div className="text-profile">
                        <h2>Gerson Anderson</h2>
                        <p>ID : 2384784</p>
                    </div>
                </div>
                <div className="icone-profile">
                    <Bell size={32}/>
                </div>
            </div>
            <div className="bottom">
                <div className="text">
                    <p>Carros-Kit Entregues</p>
                    <h2>17</h2>
                </div>
                <button className='btn-historic'>Histórico</button>
            </div>
        </div>
    );
}