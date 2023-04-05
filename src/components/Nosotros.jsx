import React from "react";
import Foto from "../assets/Group-38.png";
import ArbolDeLaVida from "./ArbolDeLaVida";
import PartesLogo from "./PartesLogo";
import QuienSomos from "./QuienSomos";
import Directiva from "./Directiva";

const Nosotros = () => {
    return (
        <>
            <QuienSomos/>
            <Directiva/>
            <PartesLogo />
            <ArbolDeLaVida />
        </>
    );
};

export default Nosotros;
