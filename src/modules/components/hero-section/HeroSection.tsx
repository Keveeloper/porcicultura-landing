import './HeroSection.css';
const HeroSection = () => {
    return(
        <section className="hero-section-container">
            <h1 className="hs-title">Somos expertos en producción animal</h1>
            <h1 className="hs-title">¡Impulsa tu granja al éxito!</h1>
            <p className="hs-subtitle">Asesoría especializada en porcicultura, avicultura, piscicultura y ganadería.</p>
            <p className="hs-subtitle">Optimizamos tu producción con soluciones eficientes y sostenibles.</p>
            <button className='hs-cta display-flex-default'>Comunícate ahora <img src="/svg/whatsapp.svg" alt="" /></button>
            <div className='hs-customer-container display-flex-space-between'>
                <img className='pig' src="/images/pig.svg" alt="" />
                <img className='cow' src="/images/cow.svg" alt="" />
                <div className='hs-customer hs-customer-satisfaction'>
                    <div className='hs-customer-header-container'>
                        <img src="/svg/customer-icon.svg" alt="customer agroconsultech icon" width={40}/>
                        <h2>100%</h2>
                    </div>
                    <h3>Satisfacción</h3>
                    <p>Hemos logrado resultados óptimos y soluciones efectivas para cada necesidad.</p>
                </div>
                <div className='hs-customer hs-customer-efficiency'>
                    <div className='hs-customer-header-container'>
                        <img src="/svg/customer-icon.svg" alt="customer agroconsultech icon" />
                        <h2>90%</h2>
                    </div>
                    <h3>Eficiencia</h3>
                    <p>Nuestros clientes confirman que nuestro acompañamiento ha sido clave para mejorar su productividad y eficiencia.</p>
                </div>
                
            </div>
            <img src="/images/farm-animals.svg" alt="Animals in the farm photo" className='farm-animals'/>
        </section>
    )
}

export default HeroSection;