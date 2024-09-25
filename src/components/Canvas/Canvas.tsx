import React, { useEffect, useRef} from "react";
import { LogotipoDiv, CanvasComponent } from "./styles";
import logo from "../../assets/shopping-cart-fill.svg";
import { useCanvas } from "./CanvasHooks";

interface CanvasProps {
    posX: number;
    posY: number;
    width: string;
    height: string;
    style: React.CSSProperties;
}

export const Canvas: React.FC<CanvasProps> = ({ posX, posY, width, height, style, ...rest }) => {
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

    const canvasRef = useCanvas(draw)


    return (
        <>
            <LogotipoDiv>
                <img src={logo} alt="Logo" />
            </LogotipoDiv>
            <CanvasComponent
                ref={canvasRef}
                {...rest}
            />
        </>
    );
};
