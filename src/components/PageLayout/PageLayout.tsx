import { FC, ReactNode } from 'react';
import { Container, Header } from '@/components';
import { StyledPageLayout } from './Styled';

type Props = {
  children: ReactNode;
};

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <StyledPageLayout>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
    </StyledPageLayout>
  );
};

export default PageLayout;
