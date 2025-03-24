import React from "react";
import kenaiInformation from "@/images/kenai.jpg";
import kodiakInformation from "@/images/kodiak.jpg";

export default function Home() {
  return (
    <main className="mx-auto">
      
      {/*Panel de Importante*/}
      <section className="p-8 flex justify-center">
        <div className="bg-rosa-gris p-6 rounded-lg shadow-md w-2/3 flex flex-col items-center">
            <h2 className="text-2xl font-bold font-qs">La importancia de la adopción</h2>
            <p className="text-negro mt-8 mx-40">
            Cada año, millones de animales buscan un hogar lleno de amor. Adoptar no solo salva una vida, también llena la tuya de cariño y gratitud. Cuando eliges adoptar, das una oportunidad a un ser que lo necesita, combatiendo la cría irresponsable y el abandono. ¡Haz la diferencia y sé parte del cambio!
            </p>
        </div>
      </section>
      {/*Separador*/}
      <div className="flex justify-center">
        <hr className="h-[3px] w-[90%] my-8 bg-fucsia-oscuro border-0" />
      </div>
      {/*Panel de Por qué adoptar*/}
      <section className="p-8 flex flex-col items-center">
        <div className="bg-rosa-gris p-6 rounded-lg shadow-md w-2/3 flex flex-col items-center">
          <h2 className="text-2xl font-bold font-qs">¿Por qué adoptar?</h2>
          <p className="text-negro mt-8 mx-40">
            Adoptar significa brindar una segunda oportunidad a un animal que ha sufrido el abandono o el maltrato. Es un acto de amor y responsabilidad que contribuye a reducir la cantidad de animales en refugios y situación de calle. Además, al adoptar, ayudas a combatir la cría indiscriminada y promueves la tenencia responsable, dándole a un ser vivo una vida digna y llena de cariño. ¡Transforma una vida y enriquece la tuya!
          </p>
        </div>
      </section>
      {/*Separador*/}
      <div className="flex justify-center">
        <hr className="h-[3px] w-[90%] my-8 bg-fucsia-oscuro border-0" />
      </div>
      {/*Panel de Animales antes y después*/}
      <section className="p-8 flex flex-col items-center">
        <div className="bg-rosa-gris p-6 rounded-lg shadow-md w-2/3 flex flex-col items-center">
          <h2 className="text-2xl font-bold font-qs">Animales adoptados</h2>
          <p className="text-negro mt-8">
            Os mostramos fotos de algunos de nuestros animales antes de ser adoptados y después de convivir un periodo de tiempo con sus familias.
          </p>
          <div className="mt-10">
            <h3 className="text-xl font-bold font-qs text-fucsia-oscuro justify-left">Kenai</h3>
            <img src={kenaiInformation.src} alt="Kenai before/after picture" className="w-3/4 h-auto mx-auto object-contain rounded-lg"/>
            <div className="w-3/4 grid grid-cols-2 justify-between text-center mt-2">
              <p className="text-sm text-negro">Antes</p>
              <p className="text-sm text-negro">Después</p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-bold font-qs text-fucsia-oscuro justify-left">Kodiak</h3>
            <img src={kodiakInformation.src} alt="Kodiak before/after picture" className="w-3/4 h-auto mx-auto object-contain rounded-lg"/>
            <div className="w-3/4 grid grid-cols-2 justify-between text-center mt-2">
              <p className="text-sm text-negro">Antes</p>
              <p className="text-sm text-negro">Después</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}