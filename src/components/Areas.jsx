import { Navbar } from "../components/Navbar";
import "/src/estilos/Areas.css";
export const Areas = () => {
  return (
    <>
      <Navbar />
      <header>
        <div className="cabecero">
          <div className="logo">
            <img src="/src/imagenes/logo-verde.png" alt="logo-sena" />
          </div>
          <div className="titulo">
            <h1>Áreas de formación</h1>
            <p>
              Centro de diseño e innovación <br /> tecnológico industrial
            </p>
          </div>
        </div>
      </header>

      <div className="programas">
        <div className="tarjeta-inicial">
          <img src="/src/imagenes/construccion.jpg" alt="" />
          <h4 className="titulo-programa">
            CONSTRUCCIÓN
          </h4>
          <button id="boton">Ver más</button>
        </div>
        <div className="tarjeta-inicial">
          <img src="/src/imagenes/informatica.jpg" alt="" />
          <h4 className="titulo-programa">
            TELEINFORMÁTICA
          </h4>
          <button id="boton">Ver más</button>
        </div>
        <div className="tarjeta-inicial">
          <img src="/src/imagenes/automatizacion.jpg" alt="" />
          <h4 className="titulo-programa">
            AUTOMATIZACIÓN
          </h4>
          <button id="boton">Ver más</button>
        </div>
        <div className="tarjeta-inicial">
          <img src="/src/imagenes/confecciones.jpg" alt="" />
          <h4 className="titulo-programa">
             CONFECCIONES
          </h4>
          <button id="boton">Ver más</button>
        </div>
        <div className="tarjeta-inicial">
          <img src="/src/imagenes/soldadura.jpg" alt="" />
          <h4 className="titulo-programa">
            SOLDADURA
          </h4>
          <button id="boton">Ver más</button>
        </div>
        <div className="tarjeta-inicial">
          <img src="/src/imagenes/electricidad.jpg" alt="" />
          <h4 className="titulo-programa">
            ELECTRICIDAD
          </h4>
          <button id="boton">Ver más</button>
        </div>
        <div className="tarjeta-inicial">
          <img src="/src/imagenes/mecanica.jpg" alt="" />
          <h4 className="titulo-programa">
            FABRICACIÓN MECÁNICA
          </h4>
          <button id="boton">Ver más</button>
        </div>
        <div className="tarjeta-inicial">
          <img src="/src/imagenes/automotriz.jpg" alt="" />
          <h4 className="titulo-programa">
            AUTOMOTRIZ
          </h4>
          <button id="boton">Ver más</button>
        </div>
      </div>
    </>
  );
};
