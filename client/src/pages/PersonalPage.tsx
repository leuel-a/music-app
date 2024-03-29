/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../styles/colors';
import Navbar from '../components/Navbar';
import FormGroup from '../styles/FormGroup';
import MusicCard from '../components/MusicCard';
import { AppDispatch, RootState } from '../redux';
import GlobalStyles from '../styles/GlobalStyles';
import MusicContainer from '../styles/MusicContainer';
import userSlice, {
  getSelfMusics,
  deleteMusic,
  updateMusic,
} from '../redux/user/userSlice';
import ButtonGroup from '../styles/AddMusicButtonGroup';
import ErrorMessageSpan from '../styles/ErrorMessageSpan';
import { createMusicRequest } from '../redux/createMusic/createMusicSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faCircleChevronRight,
  faCircleChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import H1 from '../components/ui/H1';
import { checkAuthState } from '../redux/authentication/authSlice';
import { fetchMusics } from '../redux/musics/musicSlice';
import Cookies from 'js-cookie';

const MySongsPage: React.FC = () => {
  // States for the inputs
  const [title, setTitle] = useState<string>('');
  const [artistName, setArtistName] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [addNew, setAddNew] = useState<boolean>(false);

  // State for update music
  const [selectedMusicId, setSelectedMusicId] = useState<string>('');

  // Error states for the inputs
  const [titleError, setTitleError] = useState<string>('');
  const [durationError, setDurationError] = useState<string>('');
  const [genreError, setGenreError] = useState<string>('');
  const [artistNameError, setArtistNameError] = useState<string>('');

  const {
    musics,
    loading: loadingMusics,
    user,
    currPage,
    totalPages,
    faliure: failureLoadingMusics,
    errorMessage: errorLoadingMusics,
  } = useSelector((state: RootState) => state.user);

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const {
    loading: loadingCreateMusic,
    failure: failureCreateMusic,
    errorMessage: errorCreateMusic,
  } = useSelector((state: RootState) => state.createMusic);

  const dispatch = useDispatch<AppDispatch>();

  const handleClear = () => {
    setTitle('');
    setArtistName('');
    setDuration('');
    setImageUrl('');
    setGenre('');
  };

  const handleDeleteMusic = (musicId: string) => {
    dispatch(deleteMusic({ musicId }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === '') {
      setTitleError('Title cannot be empty');
      return;
    }
    if (artistName === '') {
      setArtistNameError('Artist name cannot be empty');
      return;
    }

    if (duration === '') {
      setDurationError('You need to set duration is seconds');
      return;
    }

    if (genre === '') {
      setGenreError('Genre cannot be empty');
      return;
    }

    if (addNew) {
      const music = {
        title,
        artist: artistName,
        duration,
        imageUrl,
        genre,
      };
      dispatch(createMusicRequest(music));
      dispatch(getSelfMusics({ type: 'Initial' }));
    } else {
      // update music
      const music = {
        title,
        artist: artistName,
        duration,
        imageUrl,
        genre,
      };
      dispatch(updateMusic({ musicId: selectedMusicId, update: music }));
    }
  };

  console.log(currPage, totalPages);

  useEffect(() => {
    dispatch(fetchMusics({ type: 'Initial' }));
    const accessToken = Cookies.get('accessToken');

    const authenticated = !!accessToken;
    dispatch(checkAuthState({ isAuthenticated: authenticated }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSelfMusics({ type: 'Initial' }));
  }, [dispatch]);

  if (!isAuthenticated) {
    navigate('/signup', { replace: true });
  }

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <div
        css={css`
          display: flex;
          column-gap: 35px;
        `}
      >
        <div
          css={css`
            min-width: 325px;
          `}
        >
          <h1
            css={css`
              color: #fff;
              font-size: 2rem;
              text-align: left;
              margin-top: 40px;
              font-weight: bold;
            `}
          >
            {user?.name}
          </h1>
          <h2
            css={css`
              margin-top: 5px;
              font-size: 1rem;
              color: ${COLORS.lightGray};
              text-decoration: underline;
            `}
          >
            {user?.email}
          </h2>

          <h1
            css={css`
              margin-top: 100px;
              color: #fff;
              font-size: 1.5rem;
              font-weight: bold;
              text-align: left;
            `}
          >
            Add or Edit a Song
          </h1>
          <form
            css={css`
              padding-top: 20px;
              display: flex;
              flex-direction: column;
              row-gap: 20px;
            `}
            action=""
            onSubmit={handleFormSubmit}
          >
            <FormGroup>
              <label htmlFor="name">Title</label>
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.currentTarget.value);

                  if (titleError !== '') {
                    setTitleError('');
                  }
                }}
                type="text"
                id="title"
                placeholder="Song title"
              />
              {titleError && (
                <ErrorMessageSpan margintop="0" size="13px">
                  {titleError}
                </ErrorMessageSpan>
              )}
            </FormGroup>
            <FormGroup>
              <label htmlFor="artist">Artist</label>
              <input
                value={artistName}
                onChange={(e) => {
                  setArtistName(e.currentTarget.value);

                  if (artistNameError !== '') {
                    setArtistNameError('');
                  }
                }}
                type="text"
                id="artist"
                placeholder="Artist name"
              />
              {artistNameError && (
                <ErrorMessageSpan margintop="0" size="13px">
                  {artistNameError}
                </ErrorMessageSpan>
              )}
            </FormGroup>
            <FormGroup>
              <label htmlFor="duration">Duration</label>
              <input
                value={duration}
                onChange={(e) => {
                  setDuration(e.currentTarget.value);
                  if (durationError !== '') {
                    setDurationError('');
                  }
                }}
                type="number"
                id="duration"
                placeholder="Duration in seconds"
              />
              {durationError && (
                <ErrorMessageSpan margintop="0" size="13px">
                  {durationError}
                </ErrorMessageSpan>
              )}
            </FormGroup>
            <FormGroup>
              <label htmlFor="imageUrl">Image link</label>
              <input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.currentTarget.value)}
                type="url"
                id="imageUrl"
                placeholder="Image Url"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="genre">Genre</label>
              <input
                placeholder="Genre. Rap, Pop...."
                value={genre}
                onChange={(e) => {
                  setGenre(e.currentTarget.value);
                  setGenreError('');
                }}
                type="text"
              />
              {genreError && (
                <ErrorMessageSpan margintop="0" size="13px">
                  {genreError}
                </ErrorMessageSpan>
              )}
            </FormGroup>
            <div
              css={css`
                display: flex;
                justify-content: start;
                align-items: center;
                label {
                  color: white;
                  font-weight: bold;
                }
              `}
            >
              <input
                checked={addNew}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAddNew(e.target.checked)
                }
                id="add-new"
                type="checkbox"
              />
              <label htmlFor="add-new">Add New</label>
            </div>
            <ButtonGroup>
              <button
                disabled={loadingCreateMusic}
                style={{
                  backgroundColor: loadingCreateMusic ? COLORS.lightGray : '',
                }}
                type="submit"
              >
                Submit
              </button>
              <button type="button" onClick={handleClear}>
                Clear
              </button>
            </ButtonGroup>
            {failureCreateMusic && (
              <ErrorMessageSpan margintop="0" size="13px">
                {errorCreateMusic}
              </ErrorMessageSpan>
            )}
          </form>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <div
            css={css`
              margin-top: 25px;
            `}
          >
            <button
              style={{
                cursor: 'pointer',
              }}
              css={css`
                background-color: inherit;
                border: none;
              `}
              disabled={currPage === 1}
              onClick={() => {
                dispatch(getSelfMusics({ type: 'Left' }));
              }}
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
              onClick={() => {
                dispatch(getSelfMusics({ type: 'Right' }));
              }}
            >
              <FontAwesomeIcon
                style={{
                  cursor: 'pointer',
                }}
                color={
                  currPage === totalPages || musics.length === 0
                    ? COLORS.lightGray
                    : COLORS.white
                }
                size="2x"
                icon={faCircleChevronRight}
              />
            </button>
          </div>
          <div>
            {errorLoadingMusics ? (
              <div
                css={css`
                  font-size: 1.5rem;
                  color: #fff;
                  font-weight: bold;
                  font-size: 3rem;
                  text-align: center;
                  margin-top: 180px;
                `}
              >
                {errorLoadingMusics}
              </div>
            ) : musics.length === 0 &&
              loadingMusics !== true &&
              currPage === 1 ? (
              <H1
                style={{
                  marginTop: '40px',
                }}
              >
                Add Musics to your library.
              </H1>
            ) : (
              <MusicContainer>
                {musics.map((music) => (
                  <div
                    css={css`
                      position: relative;
                    `}
                    key={music._id}
                  >
                    <div
                      onClick={() => {
                        setTitle(music.title);
                        setArtistName(music.artist);
                        setDuration(music.length.toString());
                        setGenre(music.genre);
                        setImageUrl(music.imageUrl);
                        setSelectedMusicId(music._id);
                      }}
                    >
                      <MusicCard key={music._id} music={music} />
                    </div>
                    <FontAwesomeIcon
                      size="2x"
                      color="gray"
                      css={css`
                        position: absolute;
                        bottom: 10px;
                        right: 0px;
                        cursor: pointer;
                      `}
                      icon={faCircleXmark}
                      onClick={() => handleDeleteMusic(music._id)}
                    />
                  </div>
                ))}
              </MusicContainer>
            )}
            {loadingMusics && musics.length === 0 && (
              <div
                css={css`
                  font-size: 1.5rem;
                  color: #fff;
                  font-weight: bold;
                  font-size: 3rem;
                  text-align: center;
                  margin-top: 180px;
                `}
              >
                Loading
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MySongsPage;
