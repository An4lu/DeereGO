// //import images setor a
// import SetorA from '../../assets/mapa/SETOR A.png';
// import SetorAQ1 from '../../assets/mapa/SAQ1.png';
// import SetorAQ2 from '../../assets/mapa/SAQ2.png';
// import SetorAQ3 from '../../assets/mapa/SAQ3.png';
// import SetorAQ4 from '../../assets/mapa/SAQ4.png';
// //import images setor b
// import SetorB from '../../assets/mapa/SETOR B.png';
// import SetorBQ1 from '../../assets/mapa/SBQ1.png';
// import SetorBQ2 from '../../assets/mapa/SBQ2.png';
// import SetorBQ3 from '../../assets/mapa/SBQ3.png';
// import SetorBQ4 from '../../assets/mapa/SBQ4.png';
// //import images setor c
// import SetorC from '../../assets/mapa/SETOR C.png';
// import SetorCQ1 from '../../assets/mapa/SCQ1.png';
// import SetorCQ2 from '../../assets/mapa/SCQ2.png';
// import SetorCQ3 from '../../assets/mapa/SCQ3.png';
// import SetorCQ4 from '../../assets/mapa/SCQ4.png';
// //import images setor d
// import SetorD from '../../assets/mapa/SETOR D.png';
// import SetorDQ1 from '../../assets/mapa/SDQ1.png';
// import SetorDQ2 from '../../assets/mapa/SDQ2.png';
// import SetorDQ3 from '../../assets/mapa/SDQ3.png';
// import SetorDQ4 from '../../assets/mapa/SDQ4.png';

import { Canvas } from '../Canvas/Canvas';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import 'swiper/css/scrollbar';
import './slider.css';




interface Carrinho {
    _id: string;
    Local: string;
    PosX: number;
    PosY: number;
}

interface Rebocador {
    carrinhos : Carrinho[];
}

interface Dado {
    rebocadores : Rebocador[];
}

// function getImageMapa(local: string): string{
//     console.log(local)
//     if(local === 'SETOR A'){
//         return SetorA;
//     }
//     if(local === 'A1'){
//         return SetorAQ1;
//     }
//     if(local === 'A2'){
//         return SetorAQ2;
//     }
//     if(local === 'A3'){
//         return SetorAQ3;
//     }
//     if(local === 'A4'){
//         return SetorAQ4;
//     }
//     if(local === 'SETOR B'){
//         return SetorB;
//     }
//     if(local === 'B1'){
//         return SetorBQ1;
//     }
//     if(local === 'B2'){
//         return SetorBQ2;
//     }
//     if(local === 'B3'){
//         return SetorBQ3;
//     }
//     if(local === 'B4'){
//         return SetorBQ4;
//     }
//     if(local === 'SETOR C'){
//         return SetorC;
//     }
//     if(local === 'C1'){
//         return SetorCQ1;
//     }
//     if(local === 'C2'){
//         return SetorCQ2;
//     }
//     if(local === 'C3'){
//         return SetorCQ3;
//     }
//     if(local === 'C4'){
//         return SetorCQ4;
//     }
//     if(local === 'SETOR D'){
//         return SetorD;
//     }
//     if(local === 'D1'){
//         return SetorDQ1;
//     }
//     if(local === 'D2'){
//         return SetorDQ2;
//     }
//     if(local === 'D3'){
//         return SetorDQ3;
//     }
//     if(local === 'D4'){
//         return SetorDQ4;
//     }
//     return '';
// }

export function MapaSlider(){
    const [dados, setDados] = useState<Dado[]>([]);
    
    
    useEffect(() => {
        fetch('https://deerego-back.onrender.com/user?role=rebocador')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    setDados(data);
                }
            });
    }, []);

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            centeredSlides={true}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            className='mySwiper'
        >
            {dados.map((dado) => {
                const rebocadores = dado.rebocadores || [];
                const carrinhos = rebocadores.length > 0 ? rebocadores[0].carrinhos : [];

                return carrinhos.length > 0 ? (
                    carrinhos.map((carrinho) => (
                        <SwiperSlide key={carrinho._id}>
                            <h1>{carrinho.Local}</h1>
                            <Canvas
                                img={carrinho.Local}
                                posX={carrinho.PosX}
                                posY={carrinho.PosY}
                                id={carrinho._id}
                                className={`class-${carrinho._id}`}
                                width="600"
                                height="600"
                            />
                        </SwiperSlide>
                    ))
                ) : <></>
            })}
        </Swiper>
    )

}