import React from "react";
import { Menu } from "../components/Menu/Menu";
import { ProfileCard } from "../components/Profile Card/ProfileCard";
import { EntregasBox } from "../components/EntregasBox/EntregasBox";
import { Status } from "../components/Status/Status";
export function Entregas(){
    return(
        <>
            <ProfileCard/>
            <Status/>
            <EntregasBox/>
            <Menu/>
        </>  
    );
}