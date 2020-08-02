import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import PageDefault from '../../components/PageDefault';
import Carousel from '../../components/Carousel';
import config from '../../data/config';

function Home() {
  const [dadosCategoriasVideos, setDadosCategoriasVideos] = useState([]);

  // Pega as informações do Servidor
  useEffect(() => {
    const URL = `${config.URL_BACKEND}/categorias?_embed=videos`;
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setDadosCategoriasVideos(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosCategoriasVideos.length === 0 && (<div>Loading...</div>)}

      {dadosCategoriasVideos.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosCategoriasVideos[0].videos[0].titulo}
                url={dadosCategoriasVideos[0].videos[0].url}
                videoDescription={dadosCategoriasVideos[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosCategoriasVideos[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
