import React from "react";
import { HeadCanvas, CircleLocal, NomeH2, LocalH2} from "./styles";

interface CanvasHeadProps {
    NomeCarrinho: string;
    Local: string;
}

export const CanvasHead: React.FC<CanvasHeadProps> = ({ NomeCarrinho, Local}) => {
    return(
        <HeadCanvas>
            <NomeH2>{NomeCarrinho}</NomeH2>
            <CircleLocal>
                <LocalH2>{Local}</LocalH2>
            </CircleLocal>
        </HeadCanvas>
    )
};