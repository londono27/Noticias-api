import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import styles from "./components/Formulario.module.css";

function App() {
  //Definir la categoria
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=248c6c75684b449f98a364a2b036cccb`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Noticias-COL"></Header>
      <div className="blue-grey darken-2 ">
        <Formulario guardarCategoria={guardarCategoria}></Formulario>
      </div>
      <div className={`${styles.bagraund}`}>
        <div className="container">
          <ListadoNoticias noticias={noticias} />
        </div>
      </div>
    </Fragment>
  );
}
export default App;
