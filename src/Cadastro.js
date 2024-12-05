import React from 'react';
import './Cadastro.css';
import { ImArrowLeft2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import  { useState } from 'react';

function Cadastro() {


  return (
    <div className="Cadastro">

    <header>
    <Link  className="voltar"  to="/"><ImArrowLeft2/></Link>
     </header>

     <main>
      <h1>Para começarmos, precisamos de alguns dados</h1>

      <form action="">
        <input type="text" name="nomeI" id="nomeI" placeholder="Nome do imóvel" />
        <p className="aviso">O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede</p>

        <textarea id="descricao" name="descricao" placeholder="Descrição" maxlength="250" />
        <div className="contador">
        0/250
        </div>

        <input type="number" name="cep" id="cep" placeholder="CEP" />

        <input type="text" name="endereco" id="endereco" placeholder="Endereço" />


        <div className="pequenosIn">

        <input type="number" name="numero" id="numero" placeholder="Número" />

        <input type="text" name="complemento" id="complemento" placeholder="Complemento" />

        <input type="text" name="cidade" id="cidade" placeholder="Cidade" />

        <select id="uf" name="uf">
          <option value="">UF</option>
          <option value="AC">AC</option>
          <option value="AL">AL</option>
          <option value="AP">AP</option>
          <option value="AM">AM</option>
          <option value="BA">BA</option>
          <option value="CE">CE</option>
          <option value="DF">DF</option>
          <option value="ES">ES</option>
          <option value="GO">GO</option>
          <option value="MA">MA</option>
          <option value="MT">MT</option>
          <option value="MS">MS</option>
          <option value="MG">MG</option>
          <option value="PA">PA</option>
          <option value="PB">PB</option>
          <option value="PR">PR</option>
          <option value="PE">PE</option>
          <option value="PI">PI</option>
          <option value="RJ">RJ</option>
          <option value="RN">RN</option>
          <option value="RS">RS</option>
          <option value="RO">RO</option>
          <option value="RR">RR</option>
          <option value="SC">SC</option>
          <option value="SP">SP</option>
          <option value="SE">SE</option>
          <option value="TO">TO</option>
        </select>

        </div>

        <button className="btn-continuar" type="submit">Continuar</button>
      </form>
     </main>

    </div>
  );
}

export default Cadastro;
