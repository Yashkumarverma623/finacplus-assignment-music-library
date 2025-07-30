export const filterSongs = (songs, searchTerm, selectedGenre) => {
  return songs
    .filter(song => 
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.album.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(song => 
      selectedGenre === '' || song.genre === selectedGenre
    );
};

export const sortSongs = (songs, sortBy, sortOrder) => {
  return [...songs].sort((a, b) => {
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
};

export const getUniqueGenres = (songs) => {
  return [...new Set(songs.map(song => song.genre))].sort();
};

export const getUniqueArtists = (songs) => {
  return [...new Set(songs.map(song => song.artist))];
};

export const validateSongData = (song) => {
  const required = ['title', 'artist', 'album', 'genre', 'year', 'duration'];
  const missing = required.filter(field => !song[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }
  
  if (song.year < 1900 || song.year > new Date().getFullYear()) {
    throw new Error('Invalid year');
  }
  
  return true;
};