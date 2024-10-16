

import { Canvas } from '../Canvas/Canvas';
import { CanvasHead } from '../Canvas/HeadCanvas';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import 'swiper/css/scrollbar';
import './slider.css';

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


export function MapaSlider() {
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
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            centeredSlides={true}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            className='mySwiper'
        >
            {dados.flatMap((dado) => {
                const rebocadores = dado.rebocadores || [];

                return rebocadores.flatMap((rebocador, index) => {
                    const carrinho = rebocador.carrinhos; // Acessa diretamente como objeto
                    console.log('Carrinho:', carrinho);  // Verifique se os carrinhos estão corretamente atribuídos

                    // Verifique se o carrinho existe
                    if (!carrinho._id) {
                        console.warn(`Rebocador ${index} não tem carrinhos com informações válidas`);
                        return null;
                    }
                    console.log('Local: ', imageMap[carrinho.Local]); // Verifique se o local está correto

                    return (
                        <SwiperSlide key={`${index}-${carrinho._id}`}>
                            <CanvasHead
                                NomeCarrinho={carrinho.NomeCarrinho}
                                Local={carrinho.Local} 
                            />
                            <Canvas
                                posX={carrinho.PosX}
                                posY={carrinho.PosY}
                                width="400"
                                height="400"
                                style={{
                                    backgroundImage: `url(${imageMap[carrinho.Local]})`,
                                }}
                            />
                        </SwiperSlide>
                    );
                });
            })}

        </Swiper>
    );
}