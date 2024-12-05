import React from 'react';
import { ImArrowLeft2 } from 'react-icons/im';
import { BiPlus } from "react-icons/bi";
import { BsEmojiAstonished } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu'

function App() {
  var nome = 'Raphael'
  return (
    <div className="App">
      <header>
      <Link  className="voltar"  to="#"><ImArrowLeft2/></Link>
      
      <Link to="/Cadastro"><BiPlus />  Cadastrar imóvel</Link>
      </header>

      <main>

        <div className="botoes">
        Bem-vindo, {nome}!
        <button>Todos os flats</button> 
        <button>Indisponíves</button>
        </div>
     
        <div className="imovel">
          <div className="emoji">
          < BsEmojiAstonished/>
          </div>
       
        <p>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</p>

        <Link to="/Cadastro">
        <button className="btn-cadastro">Cadastrar meu primeiro imóvel</button>
        </Link>

        </div>
      </main>

      <Menu/>
    </div>
  );
}

export default App;
