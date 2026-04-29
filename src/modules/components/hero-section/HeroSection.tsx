const HeroSection = () => {
    return (
        <section className="relative pt-[10rem] lg:h-screen min-h-screen flex flex-col items-center overflow-hidden lg:overflow-visible pb-[5rem] lg:pb-0">
            <h1 className="mt-[2rem] lg:mt-[5rem] font-poppins text-[3.5rem] lg:text-[5.2rem] font-bold text-[#0A0A0A] text-center leading-[1.2] px-4 z-2">Somos expertos en producción animal</h1>
            <h1 className="font-poppins text-[3.5rem] lg:text-[5.2rem] font-bold text-[#0A0A0A] text-center leading-[1.2] px-4 z-2">¡Impulsa tu granja al éxito!</h1>

            <p className="mt-[3rem] lg:mt-[5rem] font-poppins text-[1.8rem] lg:text-[2.2rem] font-light text-[#5B5B5B] text-center leading-[1.2] px-4 z-2">Asesoría especializada en porcicultura, avicultura, piscicultura y ganadería.</p>
            <p className="font-poppins text-[1.8rem] lg:text-[2.2rem] font-light text-[#5B5B5B] text-center leading-[1.2] px-4 z-2">Optimizamos tu producción con soluciones eficientes y sostenibles.</p>

            <button className='mt-[4rem] lg:mt-[5rem] w-[26rem] lg:w-[30rem] h-[4.5rem] border-none rounded-[1rem] font-poppins text-[1.6rem] lg:text-[1.8rem] font-medium text-white bg-base-green flex justify-center items-center z-2'>
                <a href="https://wa.me/+573123350652?text=¡Hola%20Estoy%20interesado%20en%20una%20asesoría%20para%20mi%20producción%20animal.%20¿Me%20puedes%20brindar%20más%20información?" target='_blank' rel='noreferrer' className="text-white no-underline">Comunícate ahora</a>
                <img src="/svg/whatsapp.svg" alt="whatsapp icon" className="ml-[1rem]" />
            </button>

            <div className='relative lg:absolute w-[90%] lg:w-[77%] flex flex-col lg:flex-row justify-between items-center lg:bottom-[-2%] mt-[5rem] lg:mt-0 gap-[3rem] lg:gap-0 z-1'>
                <img className='hidden lg:block absolute top-[-70%] left-[-3%] -z-10' src="/images/pig.svg" alt="pig" />
                <img className='hidden lg:block absolute top-[-79%] right-[-6.5%] -z-10' src="/images/cow.svg" alt="cow" />

                <div className='p-[3rem] w-full lg:w-[25%] h-auto lg:h-[37rem] flex flex-col justify-around rounded-4xl bg-dark-green -z-10'>
                    <div className='mx-auto w-[80%] flex justify-around items-center'>
                        <img src="/svg/customer-icon.svg" alt="customer agroconsultech icon" width={40} />
                        <h2 className="font-poppins text-[4rem] lg:text-[5.2rem] font-bold text-white">100%</h2>
                    </div>
                    <h3 className="font-inter text-[2rem] lg:text-[2.2rem] font-bold text-white text-center mt-4 lg:mt-0">Satisfacción</h3>
                    <p className="mx-auto font-inter text-[1.8rem] lg:text-[2rem] font-extralight text-white text-center mt-4 lg:mt-0">Hemos logrado resultados óptimos y soluciones efectivas para cada necesidad.</p>
                </div>

                <div className='p-[3rem] w-full lg:w-[25%] h-auto lg:h-[37rem] flex flex-col justify-around rounded-4xl bg-base-green -z-10'>
                    <div className='mx-auto w-[80%] flex justify-around items-center'>
                        <img src="/svg/customer-icon.svg" alt="customer agroconsultech icon" />
                        <h2 className="font-poppins text-[4rem] lg:text-[5.2rem] font-bold text-white">90%</h2>
                    </div>
                    <h3 className="font-inter text-[2rem] lg:text-[2.2rem] font-bold text-white text-center mt-4 lg:mt-0">Eficiencia</h3>
                    <p className="mx-auto font-inter text-[1.8rem] lg:text-[2rem] font-extralight text-white text-center mt-4 lg:mt-0">Nuestros clientes confirman que nuestro acompañamiento ha sido clave para mejorar su productividad y eficiencia.</p>
                </div>
            </div>

            <img
                className='relative mt-[3.5rem] w-[90%] lg:absolute lg:bottom-[-20%] lg:mt-[5rem] lg:mt-0 lg:w-auto -z-10'
                src="/images/farm-animals.svg"
                alt="Animals in the farm photo"
            />
        </section>
    )
}

export default HeroSection;