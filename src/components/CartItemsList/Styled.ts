import styled from 'styled-components';

export const StyledCartItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  max-height: 680px;

  padding: 15px;

  border-radius: 15px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 26px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 20px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    border-radius: 55px;
    background: #264061;
  }
`;
