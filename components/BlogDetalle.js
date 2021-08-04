import React from "react";
import Image from "next/image";
import { ButtonBlack } from "./ButtonBlack";
import BlogSec_2 from "../components/BlogSec_2";
import facebook from "../public/images/blog/facebook-icon.svg";
import twitter from "../public/images/blog/twitter.svg";
import linkendin from "../public/images/blog/linkendin.svg";
import img_detalle from "../public/images/blog/blog-detalle.png";
const BlogDetalle = () => {
  return (
    <>
      <div className="container-blog-detalle">
        <section className="post-detalle-1">
          <h2 className="titulo-post">
            Superpoderes para gestionar y resolver un conflicto
          </h2>
          <Image src={img_detalle} className="img-detalle" />

          <div className="texto1">
            <div className="avatar">
              <img
                src="https://placeimg.com/52/52/people"
                alt=""
                className="_avatar"
              />
              <div className="_avat avatar_detalle">
                <p>victor Cansilla</p>
                <h6>Mayo 12, 2021</h6>
              </div>
            </div>
            <p className="parrafo-1">
              Todas las organizaciones aspiran a que sus equipos logren un
              entorno y los estímulos adecuados para poder trabajar en estado de
              Flow. Pero, como todos somos humanos, a veces la realidad nos
              sorprende perturbando nuestra serenidad, por muy zen que sea
              nuestro estado habitual.
            </p>
            <p className="parrafo-1">
              A nadie le gustan los conflictos y cuando hacen acto de presencia
              en tu lugar de trabajo puedes llegar a pensar que todo el buen
              rollo que había en la oficina se va a acabar, que va a marcar un
              antes y un después convirtiéndose en un infierno de problemas como
              si el mismísimo Loki hubiera aterrizado en nuestra empresa.
            </p>
          </div>
        </section>

        <section className="post-detalle-2">
          <h2>1.identificar el conflicto</h2>
          <p className="parrafo-1">
            Lo primero que hay que hacer para gestionar un conflicto es
            distinguir sus causas, conociendo su situación actual y predecir sus
            posibles consecuencias. Para ello, una manera sencilla de entenderlo
            es comparar un conflicto con la estructura de un árbol, así podemos
            dividirlo en partes identificables.
          </p>
          <p className="parrafo-1">
            Las raíces del árbol serían las causas, ya que son la raíz del
            problema y a su vez son a veces difíciles de ver y de identificar.
            En segundo lugar, el tronco sería el problema central, siendo la
            base de las posibles consecuencias que darán lugar en un futuro. Por
            ello, las consecuencias son las hojas o la copa del árbol.
          </p>
          <p className="parrafo-1">
            En HRider ayudamos a que los profesionales de RR.HH. tengan esos
            "rayos X" que necesitan para ver qué ocurre bajo la superficie. En
            un abrir y cerrar los ojos es posible realizar una evaluación de
            clima laboral en la que añadiríamos un apartado de preguntas
            abiertas, donde los empleados pueden (de manera anónima) poner de
            relieve los posibles conflictos que se han ido produciendo o los que
            podrían aparecer a corto plazo si no sanamos las raíces que puedan
            estar afectadas. Y, para aumentar el superpoder, informes en tiempo
            real en el que de un vistazo podamos identificar el estado de salud
            general de nuestra empresa.
          </p>
          <h2>2.toma de conciencia</h2>
          <p className="parrafo-1">
            Lo segundo es hacer una toma de conciencia, aceptar que el conflicto
            existe para estar dispuesto a abordarlo. El conflicto es una parte
            natural y necesaria de nuestras vidas y puede tener un lado
            positivo: uno que construye relaciones, crea coaliciones, promueve
            la comunicación, fortalece las instituciones y crea nuevas ideas,
            reglas y leyes. Por ello, no podemos pensar que si sucede un
            conflicto en nuestro lugar de trabajo va a ser el fin del mundo.
            Debemos abordarlo como una nueva oportunidad de mejorar tanto la
            relación con nuestros compañeros como el funcionamiento de la
            empresa.
          </p>
        </section>
        <div className="redes-sociales">
          <h5>Compartir en:</h5>
          <div className="redes-icon">
            <div className="icon">
              <Image src={facebook} className="icon" />
            </div>
            <div className="icon">
              <Image src={twitter} className="icon" />
            </div>
            <div className="icon">
              <Image src={linkendin} className="icon" />
            </div>
          </div>
        </div>
      </div>
      <BlogSec_2 titulo="Te puede interesar" />
      {/* <Demo /> */}
      <ButtonBlack>Solicita una demo</ButtonBlack>
    </>
  );
};

export default BlogDetalle;
