import React, { useEffect, useRef, useState} from "react";
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
    const [logoLoaded, setLogoLoaded] = useState(false);

     // Desenhar a imagem do logo em alta resolução
     const scaleFactor = window.devicePixelRatio || 1;
     const scalePx = parseInt(width) / 14;
     const logoWidth = 38 * scaleFactor;
     const logoHeight = 38 * scaleFactor;

    useEffect(() => {
        const img = logoImg.current;
        img.src = logo;

        img.onload = () => {
            setLogoLoaded(true);
        };
    }, []);
   
    const draw = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        if (logoLoaded){
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.drawImage(logoImg.current, posX*scalePx, posY*scalePx, logoWidth, logoHeight);
            context.fill();
            context.closePath();
        }
    };

    const canvasRef = useCanvas(draw)


    return (
        <>
            <LogotipoDiv>
                <img src={logo} alt="Logo" />
            </LogotipoDiv>
            <CanvasComponent
                ref={canvasRef}
                width={width}
                height={height}
                style={style}
                {...rest}
            />
        </>
    );
};
