import './Footer.css';

const Footer = () => {

    return (
        <footer className="footer">
            <div className='footer-logo-container'>
                <img src="/svg/Logo-agroconsultech.svg" alt="" />
            </div>
            <div className='footer-rights-container'>
                <p>Todos los derechos reservados ©</p>
            </div>
            <div className='footer-social-container'>
                <img src="/images/whatsapp-icon.png" alt="" />
            </div>
        </footer>
    );

}

export default Footer;