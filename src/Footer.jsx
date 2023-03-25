import { FiMail } from 'react-icons/fi'
import { BsTelephone } from 'react-icons/bs'
const Footer = () => {
  return (
    <>
      <div className="bg-[#0E385B] w-full h-[80px] items-center text-white flex justify-center">
        <div className='flex items-center pr-20'>
          <div className='pr-2 text-[30px]'><FiMail /></div>
          <div className="text-[20px]">informaciones@yunkaatoq.org</div>
        </div>
        <div className='flex items-center'>
          <div className='pr-2 text-[30px]'><BsTelephone /></div>
          <div className='text-[20px]'>+591 62643328</div>
        </div>
      </div>
    </>
  );
};
export default Footer;
