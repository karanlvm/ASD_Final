import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { genres } from '../assets/constants';
import Searchbar from '../components/Searchbar'
import Sidebar from '../components/Sidebar';

import Navbar from './Navbar';

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId, activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');

  if (isFetching) return <Loader title="Loading songs..." />;
  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title || "POP";

  const handleGenreChange = (e) => {
    dispatch(selectGenreListId(e.target.value));
  };

  return (
    <div>
      
     
    <div className="flex flex-col">
      
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
        <select
          onChange={handleGenreChange}
          value={genreListId || 'POP'}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>{genre.title}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data && data.map((song) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Discover;
