

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
        A1: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533103/SAQ1_sh1gdl.png',
        A2: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533103/SAQ2_kqqocj.png',
        A3: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533103/SAQ3_pclm0n.png',
        A4: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533104/SAQ4_yqjxtk.png',
        B1: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533104/SBQ1_rq63ec.png',
        B2: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533104/SBQ2_ak04cv.png',
        B3: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533104/SBQ3_jnoyd6.png',
        B4: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533105/SBQ4_qghfse.png',
        C1: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533103/SCQ1_vwmdjo.png',
        C2: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533103/SCQ2_kyugwk.png',
        C3: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533104/SCQ3_swpgis.png',
        C4: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533711/SCQ4_jrhth0.png',
        D1: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533776/SDQ1_nrn444.png',
        D2: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533778/SDQ2_szkty0.png',
        D3: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533778/SDQ3_kouvmx.png',
        D4: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533105/SDQ4_immuh9.png',
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