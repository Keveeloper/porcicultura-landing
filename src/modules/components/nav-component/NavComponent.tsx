import { useState } from 'react';
import './NavComponent.css';

const NavComponent = () => {

    const [itemHomeStatus, setItemHomeStatus] = useState<boolean>(false);
    const [itemServicesStatus, setItemServicesStatus] = useState<boolean>(false);
    const [itemWhoWeAreStatus, setItemWhoWeAreStatus] = useState<boolean>(false);

    const handleItems = (item: string) => {
        switch(item) {
            case 'home':
            setItemHomeStatus(!itemHomeStatus ? !itemHomeStatus : itemHomeStatus);
            setItemServicesStatus(false);
            setItemWhoWeAreStatus(false);
            break;
            case 'services':
            setItemServicesStatus(!itemServicesStatus ? !itemServicesStatus : itemServicesStatus);
            setItemHomeStatus(false);
            setItemWhoWeAreStatus(false);
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

    return(
        <nav className='display-flex-space-between column-container'>
            <figure>
                <img src="/svg/Logo-agroconsultech.svg" alt="" />
            </figure>
            <ul className='display-flex-space-between'>
                <li onClick={() => handleItems('home')} className={`${itemHomeStatus ? 'item-selected' : ''}`}>Inicio</li>
                <li onClick={() => handleItems('services')} className={`${itemServicesStatus ? 'item-selected' : ''}`}>Servicios</li>
                <li onClick={() => handleItems('whoWeAre')} className={`${itemWhoWeAreStatus ? 'item-selected' : ''}`}>Quienes somos</li>
            </ul>
            <div className='nav-button-container display-flex-justify-end'>
                <button><a href="http://porcicultura.agroconsultech.com/login" className='display-flex-default' target='_blanck'>Porcicultura</a></button>
            </div>
        </nav>
    )
}

export default NavComponent;