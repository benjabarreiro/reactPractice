import React from 'react';
import PropTypes from 'prop-types';
import './Pelicula.css';

function Pelicula(props) {

    let listadoDeGeneros;

    if (props.generos != null) {
        listadoDeGeneros =
        <ul>
                { props.generos.map( (genero, i) => <li key={genero + i}> {genero} </li> ) }
        </ul>
    } else {
        let listadoDeGeneros = "";
    }

    return (
        <div>
            <h2 className="sarasa">{props.titulo}</h2>
            <p>Rating: {props.rating}</p>
            { listadoDeGeneros }
        </div>
    );
}

Pelicula.defaultProps = {
    rating: "Esta peli aún no fue probada!!",
    generos: null
}

Pelicula.propTypes = {
    rating: PropTypes.number,
    titulo: PropTypes.string
}

export default Pelicula;