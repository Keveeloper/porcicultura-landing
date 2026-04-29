const Footer = () => {
    return (
        <footer className="flex flex-col lg:flex-row items-center justify-between px-[5%] lg:px-[7%] py-[4rem] lg:py-[2rem] gap-[3rem] lg:gap-0 bg-white border-t border-gray-100">
            {/* Logo */}
            <div className='w-full lg:w-1/3 flex justify-center lg:justify-start'>
                <img className="h-[5rem] lg:h-auto max-h-[6rem] object-contain" src="/svg/Logo-agroconsultech.svg" alt="Agroconsultech logo" />
            </div>
            
            {/* Copyright */}
            <div className='w-full lg:w-1/3 flex justify-center items-center'>
                <p className="font-inter text-[1.6rem] lg:text-[1.6rem] font-light text-center text-[#414141] m-0">
                    Todos los derechos reservados ©
                </p>
            </div>
            
            {/* Social */}
            <div className='w-full lg:w-1/3 flex justify-center lg:justify-end'>
                <a 
                    href="https://wa.me/+573123350652?text=¡Hola%20Estoy%20interesado%20en%20una%20asesoría%20para%20mi%20producción%20animal.%20¿Me%20puedes%20brindar%20más%20información?" 
                    target='_blank' 
                    rel="noreferrer"
                    className="transition-transform duration-300 hover:scale-110 flex items-center justify-center"
                >            
                    <img className="h-[5rem] lg:h-[5rem]" src="/images/whatsapp-icon.png" alt="WhatsApp icon" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;