import React, { useContext } from "react";
import imgVendedor from "../assets/img/vendedor.webp";
import SoulContext from "../context/SoulProvider";

const Vender = () => {
  const { refVender } = useContext(SoulContext);

  return (
    <section
      id="vender"
      ref={refVender}
      className="my-24 w-11/12 mx-auto rounded-lg overflow-hidden"
    >
      <h2 className=" text-2xl md:text-6xl font-bold text-gray-600 text-center mb-8">
        Quiero Vender
      </h2>
      <div
        className="wrapper rounded-lg "
        style={{
          // background: `linear-gradient(to right, rgba(0 0 0 0 / 0.6), (0 0 0 0 / 0.6)), url(${imgVendedor})`,
          backgroundImage: `linear-gradient(to right, rgba(4 120 87 / 0.4), rgba(172 121 249 / 0.3)), url(${imgVendedor})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="vendedor text-center py-10  ">
          <h3 className="font-bold text-emerald-300 uppercase text-3xl my-4">
            Si quieres ser vendedor
          </h3>
          <p className="text-white text-xl font-semibold w-3/4 mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus labore nemo nobis deleniti voluptate tempore debitis at
            enim natus eveniet?. ipsum dolor sit, amet consectetur adipisicing
            elit. Voluptatibus labore nemo nobis deleniti voluptate tempore
            debitis at enim natus eveniet?
          </p>

          <div className="info-contact flex flex-col md:flex-row w-3/4 mx-auto items-center justify-center mt-7 gap-6">
            <h3 className="text-2xl font-bold text-white">
              Para saber más contáctanos
            </h3>

            <div className="flex items-center gap-3 text-3xl text-emerald-300">
              <a href="https://instagram.com/soulproductosaromaticos?igshid=YmMyMTA2M2Y=">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="https://instagram.com/soulproductosaromaticos?igshid=YmMyMTA2M2Y=">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>

              <a href="https://instagram.com/soulproductosaromaticos?igshid=YmMyMTA2M2Y=">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vender;
