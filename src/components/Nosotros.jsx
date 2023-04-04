import React from 'react'

const Nosotros = () => {
    return (
        <div className='pt-[200px]'>
            <div className=' h-[100vh] '>
                <div > {/* primer seccion */}
                    <h1 className=' mx-[100px] w-[410px] h-[71px] left-[130px]  leading-[71px] text-4xl font-sans'>| Quienes somos?</h1>
                    <div className='mx-[150px] w-[980px] h-[550px] left-[230px] top-[300px] leading-10 text-2xl'>
                        <p className='p-4'>YUNKA ATOQ es una fundación de protección medioambiental que cuenta con un brazo operativo de primera respuesta ante emergencias y desastres naturales.</p>

                        <p className='p-4'>Nació en el año 2023, con el fin de abastecer las emergencias (incendios forestales, rescates, atenciones médicas) y el objetivo de capacitar a jóvenes voluntarios que de manera desinteresada y altruista, arriesguen sus vidas para salvaguardar así, las de otros seres vivos.</p>

                        <p className='p-4'>Bajo el lema "Para que otros puedan vivir”, servimos al pueblo Boliviano del cual nacimos, devolviéndole a nuestra tierra un poco de todo lo que nos brindó.</p>
                    </div>
                </div>

                <div>{/* segunda seccion */}
                    <h1 className=' text-center text-4xl'>Directiva</h1>
                    <div className='flex'>
                    <div className='flex flex-col'>
                    <div className='text-white bg-blue-800 w-[580px] h-[161px] left-[135px] rounded text-center p-7'>
                        <p>"Nunca dejamos a nadie atrás"</p>
                        <p>Carlos Andres Azcarraga Esquivel</p>
                        <p>Presidente de Yunca Atoq</p>
                    </div>
                    </div>
                    <div>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nosotros
