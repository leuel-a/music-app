/** @jsxImportSource @emotion/react */
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import H2 from './components/ui/H2';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import MusicCard from './components/MusicCard';

import { COLORS } from './styles/colors';
import GlobalStyles from './styles/GlobalStyles';
import { RootState } from './redux';
import { fetchMusics } from './redux/musics/musicSlice';
import { checkAuthState } from './redux/authentication/authSlice';
import MusicContainer from './styles/MusicContainer';


export default function App() {
  const { musics, loading, currPage, totalPages } = useSelector(
    (state: RootState) => state.music,
  );
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchMusics({ type: 'Initial' }));
    const accessToken = Cookies.get('accessToken');

    const authenticated = !!accessToken;
    dispatch(checkAuthState({ isAuthenticated: authenticated }));
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <div
        css={css`
          margin-top: 20px;
        `}
      >
        <div
          css={css`
            display: flex;
          `}
        >
          {/* SideBar Component */}
          <SideBar />
          <div
            css={css`
              flex: 4;
              margin-left: 20px;
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                gap: 10px;
              `}
            >
              <H2>Recently Added</H2>
              <button
                style={{
                  cursor: 'pointer',
                }}
                css={css`
                  background-color: inherit;
                  border: none;
                `}
                disabled={currPage === 1}
                onClick={() => dispatch(fetchMusics({ type: 'Left' }))}
              >
                <FontAwesomeIcon
                  color={currPage === 1 ? COLORS.lightGray : COLORS.white}
                  size="2x"
                  icon={faCircleChevronLeft}
                />
              </button>
              <button
                style={{
                  cursor: 'pointer',
                }}
                css={css`
                  background-color: inherit;
                  border: none;
                `}
                disabled={currPage === totalPages}
                onClick={() => dispatch(fetchMusics({ type: 'Right' }))}
              >
                <FontAwesomeIcon
                  style={{
                    cursor: 'pointer',
                  }}
                  color={
                    currPage === totalPages ? COLORS.lightGray : COLORS.white
                  }
                  size="2x"
                  icon={faCircleChevronRight}
                />
              </button>
            </div>
            <MusicContainer>
              {musics.map((music) => (
                <MusicCard key={music._id} music={music} />
              ))}
            </MusicContainer>
          </div>
        </div>
      </div>
    </>
  );
}
