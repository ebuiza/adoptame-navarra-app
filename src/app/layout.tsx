import Link from "next/link";
import React from "react";
import "./globals.css";
import { FaUserCircle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaX, FaXTwitter } from "react-icons/fa6";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-rosa-claro flex flex-col min-h-screen">
        {/*Menú superior*/}
        <nav className="flex justify-between items-center p-4 shadow-md font-qs">
          <Link className="flex items-center space-x-2" href="/">
            <svg className="fill-fucsia-oscuro h-auto sm:w-6 md:w-10 lg:w-14 align-middle"  viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                <path d="M3274 5094 c-48 -47 -327 -636 -495 -1041 -48 -117 -103 -242 -123
                -277 -109 -195 -266 -357 -621 -641 -399 -319 -479 -392 -708 -645 -72 -80
                -186 -201 -254 -270 l-122 -125 15 -50 c20 -66 20 -254 -1 -370 -22 -128 -69
                -287 -132 -455 -71 -188 -93 -275 -93 -369 0 -92 21 -144 74 -188 31 -26 133
                -69 142 -61 1 2 9 44 18 94 54 317 204 555 454 721 46 31 179 103 295 161 197
                98 217 110 283 176 135 134 181 224 234 456 31 134 74 260 125 365 38 79 56
                103 152 197 109 108 361 328 375 328 4 0 9 -77 10 -170 l3 -171 84 -29 c109
                -38 168 -75 211 -134 83 -115 98 -132 134 -152 20 -12 62 -27 93 -33 l55 -13
                -4 -76 c-7 -139 -65 -215 -225 -294 -122 -61 -179 -115 -214 -206 -33 -82 -31
                -233 5 -407 15 -71 30 -178 33 -237 10 -186 -21 -311 -126 -513 -52 -99 -61
                -124 -61 -169 0 -100 82 -211 205 -276 78 -42 113 -75 126 -123 12 -46 6 -71
                -24 -85 -16 -8 153 -11 614 -11 688 -1 709 0 758 53 40 43 45 96 16 183 -48
                141 -129 235 -259 298 -76 37 -171 65 -221 65 l-31 0 -264 598 c-145 328 -268
                607 -273 618 -7 17 38 160 207 659 119 351 218 640 220 643 3 2 125 10 273 18
                147 8 312 21 365 29 165 24 283 94 374 220 86 122 132 276 141 481 l6 120
                -289 43 c-159 24 -321 49 -360 55 l-71 11 -113 130 -113 130 -255 72 c-141 40
                -259 76 -263 80 -3 5 -66 135 -139 291 -132 281 -158 322 -202 322 -10 0 -30
                -12 -44 -26z"/>
                <path d="M436 2968 c-92 -60 -275 -328 -350 -510 -60 -146 -80 -243 -80 -398
                -1 -110 3 -152 23 -225 42 -162 132 -330 259 -481 l59 -70 -38 -63 c-78 -129
                -115 -296 -106 -476 18 -353 201 -604 512 -706 66 -22 87 -23 380 -25 171 -1
                297 0 280 3 -184 28 -331 121 -385 244 l-24 54 -90 22 c-119 30 -206 75 -276
                144 -162 160 -184 409 -65 734 112 305 159 473 171 621 l7 80 -38 57 -37 56
                -53 -21 c-68 -26 -114 -19 -162 25 -28 26 -36 42 -40 81 -9 74 15 110 98 149
                63 29 67 34 61 57 -15 57 -5 333 18 445 34 174 35 193 15 215 -28 31 -82 26
                -139 -12z"/>
                <path d="M1965 1085 c-66 -16 -178 -56 -172 -61 1 -2 39 3 82 11 308 55 516
                -52 587 -303 59 -209 -12 -352 -232 -467 l-85 -44 149 -1 c86 0 166 -5 189
                -12 87 -26 144 -126 98 -171 -21 -22 -29 -22 -389 -27 l-367 -6 485 -1 c428
                -2 483 -1 465 12 -42 31 -69 61 -82 93 -7 17 -49 183 -93 368 -48 201 -90 357
                -106 389 -43 87 -105 150 -191 192 -71 35 -83 38 -177 40 -63 2 -123 -3 -161
                -12z"/>
              </g>
            </svg>
            <span className="text-fucsia-oscuro text-4xl font-bold whitespace-nowrap">Adóptame Navarra</span>
          </Link>
          <Link className="text-negro text-xl font-bold" href="/adoptar">Adoptar</Link>
          <Link className="text-negro text-xl font-bold" href="/contacto">Contacto</Link>
          <Link className="text-negro text-xl font-bold" href="/informacion">Más información</Link>
          <Link href="/auth/login"><FaUserCircle className="fill-fucsia-oscuro h-auto sm:w-6 md:w-10 lg:w-14 align-middle"/></Link>
        </nav>

        {/*Body*/}
        <main className="flex-grow">{children}</main>

        {/*Footer*/}
        <footer className="bg-rosa-oscuro text-negro p-6 mt-8">
          <div className="grid grid-cols-4 gap-4 text-sm mx-40">
            <div className="flex flex-col items-left">
              <h3 className="font-bold font-qs">Sobre nosotros</h3>
              <hr className="h-[2px] my-2 bg-negro border-0" />
              <Link href='#'>Nuestro equipo</Link>
              <Link href='#'>Nuestros métodos</Link>
              <Link href='#'>Contacto</Link>
            </div>
            <div className="flex flex-col items-left">
              <h3 className="font-bold font-qs">Servicios</h3>
              <hr className="h-[2px] my-2 bg-negro border-0" />
              <Link href='#'>Rescate de animales</Link>
              <Link href='#'>Educación ambiental</Link>
              <Link href='#'>Voluntariado</Link>
            </div>
            <div className="flex flex-col items-left">
              <h3 className="font-bold font-qs">Proyectos</h3>
              <hr className="h-[2px] my-2 bg-negro border-0" />
              <Link href='#'>Especies en peligro</Link>
              <Link href='#'>Adopciones responsables</Link>
              <Link href='#'>Apadrinamiento</Link>
            </div>
            <div className="flex flex-col items-left">
              <h3 className="font-bold font-qs">Síguenos</h3>
              <hr className="h-[2px] my-2 bg-negro border-0" />
              <Link href='#'>Nuestro equipo</Link>
              <p>Contenido:</p>
              <div className="flex items-center space-x-6">
                <Link href='#'><FaFacebookF /></Link>
                <Link href='#'><PiInstagramLogoFill /></Link>
                <Link href='#'><FaLinkedinIn /></Link>
                <Link href='#'><FaXTwitter /></Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}