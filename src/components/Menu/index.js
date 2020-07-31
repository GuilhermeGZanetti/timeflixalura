import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
// import {MenuBase} from './styles'; //Não consegui fazer o menu com o styled-components
import Button from '../Button';

function Menu() {
  return (
    <div className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Timeflix Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Guarde um vídeo no tempo
      </Button>
    </div>
  );
}

export default Menu; // Para outros arquivos poderem importar
