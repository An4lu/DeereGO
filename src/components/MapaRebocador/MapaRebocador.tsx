import { useEffect, useState } from 'react';
import { Canvas } from '../Canvas/Canvas';
import { GridMapa, GridSetor } from './styles';


interface Rebocador {
    carrinhos: {
        _id: string;
        PosX: number;
        PosY: number;
        Local: string;
        NomeCarrinho: string;

    };
}

interface Dado {
    rebocadores: Rebocador[];
}

export function MapaRebocador() {

    const [dados, setDados] = useState<Dado[]>([]);


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/user?role=rebocador`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    setDados(data);
                }
            })
            .catch(error => console.error("Erro ao buscar os dados:", error));
    }, []);
    console.log(dados);

    interface ImageMap {
        [key: string]: string;
    }

    const imageMap: ImageMap = {
        A: 'https://i.postimg.cc/1RMt6LG9/SETOR-A.png',
        A1: 'https://i.postimg.cc/t4p2fn1d/SAQ1.png',
        A2: 'https://i.postimg.cc/mk4HDCW8/SAQ2.png',
        A3: 'https://i.postimg.cc/m4JStKkb/SAQ3.png',
        A4: 'https://i.postimg.cc/rs9tts8c/SAQ4.png',
        B: 'https://i.postimg.cc/fRSTGy6L/SETOR-B.png',
        B1: 'https://i.postimg.cc/fTwdQcKb/SBQ1.png',
        B2: 'https://i.postimg.cc/J4Pkrs65/SBQ2.png',
        B3: 'https://i.postimg.cc/s2ZQ4wVT/SBQ3.png',
        B4: 'https://i.postimg.cc/Cx5fzw9T/SBQ4.png',
        C: 'https://i.postimg.cc/nLvVL5Vf/SETOR-C.png',
        C1: 'https://i.postimg.cc/gJFwS8jm/SCQ1.png',
        C2: 'https://i.postimg.cc/L5mJRSjW/SCQ2.png',
        C3: 'https://i.postimg.cc/Hn3VkN2k/SCQ3.png',
        C4: 'https://i.postimg.cc/v8v1h1sw/SCQ4.png',
        D: 'https://i.postimg.cc/4NSx2V2q/SETOR-D.png',
        D1: 'https://i.postimg.cc/hPyXFHvC/SDQ1.png',
        D2: 'https://i.postimg.cc/TPm1D19S/SDQ2.png',
        D3: 'https://i.postimg.cc/Hxgx4mvL/SDQ3.png',
        D4: 'https://i.postimg.cc/MTmG9Lgm/SDQ4.png',
    };

    return (
        <>
            <h1>Mapa Rebocador</h1>
            <GridMapa>
                <GridSetor>
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['A1']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['A2']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['A3']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['A4']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />

                </GridSetor>
                <GridSetor>
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['B1']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['B2']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['B3']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['B4']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />

                </GridSetor>
                <GridSetor>
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['C1']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['C2']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['C3']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['C4']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />

                </GridSetor>
                <GridSetor>
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['D1']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['D2']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['D3']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <Canvas
                        posX={10}
                        posY={40}
                        width={'100'}
                        height={'100'}
                        style={{
                            backgroundImage: `url(${imageMap['D4']})`,
                            borderRadius: '0',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                        }}
                    />

                </GridSetor>

            </GridMapa>
            
        </>
        
    )
}