import React from "react";
import "./style.scss";
import Logo from "../../assets/logo.svg";
import Login from "../../assets/login.svg";

function Header() {
  return (
    <header>
      <div className="mensagem">
        NOSSO CONTEÚDO É AVALIDO ANTES DE SER PUBLICADO. GARANTINDO A VERACIDADE
        DAS INFORMAÇÕES
      </div>
      <div className="container">
        <div className="section-top">
          <section className="container-logo">
            <img src={Logo} alt="Logo Portal Saúde" />
          </section>
          <section className="container-search">
            <section className="search">
              <input type="text" placeholder="Buscar" />
              <button>Buscar</button>
            </section>
          </section>
          <section className="container-login">
            <section>
              <img src={Login} alt="Entrar / Cadastrar-se" />
              <span>
                <p>Entrar</p>
                <p>Cadastrar-se</p>
              </span>
            </section>
          </section>
        </div>
        <div className="section-bottom">
          <section className="categorias">Categorias</section>
          <section className="menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Fale Conosco</a>
              </li>
              <li>
                <a href="#">COVID-19</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </header>
  );
}

export default Header;
