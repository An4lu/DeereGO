import React, { useEffect, useRef, useState } from "react";
import { LogotipoDiv, CanvasComponent } from "./styles";
import logo from "../../assets/shopping-cart-fill.svg";

interface CanvasProps {
    posX: number;
    posY: number;
    img: Promise<string> | string;
    id: string;
    className: string;
    width: string;
    height: string;
}

export const Canvas: React.FC<CanvasProps> = ({ posX, posY, img, id, className, width, height, ...rest }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const logoImg = useRef<HTMLImageElement>(new Image());
    const [resolvedImg, setResolvedImg] = useState<string>(typeof img === 'string' ? img : '');

    useEffect(() => {
        if (typeof img === 'string') {
            setResolvedImg(img);
        } else {
            img.then(resolved => setResolvedImg(resolved))
                .catch(error => console.error("Erro ao carregar a imagem:", error));
        }
    }, [img]);

    const draw = (context: CanvasRenderingContext2D) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.drawImage(logoImg.current, posX, posY, 50, 50);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext("2d");
            if (context) {
                draw(context);
            }
        }
    }, [resolvedImg, posX, posY]);

    return (
        <>
            <LogotipoDiv>
                <img src={logo} alt="Logo" />
            </LogotipoDiv>
            <CanvasComponent
                ref={canvasRef}
                width={width}
                height={height}
                className={className}
                {...rest}
            />
        </>
    );
};
