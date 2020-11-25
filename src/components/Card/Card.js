import React from 'react'
import './style.scss'
import imagemTeste from '../../assets/imageTeste.png'
function Card() {
    return (    
        <div className="container-card">
                <img src={imagemTeste} alt=""/>
                <section className="informations-card">
                    <span className="title-article">Morre de Trabalhar: Sofrimento e suicídio no mundo do trabalho</span>
                    <section className="author-article">
                        <span> Escrito por: Dr. Sebastião </span>
                        <span> Data: 28/09/2020 </span>
                    </section>
                </section>
        </div>
    )
}

export default Card
