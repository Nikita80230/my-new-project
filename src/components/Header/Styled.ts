import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 1;

  display: flex;
  align-items: center;

  min-height: 70px;
  width: 100vw;

  background-color: #c9ecfc;

  .navigation {
    display: flex;
    align-items: center;
  }

  .link {
    font-size: 20px;
    font-weight: 700;

    color: inherit;
  }

  .divider {
    width: 1px;
    height: 50px;

    margin-left: 15px;
    margin-right: 15px;

    background-color: black;
  }
`;
