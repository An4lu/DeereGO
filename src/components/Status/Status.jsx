import './styles.css'
import React from 'react'
import { MapPin, Check, Question } from '@phosphor-icons/react'

export function Status(){
    return(
        <div className="status-container">
            <div className="head">
                <div className="text">
                    <h3>Entrega Atual</h3>
                    <p>Carrinhos: 002, 023, 033 <Question size={16}/></p>
                </div>
                <div className="btn-box">
                    <button>Finalizar<Check weight='bold' size={24}/></button>
                    <p>00h:13m:23s</p>
                </div>
            </div>
            <div className="bottom">
                <div className="text">
                    <h3>Enviar Para</h3>
                    <p><MapPin size={16}/>Corredor ABC</p>
                </div>
            </div>

        </div>
    );
}