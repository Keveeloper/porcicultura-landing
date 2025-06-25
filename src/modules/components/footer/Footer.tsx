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
            <a href="https://wa.me/+573123350652?text=¡Hola%20Estoy%20interesado%20en%20una%20asesoría%20para%20mi%20producción%20animal.%20¿Me%20puedes%20brindar%20más%20información?" target='_blanck'>            
                <img src="/images/whatsapp-icon.png" alt="" />
            </a>
            </div>
        </footer>
    );

}

export default Footer;