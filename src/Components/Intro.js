import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Intro extends Component {
    render() {
        return (
            <section className="hero is-success is-fullheight intro-image ">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title intro-titulo">Bienvenido (a)</h1>
                        <p
                            style={{
                            'fontSize': '1.3em'
                        }}>Por favor seleccione su dispositivo en cuestión para continuar:</p>
                        <div className="b-elegir-dispositivo container has-text-centered">
                            <Link to="/movil">
                                <div
                                    style={{
                                    'fontSize': '1.3em',
                                    'margin':'10% 0 10% 0',
                                    'textDecoration':'none'
                                }}
                                    className="button is-info">Dispositivo Móvil</div>
                            </Link>
                            <Link to="/inicio">
                                <div
                                    style={{
                                    'fontSize': '1.3em',
                                    'textDecoration':'none'
                                }}
                                    className="button is-primary">Computador PC</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;