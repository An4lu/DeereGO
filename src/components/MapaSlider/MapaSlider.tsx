import { Canvas } from '../Canvas/Canvas';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Carrinho {
    _id: string;
    Local: string;
    PosX: number;
    PosY: number;
}

interface Rebocador {
    carrinhos: Carrinho[];
}

interface Dado {
    rebocadores: Rebocador[];
}

export function MapaSlider() {
    const [dados, setDados] = useState<Dado[]>([]);
    useEffect(() => {
        fetch('https://deerego-back.onrender.com/user?role=rebocador')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setDados(data);
                }
            });
    }, []);

    const images = import.meta.glob('./Assets/mapa/*.png');

    function getImage(local: string): Promise<string> {
        const imageMap: Record<string, string> = {
            'A': 'SETOR A.png',
            'A1': 'SAQ1.png',
            'A2': 'SAQ2.png',
            'A3': 'SAQ3.png',
            'A4': 'SAQ4.png',
            'B1': 'SBQ1.png',
            'B2': 'SBQ2.png',
            'B3': 'SBQ3.png',
            'B4': 'SBQ4.png',
            'C1': 'SCQ1.png',
            'C2': 'SCQ2.png',
            'C3': 'SCQ3.png',
            'C4': 'SCQ4.png',
            'D1': 'SDQ1.png',
            'D2': 'SDQ2.png',
            'D3': 'SDQ3.png',
            'D4': 'SDQ4.png',
        };

        const imageName = imageMap[local];

        if (imageName && images[`./Assets/mapa/${imageName}`]) {
            return images[`./Assets/mapa/${imageName}`]().then((mod: any) => mod.default);
        }
        return Promise.reject('Imagem não encontrada');
    }

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Zoom]}
            centeredSlides={true}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            zoom={true}
            className='mySwiper'
        >
            {dados.map((dado) => {
                const rebocadores = dado.rebocadores || [];
                const carrinhos = rebocadores.length > 0 ? rebocadores[0].carrinhos : [];

                return carrinhos.length > 0 ? (
                    carrinhos.map((carrinho) => (
                        <SwiperSlide key={carrinho._id}>
                            <Canvas
                                img={getImage(carrinho.Local)}
                                posX={carrinho.PosX}
                                posY={carrinho.PosY}
                                id={carrinho._id}
                                className={`class-${carrinho._id}`}
                                width="400"
                                height="400"
                            />
                        </SwiperSlide>
                    ))
                ) : <></>
            })}
        </Swiper>
    )

}