import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
import { Button } from "../components";
const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img
              src={footerLogo}
              alt='logo'
              width={150}
              height={46}
              className='m-0'
            />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
          Prepare your portfolio for the next level with PS-Studio. Explore endless possibilities, and stand out from the crowd. Discover Your Creative Edge Today.
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

       
    <div
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl text-white leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up for
        <span className='text-coral-red '> Updates </span>& Newsletter
      </h3>
      <div className='lg:max-w-[46%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border  rounded-full'>
        <input type='text' placeholder=" @ps-studio.com" className='rounded-md w-60 ml-4 ' />
        <div className='flex max-sm:justify-end items-center w-full ml-6 '>
          <Button label='Sign Up' className="ml-5 "/>
        </div>
      </div>
      </div>
    </div>


      <div className='flex justify-between text-white-400 mt-10 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;