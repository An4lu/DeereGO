import React, {useState} from "react";
import './styles.css?v=1';
import { CaretCircleUp, ShoppingCart, CaretCircleDown } from "@phosphor-icons/react";


export function CardEntrega({idCart, opStatus}){
    const [selected, setSelected] = useState(null)
    const i = 0 ;
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return(
        <div className="card-entrega">
            <div className="head-card" onClick={() => toggle(i)}>
                <div className="left">
                    <ShoppingCart width={24} height={24} weight="bold" />
                    <div className="title-card">
                        <h2>{opStatus}</h2>
                        <p>{idCart}</p>
                    </div>
                </div>
                {
                    selected === i ? <CaretCircleUp size={32} weight="fill"/> : <CaretCircleDown size={32} weight="fill"/>
                }
            </div>
            <div className= {selected === i ? 'body-card-show' : 'body-card'}>
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