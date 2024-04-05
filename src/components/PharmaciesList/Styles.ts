import styled from 'styled-components';

export const StyledPharmaciesList = styled.div`
  max-height: 650px;

  border: 1px solid black;
  border-radius: 15px;
  padding: 15px 15px 15px 15px;

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

  .pharmacyBtn {
    width: 100%;
    height: 70px;

    border-radius: 15px;
  }

  .pharmacyBtn.active {
    background-color: aquamarine;
  }

  .pharmacyBtn:not(:last-child) {
    margin-bottom: 15px;
  }
`;
