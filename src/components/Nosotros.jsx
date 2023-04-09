import React from "react";
import ArbolDeLaVida from "./ArbolDeLaVida";
import PartesLogo from "./PartesLogo";
import QuienSomos from "./QuienSomos";
import Directiva from "./Directiva";
import SerParte from "./SerParte";
import Identidad from "./Identidad";

const Nosotros = () => {
    return (
        <>
            <QuienSomos/>
            <Directiva/>
            <Identidad/>
            <PartesLogo />
            <ArbolDeLaVida />
            <SerParte />
        </>
    );
};

export default Nosotros;
