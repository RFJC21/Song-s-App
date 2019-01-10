import * as actionTypes from "./actions";

//action creator
export const selectSong = song => {
  //return an action
  return {
    type: actionTypes.SONG_SELECTED,
    payload: song
  };
};
