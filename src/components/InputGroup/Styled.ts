import styled from 'styled-components';

export const StyledInputGroup = styled.label<{ $disabled?: boolean }>`
  display: flex;
  flex-direction: column;

  .labelText {
    margin: 0 auto 15px;
    text-transform: uppercase;
  }

  .input {
    padding: 0 10px;
    height: 35px;
    border-radius: 15px;

    font-size: 20px;
  }
`;
