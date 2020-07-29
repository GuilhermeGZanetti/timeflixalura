import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormFIeld';


function CadastroCategoria(){

    const [categorias, setCategorias] = useState([]);

    const categoriaInicial = {
        nome:'', descricao: '', cor: ' '
    };
    const [categoriaAtual, setCategoria] = useState(categoriaInicial);

    function setValorCategoria(chave, valor){
        //chave: nome, descricao, cor
        setCategoria({  
            ...categoriaAtual, 
            [chave]: valor //nome: 'Filme'
        }); 
    }

    function handleChange(eventInf){
        setValorCategoria(
            eventInf.target.getAttribute('name'), 
            eventInf.target.value
        );
    }
    

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {categoriaAtual.nome}</h1>
            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                
                setCategorias([...categorias, categoriaAtual]);
            }}>
                <FormField
                    title="Nome da Categoria:"
                    type="text"
                    value={categoriaAtual.nome}
                    name="nome"
                    onChange={handleChange}
                />

                <FormField
                    title="Descrição:"
                    type="text"
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

                <button>
                    Cadastrar
                </button>
                

                <ul>
                    {categorias.map((categoriaAtual, indice) => {
                    return (
                        <li key={`${categoriaAtual}${indice}`}>
                            {categoriaAtual.nome}
                        </li>
                    )
                    })}
                </ul>

            </form>

            <Link to="/">
                Voltar para Home
            </Link>           

        </PageDefault>
    )
}

export default CadastroCategoria;