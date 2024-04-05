import styled from 'styled-components';

export const StyledProduct = styled.div`
  /* padding: 0 15px; */

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow: hidden;
    min-height: 300px;
    border: 2px solid black;
    border-radius: 20px;
  }

  .pillImg {
    /* max-width: 150px; */
    display: block;
    width: 100%;

    margin-bottom: 15px;
  }

  .pillTitle {
    /* font-family: inherit; */
    font-size: 20px;
    font-weight: 700;
  }

  .pillPrice {
    /* font-family: inherit; */
    font-size: 20px;
    /* font-weight: 700; */
  }

  .pillInfo {
    display: flex;
    justify-content: space-between;

    padding: 0 15px;

    margin-bottom: 15px;
  }

  .pillPharmacyName {
    padding: 0 15px;
  }

  .pillAddBtn {
    min-height: 50px;
    margin-top: auto;

    background-color: #8181815c;
    border: 1px solid black;

    border-left: none;
    border-bottom: none;
    border-right: none;
  }
`;
