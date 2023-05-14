import "/src/estilos/Inicio.css";
import { Navbar } from '/src/components/Navbar';
export const Inicio = () => {
  return (
    <>
      <div className="contenedor">
        <video autoPlay loop muted style={{ width: "100%", height: "100vh" }}>
          <source src="/src/videos/cditi.mp4" type="video/mp4" />
        </video>
        <div className="capa">
          <Navbar/>
          <div className="main">
            <img src="/src/imagenes/logo-blanco.png" alt="" />
            <h1>CDITI</h1>
            <h4>Centro de diseño e innovación <br />tecnológico industrial</h4>
            <button>Recorrido virtual</button>
          </div>
        </div>
      </div>
    </>
  );
};
