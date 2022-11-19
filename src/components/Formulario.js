import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

export default function Formulario({ guardarCategoria }) {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];
  //usar custom hook
  const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

  //submit al form, pasar categoria a app.js
  const buscarNoticias = (e) => {
    e.preventDefault();
    guardarCategoria(categoria);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Selecciona la categoria:</h2>
          <SelectNoticias />
          <div
            className={`${styles["contenedor-btn"]} input- field col s12 contenedorbtn`}
          >
            <input
              type="submit"
              className={`${styles["btn-block"]} btn-large darken-2`}
              value="buscar"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
