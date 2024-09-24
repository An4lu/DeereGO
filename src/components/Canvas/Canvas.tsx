import React, {useEffect, useRef} from "react";
import {useCanvas} from "./CanvasHooks";
import { LogotipoDiv, CanvasComponent } from "./styles";
import logo from "../../assets/shopping-cart-fill.svg"

interface CanvasProps {
    posX: number;
    posY: number;
    img: string;
    id: string;
    className: string;
    width: string;
    height: string;
}

export const Canvas: React.FC<CanvasProps> = ({posX, posY, img, id, className, width, height, ...rest}) => { 
    const logoImg = useRef<HTMLImageElement>(new Image());

    useEffect(() => {
        logoImg.current.src = logo;
    }, []);

    const draw = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.drawImage(logoImg.current, posX, posY, 24, 24);
        context.fill();
        context.closePath();
    };

    const canvasRef = useCanvas(draw);

    return (
        <>
            <style>
                {`
                  .class-${id}{
                        background-image: url(${img});
                    }  
                `}
            </style>
            <LogotipoDiv>
                <img src={logo} alt="" />
            </LogotipoDiv>
            <CanvasComponent ref={canvasRef}{...rest}></CanvasComponent>
        </>
    )
}