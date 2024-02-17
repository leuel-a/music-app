/** @jsxImportSource @emotion/react */
import React from 'react';

import defaultImage from '../assets/default_image.jpg';
import { Music } from '../types/Music';
import { css } from '@emotion/react';
import { COLORS } from '../styles/colors';

interface Props {
  music: Music;
}

const MusicCard: React.FC<Props> = ({ music: { title, artist, imageUrl } }) => {
  return (
    <div>
      <img
        css={css`
          width: 250px;
          min-height: 250px;
          border-radius: 15px;
          margin-bottom: 10px;
        `}
        src={imageUrl ? imageUrl : defaultImage}
        alt={`${title} by ${artist}`}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: center;
        `}
      >
        <h3
          css={css`
            color: ${COLORS.white};
            font-family: 'Inter', sans-serif;
            font-weight: bold;
            font-size: 1.3rem;
          `}
        >
          {title}
        </h3>
        <h4
          css={css`
            margin-top: 8px;
            color: ${COLORS.lightGray};
            font-weight: bold;
            font-size: 1rem;
          `}
        >
          {artist}
        </h4>
      </div>
    </div>
  );
};

export default MusicCard;
