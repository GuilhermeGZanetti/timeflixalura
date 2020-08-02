import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFIeld';
import Button from '../../../components/Button';
import useForms from '../../../hooks/useForm';
import videoRepository from '../../../repositories/videos';

function CadastroVideo() {
  const { value, handleChange } = useForms({});
  const history = useHistory();

  return (
    <PageDefault>
      <h1> Cadastro de Vídeo </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        videoRepository.create({
          titulo: value.titulo,
          url: value.url,
          categoriaId: 1,
        })
          .then(() => {
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
          value={value.categoriaId}
          name="url"
          onChange={handleChange}
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
