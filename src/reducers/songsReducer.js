export const initialSongs = [
  { id: 1, title: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera", genre: "Rock", year: 1975, duration: "5:55" },
  { id: 2, title: "Hotel California", artist: "Eagles", album: "Hotel California", genre: "Rock", year: 1976, duration: "6:30" },
  { id: 3, title: "Billie Jean", artist: "Michael Jackson", album: "Thriller", genre: "Pop", year: 1983, duration: "4:54" },
  { id: 4, title: "Smells Like Teen Spirit", artist: "Nirvana", album: "Nevermind", genre: "Grunge", year: 1991, duration: "5:01" },
  { id: 5, title: "What's Going On", artist: "Marvin Gaye", album: "What's Going On", genre: "Soul", year: 1971, duration: "3:53" },
  { id: 6, title: "Imagine", artist: "John Lennon", album: "Imagine", genre: "Rock", year: 1971, duration: "3:07" },
  { id: 7, title: "Good Vibrations", artist: "The Beach Boys", album: "Pet Sounds", genre: "Pop", year: 1966, duration: "3:39" },
  { id: 8, title: "Purple Haze", artist: "Jimi Hendrix", album: "Are You Experienced", genre: "Rock", year: 1967, duration: "2:51" }
];

export const songsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SONGS':
      return action.payload;
    case 'ADD_SONG':
      return [...state, { ...action.payload, id: Date.now() }];
    case 'DELETE_SONG':
      return state.filter(song => song.id !== action.payload);
    case 'FILTER_SONGS':
      return state;
    default:
      return state;
  }
};