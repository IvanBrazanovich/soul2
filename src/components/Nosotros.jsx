import React, { useContext, useEffect, useState } from "react";
import nosotrosDatabase from "../assets/db.json";
import imgPersona1 from "../assets/img/persona-1.jpg";
import imgPersona2 from "../assets/img/persona-2.jpg";
import imgPersona3 from "../assets/img/persona-3.jpg";
import imgPersona4 from "../assets/img/persona-4.jpg";
import imgPersona5 from "../assets/img/persona-5.jpg";
import SoulContext from "../context/SoulProvider";

const Nosotros = () => {
  const { nosotros } = nosotrosDatabase;
  const { refHistoria } = useContext(SoulContext);
  const ARR = Array.from(new Array(12), (valor, index) => index);

  const diccionario = {
    persona1: imgPersona1,
    persona2: imgPersona2,
    persona3: imgPersona3,
    persona4: imgPersona4,
    persona5: imgPersona5,
    persona6: imgPersona1,
  };

  return (
    <section
      id="nosotros"
      ref={refHistoria}
      className="nosotros md:w-11/12 mx-auto mt-[5rem]"
    >
      <h3 className="text-center text-6xl mb-10 text-gray-600 uppercase font-bold">
        Nosotros
      </h3>

      <div
        className="wrapper md:flex gap-10 justify-center items-center
      "
      >
        <div className="info-wrapper md:w-1/2 ">
          <h3 className="uppercase text-3xl mb-5 text-emerald-700 font-semibold">
            ¿Quiénes somos ?
          </h3>

          <p className="whitespace-pre-wrap sm:text-xl  text-gray-600">
            {nosotros[0]?.description}
          </p>
        </div>

        <div className=" md:w-1/2 items-center gallery grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {ARR?.map((item, index) => {
            const numero = index + 1 < 7 ? index + 1 : index - 5;

            return (
              <img
                className="rounded-md"
                key={index}
                src={diccionario[`persona${numero}`]}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
