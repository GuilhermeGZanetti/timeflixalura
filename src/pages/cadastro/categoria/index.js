import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useForms from '../../../hooks/useForm';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFIeld';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const categoriaInicial = {
    titulo: '', descricao: '', cor: ' ',
  };

  const { value, handleChange } = useForms(categoriaInicial);

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
        {value.titulo}
      </h1>
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setCategorias([...categorias, value]);
      }}
      >
        <FormField
          title="Título da Categoria:"
          type="text"
          value={value.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          title="Descrição:"
          type="textarea"
          value={value.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          title="Cor:"
          type="color"
          value={value.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
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
