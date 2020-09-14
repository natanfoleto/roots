import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Info, Copyright, Social } from './styles';

function Footer() {
  return (
    <Container>
      <Info>
        <div>
          <h1> ROOTS </h1>

          <p>
            Compre Roupas Femininas, Masculinas, Infantis, Perfumes, Sapatos e Acessórios com pagamento parcelado.
          </p>
        </div>

        <div>
          <h1> Links Rápidos </h1>

          <Link to="/">Promoções</Link> 
          <Link to="/">Categorias</Link> 
          <Link to="/">Cadastro</Link> 
          <Link to="/">Login</Link>
          
        </div>

        <div>
          <h1> Começe Já </h1>

          <p> Seja um cliente agora. </p>

          <Link to="/register/client">
            <button>Cadastre-se</button>
          </Link>          
        </div>

        <div>
          <h1> Contatos </h1>

          <p> (16) 3347-1901 </p>
          <Link>loja.roots@hotmail.com</Link>       

          <Social>
            <a href="https://web.whatsapp.com" target="blank">
              <img alt= "Facebook" src="https://img.icons8.com/fluent/50/000000/whatsapp.png"/>
            </a>

            <a href="https://www.facebook.com" target="blank">
              <img alt= "Facebook" src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/>
            </a>

            <a href="https://www.instagram.com" target="blank">
              <img alt= "Facebook" src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/>
            </a>
          </Social>
          
          <nav>

          </nav>
        </div>
      </Info>

      <Copyright>
        © Copyright 2020 Roots - Versão 1.0.0
      </Copyright>
    </Container>
  );
}

export default Footer;