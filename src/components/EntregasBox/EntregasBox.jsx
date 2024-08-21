import React from "react";
import './styles.css';
import { CardEntrega } from "../CardEntrega/CardEntrega";

export function EntregasBox(){
    return(
        <div className="entregas-container">
            <CardEntrega/>
            <CardEntrega/>
            <CardEntrega/>
        </div>
    );
}