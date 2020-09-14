import { Action, ActionTypes, Song } from "../actions";

const defaultSongs = [
  { id: 0, title: "No Scrubs", duration: "4:05" },
  { id: 1, title: "Macarena", duration: "2:30" },
  { id: 2, title: "All Star", duration: "3:15" },
  { id: 3, title: "I want it That Way", duration: "1:45" },
];

export const selectedSongReducer = (
  state: Song = defaultSongs[0],
  action: Action
): Song => {
  switch (action.type) {
    case ActionTypes.SELECT_SONG:
      return action.payload;
    default:
      return state as Song;
  }
};

export const songsReducer = (
  state: Song[] = defaultSongs,
  action: Action
): Song[] => {
  return state;
};
