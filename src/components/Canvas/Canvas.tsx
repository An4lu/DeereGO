import React, { useEffect, useRef, useState} from "react";
import { LogotipoDiv, CanvasComponent } from "./styles";
import carrokit from "../../assets/shopping-cart-fill.svg";
import rebocador from "../../assets/person-fill.svg";
import { useCanvas } from "./CanvasHooks";

interface CanvasProps {
    posXCarro: number;
    posYCarro: number;
    posXRebocador: number;
    posYRebocador: number;
    width: string;
    height: string;
    style: React.CSSProperties;
}

export const Canvas: React.FC<CanvasProps> = ({ posXCarro, posYCarro, posXRebocador, posYRebocador,width, height, style, ...rest }) => {
    const carroImg = useRef<HTMLImageElement>(new Image());
    const rebocadorImg = useRef<HTMLImageElement>(new Image());

    const [carroLoaded, setCarroLoaded] = useState(false);
    const [rebocadorLoaded, setRebocadorLoaded] = useState(false);


     // Desenhar a imagem do logo em alta resolução
     const scaleFactor = window.devicePixelRatio || 1;
     const scalePx = parseInt(width) / 14;
     const logoWidth = 38 * scaleFactor;
     const logoHeight = 38 * scaleFactor;

    useEffect(() => {
        const img1 = carroImg.current;
        img1.src = carrokit;

        img1.onload = () => {
            setCarroLoaded(true);
        };
        const img2 = rebocadorImg.current;
        img2.src = rebocador;

        img2.onload = () => {
            setRebocadorLoaded(true);
        };
    }, []);
   
    const draw = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        if (carroLoaded) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.drawImage(carroImg.current, posXCarro*scalePx, posYCarro*scalePx, logoWidth, logoHeight);
            if (posXRebocador !== 0 && posYRebocador !== 0 && rebocadorLoaded) {
                context.drawImage(rebocadorImg.current, posXRebocador*scalePx, posYRebocador*scalePx, logoWidth, logoHeight);
            }
            context.fill();
            context.closePath();
        }
    };

    const canvasRef = useCanvas(draw)


    return (
        <>
            <LogotipoDiv>
                <img src={carrokit} alt="Logo" />
                <img src={rebocador} alt="Logo" />
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
