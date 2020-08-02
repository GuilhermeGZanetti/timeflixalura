import { useState } from 'react';

function useForms(categoriaInicial) {
  const [value, setValues] = useState(categoriaInicial);

  function setValueAttribute(chave, valor) {
    // chave: titulo, descricao, cor
    setValues({
      ...value,
      [chave]: valor, // titulo: 'Filme'
    });
  }

  function handleChange(eventInf) {
    setValueAttribute(
      eventInf.target.getAttribute('name'),
      eventInf.target.value,
    );
  }

  return {
    value,
    handleChange,
  };
}

export default useForms;
