import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
		{
			title: 'No scrubs',
			duration: '4:05'
		},
		{
			title: 'Marcarena',
			duration: '3:15'
		},
		{
			title: 'All star',
			duration: '3:33'
    },
    {
      title: 'I want it that wat',
      duration: '5:15'
    }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});