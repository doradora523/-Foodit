import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: ${props => props.width || '360px'};
  margin-bottom: ${props => props.mb || 0};
`;

function Input({ type, onClick, label, placeholder, width, mb, autoComplete }) {
  return (
    <StyledInput
      className="h-[48px] border-[1px] border-solid border-[rgba(0,0,0,0.4)] rounded-[10px] text-14px indent-[20px] placeholder-[#d9d9d9]"
      width={width}
      mb={mb}
      type={type}
      label={label}
      placeholder={placeholder}
      onClick={onClick}
      autoComplete={autoComplete}></StyledInput>
  );
}

export default Input;
