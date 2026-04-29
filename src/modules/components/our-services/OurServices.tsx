import { useContext } from 'react';
import { RefContext } from '../../shared/context/RefContext';

const OurServices = () => {

    const { refServices } = useContext(RefContext);

    return (
        <section ref={refServices} className="mt-[2rem] lg:mt-[20rem] px-[5%] lg:px-[7%] py-[5rem] lg:py-[10rem] w-full bg-[#F4F4F4]">
            <h2 className="mb-[5rem] lg:mb-[10rem] font-poppins text-[3.5rem] lg:text-[4.5rem] font-bold text-center text-black">Nuestros servicios</h2>

            <div className="w-full lg:h-[37rem] flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-4 gap-[2.5rem] lg:gap-[1.5rem]">

                {/* Special Solutions Card */}
                <div className="relative p-[3rem] lg:col-span-3 lg:row-span-4 rounded-4xl flex flex-col bg-white overflow-hidden lg:overflow-visible min-h-[40rem] lg:min-h-0 shadow-sm lg:shadow-none">
                    <h3 className="mb-[1rem] font-poppins text-[2.6rem] lg:text-[2rem] font-bold text-black z-10">Soluciones especializadas</h3>
                    <p className="w-full lg:w-[65%] font-inter text-[1.8rem] lg:text-[1.6rem] font-light text-black z-10 leading-relaxed">
                        Ofrecemos soluciones especializadas para el sector agropecuario, brindando acompañamiento integral para optimizar la productividad y garantizar el cumplimiento de normativas.
                    </p>
                    <button className="mt-auto lg:w-[25%] h-[4.5rem] flex justify-start lg:justify-around items-center border-none bg-transparent gap-4 z-10 cursor-pointer group">
                        <a href="#" className="font-poppins text-[2rem] lg:text-[1.8rem] font-medium text-base-green block no-underline group-hover:underline">Contáctanos</a>
                        <img className="h-[40%] lg:h-[50%] transition-transform group-hover:translate-x-2" src="/images/arrow_forward.png" alt="arrow" />
                    </button>
                    <img className="hidden lg:block absolute h-[65%] lg:h-[120%] right-[-15%] lg:right-[-13%] bottom-[5%] lg:bottom-[9%] object-contain z-0 opacity-20 lg:opacity-100 pointer-events-none" src="/images/chicken.png" alt="chicken photo without background" />
                </div>

                {/* Analysis & Strategies Card */}
                <div className="relative p-[3rem] lg:p-[2.5rem] lg:col-span-3 lg:row-span-2 lg:col-start-4 rounded-4xl bg-black overflow-hidden lg:overflow-visible min-h-[35rem] lg:min-h-0 shadow-sm lg:shadow-none">
                    <h3 className="mb-[1rem] font-poppins text-[2.6rem] lg:text-[2rem] font-bold text-white z-10 relative">Análisis y estrategias</h3>
                    <p className="w-full lg:w-[65%] font-inter text-[1.8rem] lg:text-[1.6rem] font-light text-white z-10 relative leading-relaxed">
                        Brindamos procesos de análisis y estrategias para mejorar la eficiencia en la producción agropecuaria.
                    </p>
                    <img className="absolute h-[55%] lg:h-[160%] right-[-5%] lg:right-0 bottom-[-5%] lg:bottom-0 object-contain z-0 lg:opacity-100 pointer-events-none" src="/images/plant01.png" alt="plant specie 01 photo without background" />
                </div>

                {/* Opportunities for Improvement Card */}
                <div className="relative p-[3rem] lg:p-[2.7rem] lg:col-span-3 lg:row-span-2 lg:col-start-4 lg:row-start-3 rounded-4xl bg-[#B4EFFF] overflow-hidden lg:overflow-visible min-h-[35rem] lg:min-h-0 shadow-sm lg:shadow-none">
                    <h3 className="mb-[1rem] font-poppins text-[2.6rem] lg:text-[2rem] font-bold text-black z-10 relative">Oportunidades de mejora</h3>
                    <p className="w-full lg:w-[65%] font-inter text-[1.8rem] lg:text-[1.6rem] font-light text-black z-10 relative leading-relaxed">
                        Evaluamos procesos, identificamos oportunidades de mejora y diseñamos planes de acción personalizados.
                    </p>
                    <img className="absolute w-full left-0 bottom-0 lg:w-full lg:left-0 lg:bottom-0 object-contain z-0 lg:opacity-100 pointer-events-none" src="/images/plant02.png" alt="plant specie 02 photo without background" />
                </div>

            </div>

            {/* New Agroconsultec Info Section */}
            <div className="mt-[5rem] lg:mt-[10rem] w-full bg-white rounded-4xl p-[4rem] lg:p-[4rem] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-[5rem]">

                {/* Left Side: Image display */}
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                    <img
                        src="/images/agroconsultech.png"
                        alt="Agroconsultec Pilares"
                        className="w-full max-w-[350px] object-contain drop-shadow-lg"
                    />
                </div>

                {/* Right Side: Recreated Info */}
                <div className="w-full lg:w-2/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <h3 className="font-poppins text-[3rem] lg:text-[4rem] font-bold text-dark-green mb-[1rem]">AGROCONSULTEC</h3>
                    <p className="font-poppins text-[1.8rem] lg:text-[2.2rem] font-medium text-[#414141] mb-[3rem]">
                        <span className="text-base-green">Eficiencia</span> • Rentabilidad • <span className="text-base-green">Productividad</span>
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-[1rem] lg:gap-[1.5rem] mb-[4rem] w-full">
                        <span className="bg-[#F4F4F4] text-black font-poppins px-[2rem] py-[1rem] rounded-full text-[1.4rem] lg:text-[1.6rem] font-medium border border-gray-200">Consultoría, Asesoría, Auditoría</span>
                        <span className="bg-[#F4F4F4] text-black font-poppins px-[2rem] py-[1rem] rounded-full text-[1.4rem] lg:text-[1.6rem] font-medium border border-gray-200">Administración Agropecuaria</span>
                        <span className="bg-[#F4F4F4] text-black font-poppins px-[2rem] py-[1rem] rounded-full text-[1.4rem] lg:text-[1.6rem] font-medium border border-gray-200">Producción Animal</span>
                        <span className="bg-[#F4F4F4] text-black font-poppins px-[2rem] py-[1rem] rounded-full text-[1.4rem] lg:text-[1.6rem] font-medium border border-gray-200">Porcicultura y Ganadería</span>
                        <span className="bg-[#F4F4F4] text-black font-poppins px-[2rem] py-[1rem] rounded-full text-[1.4rem] lg:text-[1.6rem] font-medium border border-gray-200">Avicultura y Piscicultura</span>
                    </div>
                </div>
            </div>

        </section>
    );

}

export default OurServices;