import React from 'react';
import styles from "./Formulario.module.css"



const Noticia = ({noticia}) => {
    // extraer los datos
    const { urlToImage, url, title, description, source } = noticia;

    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
    : null;

    return ( 
        <div>
            <div className={`card ${styles.width}`}>
                {imagen}

                <div className="card-content">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
     );
}

 
export default Noticia;