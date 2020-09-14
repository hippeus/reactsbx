import { combineReducers } from "redux";
import { selectedSongReducer, songsReducer } from "./songs";

import { Song } from "../actions";

export interface StoreState {
  selectedSong: Song;
  songs: Song[];
}

export const reducers = combineReducers<StoreState>({
  selectedSong: selectedSongReducer,
  songs: songsReducer,
});
