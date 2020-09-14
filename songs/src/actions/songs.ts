import { ActionTypes } from "./types";

export interface Song {
  id?: number;
  title?: string;
  duration?: string;
}

export interface SelectSongAction {
  type: ActionTypes.SELECT_SONG;
  payload: Song;
}

// Action creator
export const selectSong = (song: Song): SelectSongAction => {
  // Return an action
  return {
    type: ActionTypes.SELECT_SONG,
    payload: song,
  };
};
