import styled from 'styled-components';

export const StyledShoppingCartPage = styled.form`
  display: grid;
  grid-template-areas:
    'formComponent  list list list list list'
    'formComponent  list list list list list'
    'formComponent  list list list list list'
    'formComponent  list list list list list'
    'formComponent  list list list list list'
    'total total total total total total';
  gap: 20px;

  min-height: calc(100vh - 70px);

  padding-top: 30px;
  padding-bottom: 30px;

  .cartItemsList {
    grid-area: list;

    border: 1px solid black;
  }
  .formComponent {
    grid-area: formComponent;
    border: 1px solid black;
  }
  .totalContainer {
    grid-area: total;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    min-height: 100px;

    padding: 0 15px;

    border: 1px solid black;
    border-radius: 15px;
  }

  .totalText {
    margin-right: 20px;

    font-size: 32px;
  }

  .totalBtn {
    max-width: 100px;
    width: 100%;
    height: 30px;

    font-size: 20px;

    border-radius: 15px;
  }
`;
