import React from "react";
import Noticia from "./Noticia";
import styles from "./Formulario.module.css"

const ListadoNoticias = ({noticias}) =>  ( 
    <div className={`${styles.wid}`}>
        {noticias && noticias.map(noticia => (
            <Noticia 
                key={noticia.url}
                noticia={noticia}
            />
        ))}
    </div>
);

export default ListadoNoticias;
