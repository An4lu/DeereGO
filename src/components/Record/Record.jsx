import {CaretCircleUp, CaretCircleDown } from '@phosphor-icons/react';
import './styles.css'
import React, { useState } from 'react'

export function Record(){
    const [selected, setSelected] = useState(null)
    const i = 0 ;
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return(
        <div className="container-info">
            <div className="head-info" onClick={() => toggle(i)}>
                <h3>Informações</h3>
                <div className="icone-profile">
                    {
                        selected === i ? <CaretCircleUp size={32} weight="fill"/> : <CaretCircleDown size={32} weight="fill"/>
                    }
                </div>
            </div>
            <div className={selected === i ? 'body-card-show' : 'body-card'}>
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
        </div>
    );
}