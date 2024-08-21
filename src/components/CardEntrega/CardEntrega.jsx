import React from "react";
import './styles.css';
import { ShoppingCart } from "@phosphor-icons/react";
import { CaretDown } from "@phosphor-icons/react";

export function CardEntrega(){
    return(
        <div className="card-entrega">
            <div className="head-card">
                <div className="left">
                    <ShoppingCart width={24} height={24} weight="bold" />
                    <div className="title-card">
                        <h2>Carrinho 01</h2>
                        <p>Tipo A</p>
                    </div>
                </div>
                <CaretDown width={24} height={24} weight="bold" />
            </div>
            <div className="body-card">
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