/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { COLORS, colors } from '../styles/colors';
import CheckBox from './CheckBox';
import Genres from '../styles/Genres';
import SearchInput from '../styles/SearchInput';
import { musicGenres } from '../constants';

const SideBar: React.FC = () => {
  return (
    <div css={css`
        flex: 1;
    `}>
      <div>
        <div css={css`
            display: flex;
            gap: 10px;
            justify-content: center;
            border-radius: 15px;
            padding: 5px 15px;
            align-items: center;
            background-color: ${colors.gray[400]};
        `}>
          <FontAwesomeIcon style={{
            fontSize: '20px',
          }} icon={faMagnifyingGlass} color={COLORS.black} />
          <SearchInput type="text" placeholder="Search" />
        </div>
      </div>

      <h3 css={css`
          margin-top: 80px;
          margin-bottom: 20px;
          margin-left: 20px;
          border-bottom: 1px solid ${COLORS.lightGray};
          padding-bottom: 13px;
          color: ${COLORS.white};
          font-size: 1.4rem;
          font-weight: bold;
      `}
      >Genres</h3>
      <Genres>
        {musicGenres.map((name, index) => (
          <CheckBox key={index} name={name} />
        ))}
      </Genres>
    </div>
  );
};

export default SideBar;