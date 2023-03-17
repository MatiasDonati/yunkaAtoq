import Logo from './assets/yunka.png'

const Home = () => {
    return (
        <div className='w-full h-full bg-[#D49105] p-[500px]'>
            <div>
                <img src={Logo} alt='logo' style={{ width: '' }} />
            </div>
            <div className=' text-[#013662] p-10'>
                El zorro forestal representado por un zorro por sus características propias que son astucia, inteligencia y agilidad.
                De la misma manera representa a la fauna y flora y voluntad existente para salvaguardar todo ser vivo indistintamente de la especie.
            </div>
        </div>
    )
}
export default Home