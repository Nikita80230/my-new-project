import styled from 'styled-components';

export const StyledShoppingCartProduct = styled.div`
  .cartProduct {
    display: flex;
    flex-direction: row;

    padding: 15px;

    border: 1px solid #000;
    border-radius: 15px;
  }

  .cartProductImg {
    max-width: 438px;
    width: 100%;

    border-radius: 15px;

    overflow: hidden;
  }

  .cartProductInfo {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 15px;
  }

  .cartProductTitle {
    margin-bottom: 20px;

    font-family: inherit;
    font-size: 35px;
    font-weight: 700;
  }

  .cartProductPrice {
    margin-bottom: 20px;

    font-family: inherit;
    font-size: 25px;
    font-weight: 400;
  }

  .cartProductQuantity {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  .quantityInput {
    max-width: 50px;
    width: 100%;

    text-align: center;

    border: 2px solid #000;
    border-radius: 10px;
  }

  .quantityBtn.decrease {
    margin-right: 30px;
  }

  .quantityBtn {
    border: none;
    background: transparent;
  }

  .removePill {
    border: none;
    background: transparent;
  }
`;
