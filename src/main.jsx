import React from 'react'
import ReactDOM from 'react-dom/client'
import {Inicio} from './components/Inicio'; 
import '/src/estilos/Inicio.css'
import {Areas} from './components/Areas';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Inicio/> */}
    <Areas/>
  </React.StrictMode>,
)
