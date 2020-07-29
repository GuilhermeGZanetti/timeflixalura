import React from 'react'

function setInputOrTextArea(type, value, name, onChange){
    if(name === "descricao"){
        return(
            <textarea
                type={type}
                defaultValue={value}
                name={name}
                onChange={onChange} 
            />
        )  
    } else {
        return(
            <input
                type={type}
                defaultValue={value}
                name={name}
                onChange={onChange} 
            />
        )            
    }
}

function FormField( {title, type, value, name, onChange} ){
    return(
        <div>
            <label>
                {title}
                {setInputOrTextArea(type, value, name, onChange)}
            </label>
        </div>
    );
}

export default FormField;