import React from "react";
import { Menu } from "../components/Menu/Menu";
import { ProfileCard } from "../components/Profile Card/ProfileCard";
import { EntregasBox } from "../components/EntregasBox/EntregasBox";
export function Entregas(){
    return(
        <>
            <ProfileCard/>
            <EntregasBox/>
            <Menu/>
        </>  
    );
}