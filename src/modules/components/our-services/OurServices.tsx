import { useContext } from 'react';
import './OurServices.css';
import { RefContext } from '../../shared/context/RefContext';

const OurServices = () => {

    const { refServices } = useContext(RefContext);
    return (
        <section ref={refServices} className="os-section-container">
            <h2>Nuestros servicios</h2>
            <div className="os-container">
                <div className="special-solutions">
                    <h3>Soluciones especializadas</h3>
                    <p>Ofrecemos soluciones especializadas para el sector agropecuario, brindando acompañamiento integral para optimizar la productividad y garantizar el cumplimiento de normativas.</p>
                    <button>
                        <a href="">Contáctanos</a> 
                        <img className="arrow" src="/images/arrow_forward.png" alt="" />
                    </button>
                    <img className="chicken" src="/images/chicken.png" alt="chicken photo without background" />
                </div>
                <div className="analysis-strategies">
                    <h3>Análisis y estrategias</h3>
                    <p>Brindamos procesos de análisis y estrategias para mejorar la eficiencia en la producción agropecuaria.</p>
                    <img src="/images/plant01.png" alt="plant specie 01 photo without background" />
                </div>
                <div className="opportunities-improvement">
                    <h3>Oportunidades de mejora</h3>
                    <p>Evaluamos procesos, identificamos oportunidades de mejora y diseñamos planes de acción personalizados.</p>
                    <img src="/images/plant02.png" alt="plant specie 02 photo without background" />
                </div>
            </div>
        </section>
    );

}

export default OurServices;