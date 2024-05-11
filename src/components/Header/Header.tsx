import { NavLink } from 'react-router-dom';
import { StyledHeader } from './Styled';
import { RoutePath } from '@/routes/routes';
import { Container } from '..';

const Header = () => {
  return (
    <StyledHeader data-testid="header">
      <Container>
        <nav className="navigation">
          <NavLink className="link" to={RoutePath.MAIN}>
            Shop
          </NavLink>
          <div className="divider"></div>
          <NavLink className="link" to={RoutePath.CART}>
            Shopping cart
          </NavLink>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
