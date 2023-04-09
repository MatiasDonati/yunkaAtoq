import React from 'react'
import Foto from "../assets/Group-38.png"
import Rectangulo from "../assets/Rectangle-189.png"

const Directiva = () => {
    return (
        <div className=' max-h-full max-w-full '>
            <div className="text-center text-4xl bg-#fffbef absolute left-1/2  ">
            <h1 >Directiva</h1>
            </div>
            <div className="flex justify-center align-center gap-[250px] mb-[300px] ml-[165px] relative">
                <img className='absolute z-[-1] img' src={Rectangulo} alt="rectangulo" />
                
                <div className="flex flex-col w-[580px] h-[888px] justify-between my-[155px] ">
                    
                    <div className="text-white bg-blue-800 left-[135px] rounded text-center p-7">
                        <p>"Nunca dejamos a nadie atrás"</p>
                        <p>Carlos Andres Azcarraga Esquivel</p>
                        <p>Presidente de Yunca Atoq</p>
                    </div>
                    <div className="text-white bg-blue-800  left-[135px] rounded text-center p-7">
                        <p>"Nunca dejamos a nadie atrás"</p>
                        <p>Carlos Andres Azcarraga Esquivel</p>
                        <p>Presidente de Yunca Atoq</p>
                    </div>
                    <div className="text-white bg-blue-800  left-[135px] rounded text-center p-7">
                        <p>"Nunca dejamos a nadie atrás"</p>
                        <p>Carlos Andres Azcarraga Esquivel</p>
                        <p>Presidente de Yunca Atoq</p>
                    </div>
                    <div className="text-white bg-blue-800  left-[135px] rounded text-center p-7">
                        <p>"Nunca dejamos a nadie atrás"</p>
                        <p>Carlos Andres Azcarraga Esquivel</p>
                        <p>Presidente de Yunca Atoq</p>
                    </div>
                    <div className="text-white bg-blue-800  left-[135px] rounded text-center p-7">
                        <p>"Nunca dejamos a nadie atrás"</p>
                        <p>Carlos Andres Azcarraga Esquivel</p>
                        <p>Presidente de Yunca Atoq</p>
                    </div>
                </div>
                <div>
                    <img className='z-index-1 mt-[150px]' src={Foto} alt="bomberos" />
                </div>
            </div>
        </div>
    )
}

export default Directiva
