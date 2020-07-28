import React from 'react';


function ButtonLink(props){
    //props => {className: "O nome da classe quando for chamado"}
    return(
        <a className={props.className} href={props.href}> 
            {props.children}
        </a>
    );
}

export default ButtonLink; //Para outros arquivos poderem importar
