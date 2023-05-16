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
            <p>Centro de diseño e innovación <br/> tecnológico industrial</p>
          </div>
        </div>
      </header>

      <div className="programas">
        <div className="tarjeta-inicial"></div>
      </div>
    </>
  );
};
