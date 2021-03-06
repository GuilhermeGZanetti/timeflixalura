import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;
Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type="color"]) + span {
    transform: scale(0.5) translate(-5px, -10px);
  }

  ${({ defaultValue }) => {
    const hasValue = defaultValue.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

function FormField({
  title, type, value, name, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const InputTag = type === 'textarea' ? 'textarea' : 'input';

  const hasSuggestion = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={InputTag}
          type={type}
          defaultValue={value}
          name={name}
          onChange={onChange}
          autoComplete={hasSuggestion ? 'off' : 'on'}
          list={hasSuggestion ? `sugestion_for_${fieldId}` : undefined}
        />
        <Label.Text>
          {title}
        </Label.Text>
        {
          hasSuggestion && (
          <datalist id={`sugestion_for_${fieldId}`}>
            {
            suggestions.map((suggestion) => (
              <option value={suggestion} key={`sugestion_for_${fieldId}_${suggestion}`}>
                {suggestion}
              </option>
            ))
          }
          </datalist>
          )
        }
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  value: '',
  suggestions: [],

};

FormField.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
