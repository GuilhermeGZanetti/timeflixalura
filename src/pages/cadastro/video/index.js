import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFIeld';
import Button from '../../../components/Button';
import useForms from '../../../hooks/useForm';
import videoRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const { value, handleChange } = useForms({});
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const history = useHistory();

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1> Cadastro de Vídeo </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        const categoriaSelecionada = categorias.find(
          (categoria) => categoria.titulo === value.categoria,
        );

        // eslint-disable-next-line no-console
        console.log('ID da Categoria selecionada:', categoriaSelecionada.id);

        videoRepository.create({
          titulo: value.titulo,
          url: value.url,
          categoriaId: categoriaSelecionada.id,
        })
          .then(() => {
            // eslint-disable-next-line no-console
            console.log('Video cadastrado com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          title="Título do Vídeo:"
          type="text"
          value={value.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          title="URL:"
          type="text"
          value={value.url}
          name="url"
          onChange={handleChange}
        />

        <FormField
          title="Categoria:"
          type="text"
          value={value.categoria}
          name="categoria"
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
