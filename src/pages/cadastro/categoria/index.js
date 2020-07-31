import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFIeld';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const categoriaInicial = {
    nome: '', descricao: '', cor: ' ',
  };
  const [categoriaAtual, setCategoria] = useState(categoriaInicial);

  function setValorCategoria(chave, valor) {
    // chave: nome, descricao, cor
    setCategoria({
      ...categoriaAtual,
      [chave]: valor, // nome: 'Filme'
    });
  }

  function handleChange(eventInf) {
    setValorCategoria(
      eventInf.target.getAttribute('name'),
      eventInf.target.value,
    );
  }

  useEffect(() => {
    let URL;
    if (window.location.hostname.includes('localhost')) {
      URL = 'http://localhost:8080/categorias';
    } else {
      URL = 'https://timeflix.herokuapp.com/categorias';
    }
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {categoriaAtual.nome}
      </h1>
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setCategorias([...categorias, categoriaAtual]);
      }}
      >
        <FormField
          title="Nome da Categoria:"
          type="text"
          value={categoriaAtual.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          title="Descrição:"
          type="textarea"
          value={categoriaAtual.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          title="Cor:"
          type="color"
          value={categoriaAtual.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.nome}`}>
              {categoria.nome}
            </li>
          ))}
        </ul>

      </form>

      <Link to="/">
        Voltar para Home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
