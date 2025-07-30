import React, { useState, useReducer } from 'react';
import Header from './Header';
import SearchFilterBar from './SearchFilterBar';
import SongTable from './SongTable';
import AddSongModal from './AddSongModal';
import { songsReducer, initialSongs } from '../reducers/songsReducer';

const MusicLibrary = () => {
  const [songs, dispatch] = useReducer(songsReducer, initialSongs);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const genres = [...new Set(songs.map(song => song.genre))].sort();

  const filteredAndSortedSongs = songs
    .filter(song => 
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.album.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(song => 
      selectedGenre === '' || song.genre === selectedGenre
    )
    .sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];
      
      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      } else {
        return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
      }
    });

  const handleAddSong = (newSong) => {
    dispatch({ type: 'ADD_SONG', payload: newSong });
  };

  const handleDeleteSong = (songId) => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      dispatch({ type: 'DELETE_SONG', payload: songId });
    }
  };

  const totalGenres = Object.keys(songs.reduce((acc, song) => {
    acc[song.genre] = true;
    return acc;
  }, {})).length;

  const totalArtists = [...new Set(songs.map(song => song.artist))].length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          genres={genres}
          onAddSong={() => setIsAddModalOpen(true)}
          filteredSongsCount={filteredAndSortedSongs.length}
          totalGenres={totalGenres}
          totalArtists={totalArtists}
        />

        <SongTable
          songs={filteredAndSortedSongs}
          onDeleteSong={handleDeleteSong}
        />

        <AddSongModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAddSong={handleAddSong}
        />
      </div>
    </div>
  );
}
  export default MusicLibrary;
