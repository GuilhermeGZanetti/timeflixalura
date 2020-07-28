import React from 'react';
import Logo from '../../assets/img/logo.png';
import "./Menu.css";
//import {MenuBase} from './styles'; //Não consegui fazer o menu com o styled-components
import Button from '../Button';


function Menu(){
    return(
        <div className="Menu"> 
            <a href="/">
                <img className="Logo" src={Logo} alt="Timeflix Logo"/>
            </a>

            <Button as='a' className="ButtonLink" href="/">
                Guarde um vídeo no tempo
            </Button>
        </div>
    );
}

export default Menu; //Para outros arquivos poderem importar