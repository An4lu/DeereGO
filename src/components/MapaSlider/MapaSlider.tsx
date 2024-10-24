

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


interface Carro {
    _id: string;
    NomeCarrinho: string;
    Local: string;
    Peças: string;
    Bloco: string;
    StatusCapacidade: string;
    PosX: number;
    PosY: number;
}


export function MapaSlider() {
    const [carrinhos, setCarrinhos] = useState<Carro[]>([]);


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/rebocador/entrega/carrinho`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    setCarrinhos(data);
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
            spaceBetween={50}
        >
            {carrinhos.map(carrinho => (
                <SwiperSlide key={`${carrinho._id}`}>
                    <CanvasHead
                        NomeCarrinho={carrinho.NomeCarrinho}
                        Local={carrinho.Local}
                    />
                    <Canvas
                        posXCarro={carrinho.PosX}
                        posYCarro={carrinho.PosY}
                        posXRebocador={0}
                        posYRebocador={0}
                        width="400"
                        height="500"
                        style={{
                            backgroundImage: `url(${imageMap[carrinho.Local]})`,
                        }}
                    />
                </SwiperSlide>
            ))}


        </Swiper>
    );
}