import { FC, ReactNode } from 'react';
import { StyledContainer } from './Styled';

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
