import { useRef, useEffect} from "react";

export function useCanvas(draw: (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void){
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(canvas){
            const context = canvas.getContext('2d');
            if(context){
                draw(context, canvas);
            }
        }
    }, [draw]);

    return canvasRef;
}