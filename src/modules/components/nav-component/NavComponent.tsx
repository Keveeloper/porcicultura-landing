import { useCallback, useContext, useEffect, useState } from 'react';
import './NavComponent.css';
import { RefContext } from '../../shared/context/RefContext';

const NavComponent = () => {

    const { refServices } = useContext(RefContext);
    const [itemHomeStatus, setItemHomeStatus] = useState<boolean>(false);
    const [itemServicesStatus, setItemServicesStatus] = useState<boolean>(false);
    const [itemWhoWeAreStatus, setItemWhoWeAreStatus] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = useCallback(() => {
        setScrollPosition(window.scrollY);
    }, []);
    
    const handleItems = (item: string, event: any) => {
        event.preventDefault();

        let elementServicies: any;

        switch(item) {
            case 'home':
            setItemHomeStatus(!itemHomeStatus ? !itemHomeStatus : itemHomeStatus);
            setItemServicesStatus(false);
            setItemWhoWeAreStatus(false);
            setTimeout(() => {
                window.scroll({
                    top: 0,
                    behavior: "smooth"
                });
            }, 250);
            break;
            case 'services':
            setItemServicesStatus(!itemServicesStatus ? !itemServicesStatus : itemServicesStatus);
            setItemHomeStatus(false);
            setItemWhoWeAreStatus(false);
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
            case 'whoWeAre':
            setItemWhoWeAreStatus(!itemWhoWeAreStatus ? !itemWhoWeAreStatus : itemWhoWeAreStatus);
            setItemServicesStatus(false);
            setItemHomeStatus(false);
            break;
            default:
            setItemHomeStatus(true);
            setItemServicesStatus(false);
            setItemWhoWeAreStatus(false);
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
        <nav className={`display-flex-space-between column-container ${scrollPosition > 0 ? 'nav-shadow' : ''}`}>
            <figure>
                <img onClick={(event) => handleItems('home', event)} src="/svg/Logo-agroconsultech.svg" alt="" />
            </figure>
            <ul className='display-flex-space-between'>
                <li onClick={(event) => handleItems('home', event)} className={`${itemHomeStatus ? 'item-selected' : ''}`}>Inicio</li>
                <li onClick={(event) => handleItems('services', event)} className={`${itemServicesStatus ? 'item-selected' : ''}`}>Servicios</li>                
            </ul>
            <div className='nav-button-container display-flex-justify-end'>
                <button><a href="http://porcicultura.agroconsultech.com/login" className='display-flex-default' target='_blanck'>Porcicultura</a></button>
            </div>
        </nav>
    )
}

export default NavComponent;