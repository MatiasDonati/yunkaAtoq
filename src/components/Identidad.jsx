import React from 'react'

const Identidad = () => {
    return (
        <>
            <div className='h-full p-5 mt-[450px] mb-[200px]'>
                <div className=" text-4xl font-sans  ">
                    <h1 className='text-blue-900 font-bold font-sans ml-14'>
                        | Nuestro logo, nuestra identidad
                    </h1>
                </div>
                <div className='flex justify-around'>
                    <div className='imagen '>
                        <img src="../src/assets/logo.png" alt="logo" />
                    </div>
                    <div className='texto flex flex-col text-3xl w-[950px] mt-10'>
                        <h2 className='italic font-bold mb-10'>Astucia, inteligencia y agilidad</h2>
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