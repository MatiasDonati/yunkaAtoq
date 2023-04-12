import React from 'react'

const Identidad = () => {
    return (
        <>
            <div className='h-full p-5 my-[350px]'>
                <h1 className=" text-4xl font-sans">
                    | Nuestro logo, nuestra identidad
                </h1>
                <div className='flex'>
                    <div className='imagen'>
                        <img src="../src/assets/logo.png" alt="logo" />
                    </div>
                    <div className='texto '>
                        <h2>Astucia, inteligencia y agilidad</h2>
                        <p>
                            Nos representa el zorro forestal, cuyas características más destacadas que son la astucia, la inteligencia y la agilidad. De la misma manera, representa éste a la fauna y flora, y a nuestra voluntad existente por salvaguardar todo ser vivo independientemente de su especie.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Identidad