import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: ${(props) => props.width || '360px'};
  margin-bottom: ${(props) => props.mb || 0};
  border-color: ${(props) => props.color};
  disabled: ${(props) => props.disabled};
`;

function Input({ type, onChange, placeholder, name, width, mb, color, autoComplete, disabled }) {
  return (
    <StyledInput
      className={`h-[48px] border-[1px] border-solid border-gray rounded-[10px] text-[14px] indent-[20px] placeholder-[#d9d9d9]`}
      width={width}
      mb={mb}
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onChange={onChange}
      color={color}
      disabled={disabled}
    />
  );
}

export default Input;
