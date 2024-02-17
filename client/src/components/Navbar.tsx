/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

import H1 from './ui/H1';
import { COLORS } from '../styles/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { stat } from 'fs';

const Nav = styled.nav`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${COLORS.white};
  font-weight: bold;
  text-decoration: none;
  font-family: inherit;
  background: transparent;
  font-size: 1.1rem;
  padding: 10px 30px;
  border-radius: 5px;
  border: 2px solid ${COLORS.white};

  &:hover {
    color: ${COLORS.green};
    border: 2px solid ${COLORS.lightGray};
  }
`;

export default function Navbar() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  return (
    <Nav
      css={css`
        border-bottom: 1px solid #e0e0e0;
      `}
    >
      <Link
        css={css`
          text-decoration: none;
        `}
        to="/"
      >
        <H1>ShareMusize</H1>
      </Link>
      <div
        css={css`
          display: flex;
          gap: 10px;
        `}
      >
        {isAuthenticated ? (
          <>
            {location.pathname !== '/songs/me' && (
              <NavLink to="/songs/me">Personal Board</NavLink>
            )}
            <NavLink to="/">Logout</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </div>
    </Nav>
  );
}
