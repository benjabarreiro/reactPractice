import React, { Component } from 'react';
import Pelicula from './Pelicula';

class TiraPeliculas extends Component {

    lanzarAlerta() {
        alert("Me clickeaste!");
    }

    cambiarAmarillo() {
        document.querySelector("body").style.backgroundColor = "Yellow";
    }

    cambiarRosa() {
        document.querySelector("body").style.backgroundColor = "Pink";
    }


    render() {
        return (
            <div onClick={ this.lanzarAlerta } onMouseOver={ this.cambiarAmarillo } onMouseOut={ this.cambiarRosa }>
                <Pelicula generos={["Fantasia", "Aventura"]} rating={8.0} titulo="Harry Potter" />
                <Pelicula generos={["Animación", "Familiar"]} rating={7.5} titulo="Toy Story" />
                <Pelicula generos={["Drama"]} titulo="Her" />
                <Pelicula rating={9.0} titulo="Parasite" />
                <Pelicula generos={["Acción", "Aventura"]} rating={4.0} titulo="Transformers" />
            </div>
        );
    }
}

export default TiraPeliculas;