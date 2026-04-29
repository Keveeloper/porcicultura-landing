import { useCallback, useContext, useEffect, useState } from 'react';
import { RefContext } from '../../shared/context/RefContext';

const NavComponent = () => {

    const { refServices } = useContext(RefContext);
    const [itemHomeStatus, setItemHomeStatus] = useState<boolean>(true);
    const [itemServicesStatus, setItemServicesStatus] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = useCallback(() => {
        setScrollPosition(window.scrollY);
    }, []);
    
    const handleItems = (item: string, event: any) => {
        event.preventDefault();
        setIsMobileMenuOpen(false);

        let elementServicies: any;

        switch(item) {
            case 'home':
            setItemHomeStatus(true);
            setItemServicesStatus(false);
            setTimeout(() => {
                window.scroll({
                    top: 0,
                    behavior: "smooth"
                });
            }, 250);
            break;
            case 'services':
            setItemServicesStatus(true);
            setItemHomeStatus(false);
            setTimeout(() => {                    
                elementServicies = refServices?.current && refServices.current.getBoundingClientRect().top + window.scrollY;
                
                if (elementServicies) {
                    window.scroll({
                        top: elementServicies,
                        behavior: "smooth"
                    });
                }
            }, 250);
            break;
            default:
            setItemHomeStatus(true);
            setItemServicesStatus(false);
            break;
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return(
        <nav className={`fixed top-0 left-0 w-full h-[8rem] bg-white z-50 flex items-center justify-between px-[5%] lg:px-[7%] transition-shadow duration-300 ${scrollPosition > 0 ? 'shadow-md' : ''}`}>
            {/* Logo */}
            <figure className="w-1/2 lg:w-1/3 flex items-center m-0">
                <img className="cursor-pointer h-[4rem] lg:h-[auto] max-h-[6rem] hover:scale-105 transition-transform duration-300" onClick={(event) => handleItems('home', event)} src="/svg/Logo-agroconsultech.svg" alt="Agroconsultech Logo" />
            </figure>

            {/* Desktop Menu */}
            <ul className='hidden lg:flex w-1/3 justify-center items-center gap-[5rem] list-none m-0 p-0'>
                <li 
                    onClick={(event) => handleItems('home', event)} 
                    className={`relative font-poppins text-[1.8rem] cursor-pointer transition-all duration-300 group ${itemHomeStatus ? 'font-semibold text-base-green' : 'font-medium text-[#414141] hover:text-base-green'}`}
                >
                    Inicio
                    <span className={`absolute left-0 bottom-[-4px] h-[2px] bg-base-green transition-all duration-300 ${itemHomeStatus ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </li>
                <li 
                    onClick={(event) => handleItems('services', event)} 
                    className={`relative font-poppins text-[1.8rem] cursor-pointer transition-all duration-300 group ${itemServicesStatus ? 'font-semibold text-base-green' : 'font-medium text-[#414141] hover:text-base-green'}`}
                >
                    Servicios
                    <span className={`absolute left-0 bottom-[-4px] h-[2px] bg-base-green transition-all duration-300 ${itemServicesStatus ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </li>                
            </ul>

            {/* Desktop Button */}
            <div className='hidden lg:flex w-1/3 justify-end items-center'>
                <button className="w-[18rem] h-[4.2rem] border-[0.15rem] border-base-green rounded-full bg-transparent hover:bg-base-green hover:shadow-[0_8px_20px_rgba(82,178,84,0.3)] hover:-translate-y-1 group transition-all duration-300 flex justify-center items-center">
                    <a href="http://porcicultura.agroconsultech.com/login" className="w-full h-full flex justify-center items-center no-underline text-base-green font-poppins text-[1.7rem] font-semibold tracking-wide group-hover:text-white transition-colors duration-300" target='_blank' rel="noreferrer">Porcicultura</a>
                </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center justify-end w-1/2">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-dark-green focus:outline-none p-2 hover:bg-gray-50 rounded-full transition-colors" aria-label="Toggle menu">
                    <svg className="w-[3.5rem] h-[3.5rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-[8rem] left-0 w-full bg-white shadow-xl flex flex-col items-center py-[3rem] gap-[2.5rem] lg:hidden border-t border-gray-100">
                    <ul className="flex flex-col items-center gap-[2.5rem] list-none p-0 m-0 w-full">
                        <li onClick={(event) => handleItems('home', event)} className={`font-poppins text-[2.2rem] cursor-pointer transition-colors ${itemHomeStatus ? 'font-semibold text-base-green' : 'font-medium text-[#414141]'}`}>Inicio</li>
                        <li onClick={(event) => handleItems('services', event)} className={`font-poppins text-[2.2rem] cursor-pointer transition-colors ${itemServicesStatus ? 'font-semibold text-base-green' : 'font-medium text-[#414141]'}`}>Servicios</li>                
                    </ul>
                    <button className="w-[22rem] h-[4.5rem] border-[0.15rem] border-base-green rounded-full bg-base-green flex justify-center items-center mt-[1rem] hover:shadow-[0_8px_20px_rgba(82,178,84,0.3)] hover:-translate-y-1 transition-all duration-300">
                        <a href="http://porcicultura.agroconsultech.com/login" className="w-full h-full flex justify-center items-center no-underline text-white font-poppins text-[1.8rem] font-semibold tracking-wide" target='_blank' rel="noreferrer">Porcicultura</a>
                    </button>
                </div>
            )}
        </nav>
    )
}

export default NavComponent;