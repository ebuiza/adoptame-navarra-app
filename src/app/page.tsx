import React from "react";
import { PiDogDuotone, PiCatDuotone } from "react-icons/pi";
import { LuDiamondPlus } from "react-icons/lu";
import headerImage from "@/images/animals_header.jpg";
import dogInformation from "@/images/dog_home.jpg";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-auto">
      {/*Imagen de cabecera*/}
      <section className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${headerImage.src})` }}>
      </section>
      {/*Panel de Más información*/}
      <section className="p-8 flex justify-center">
        <div className="bg-rosa-gris p-6 rounded-lg shadow-md w-3/4 flex">
          <img src={dogInformation.src} alt="Dog picture" className="w-1/4 h-auto object-contain rounded-lg" />
          <div className="mx-40 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold font-qs">Nunca compres, adopta</h2>
            <p className="text-negro mt-8">
            Cada año, millones de animales buscan un hogar lleno de amor. Adoptar no solo salva una vida, también llena la tuya de cariño y gratitud. Cuando eliges adoptar, das una oportunidad a un ser que lo necesita, combatiendo la cría irresponsable y el abandono. ¡Haz la diferencia y sé parte del cambio!
            </p>
          <Link href="/informacion"><button className="mt-4 allign-center bg-verde-claro text-negro font-bold font-qs px-4 py-2 rounded">Ver más</button></Link>
          </div>
        </div>
      </section>
      {/*Separador*/}
      <div className="flex justify-center">
        <hr className="h-[3px] w-[90%] my-8 bg-fucsia-oscuro border-0" />
      </div>
      {/*Panel de Interes*/}
      <section className="p-8 flex flex-col items-center">
        <div className="bg-rosa-gris p-6 rounded-lg shadow-md w-1/2 flex flex-col items-center">
          <h2 className="text-2xl font-bold font-qs">Escoge a tu animal de compañía</h2>
          <div className="flex justify-center mt-4 space-x-20">
            <div className="flex flex-col items-center">
              <form action="/adoptar" method="GET">
                <input type="hidden" name="tipo" value="perro" />
                <button type="submit" className="text-center">
                  <p className="text-center">Perro</p>
                  <PiDogDuotone className="mt-2 text-negro h-auto sm:w-6 md:w-10 lg:w-14" />
                </button>
              </form>
            </div>
            <div className="flex flex-col items-center">
              <form action="/adoptar" method="GET">
                <input type="hidden" name="tipo" value="gato" />
                <button type="submit" className="text-center">
                  <p className="text-center">Gato</p>
                  <PiCatDuotone className="mt-2 text-negro h-auto sm:w-6 md:w-10 lg:w-14" />
                </button>
              </form>
            </div>
            <div className="flex flex-col items-center">
              <form action="/adoptar" method="GET">
                <input type="hidden" name="tipo" value="otros" />
                <button type="submit" className="text-center">
                  <p className="text-center">Otros...</p>
                  <LuDiamondPlus className="mt-2 h-auto sm:w-6 md:w-10 lg:w-14" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*Separador*/}
      <div className="flex justify-center">
        <hr className="h-[3px] w-[90%] my-8 bg-fucsia-oscuro border-0" />
      </div>
      {/*Panel de Guía*/}
      <section className="p-8 flex flex-col items-center">
        <div className="bg-rosa-gris p-6 rounded-lg shadow-md w-2/3 flex flex-col items-center">
          <h2 className="text-2xl font-bold font-qs">Pasos para adoptar a un animal</h2>
          <div className="grid grid-cols-2 gap-16 mt-4 mx-20">
          {[
            { titulo: 'Inicia sesión', info: 'Accede a tu cuenta o regístrate para empezar tu proceso de adopción.', logo: 'FaUser', link: '/auth/login' },
            { titulo: 'Usa los filtros', info: 'Filtra por especie, tamaño o edad para encontrar tu compañero ideal.', logo: 'FaSearch', link: '/adoptar' },
            { titulo: 'Rellena el formulario', info: 'Completa tus datos y detalles sobre tu hogar.', logo: 'FaCheck', link: '/auth/account' },
            { titulo: 'Espera respuesta', info: 'Revisaremos tu solicitud y te contactaremos pronto.', logo: 'FaRegClock', link: '#' },
          ].map((paso, i) => (
              <div key={i} className="bg-rosa-claro p-4 shadow-md rounded-lg flex flex-col items-center">
                <h3 className="text-2xl font-bold font-qs">Paso {i + 1}</h3>
                <h4 className="text-center text-xl font-qs">{paso.titulo}</h4>
                <p className="text-center">{paso.info}</p>
                <Link href={`${paso.link}`}>
                  {React.createElement(require('react-icons/fa')[paso.logo], { className: "mt-4 allign-center fill-negro h-auto sm:w-6 md:w-10 lg:w-14" })}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
