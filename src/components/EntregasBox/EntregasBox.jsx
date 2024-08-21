import React, {useEffect, useState} from "react";
import './styles.css';
import { CardEntrega } from "../CardEntrega/CardEntrega";

export function EntregasBox(){
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        fetch('https://jdu-data-api.onrender.com/rebocador')
            .then(response => response.json())
            .then(data => {
                if (data){
                    setCarros(data);
                }
            })
    }, []);
    console.log(carros)
    return(
        <div className="entregas-container">
            {carros.map(carro => (
                <CardEntrega
                    idCart={carro.id}
                    opStatus={`${carro.OpStatus}`}
                />
            ))}
        </div>
    );
}