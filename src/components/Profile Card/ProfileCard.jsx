import React from 'react'
import './styles.css'
import { Bell } from '@phosphor-icons/react'


export function ProfileCard(){
    return (
        <div className="profile-container">
            <div className="head">
                <div className="detalhes">
                    <div className="img-text">
                        <img src="https://plus.unsplash.com/premium_photo-1682148403197-69741357d444?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Homem" className='img-profile'/>
                        <div className="text-profile">
                            <h2>Gerson Anderson</h2>
                            <p>ID : 2384784</p>
                        </div>
                    </div>   
                    <div className="icone-profile">
                        <Bell size={32}/>
                    </div>
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