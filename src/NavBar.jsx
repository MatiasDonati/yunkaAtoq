const NavBar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]'>
            <h1 className='text-3xl font-bold text-[#D49105] p-8 '>
                Yunka Atoq
            </h1>
            <ul className='text-white flex'>
                <li>
                    Nosotros
                </li>
                <li>
                    Contra el Fuego
                </li>
                <li>
                    Rescate
                </li>
                <li>
                    Animales
                </li>
                <li>
                    Contacto
                </li>
            </ul>
        </div>
    )
}
export default NavBar