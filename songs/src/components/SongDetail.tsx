import React from "react";
import { connect } from "react-redux";
import { Song } from "../actions";
import { StoreState } from "../reducers";

const SongDetail = ({ song }: { song: Song }) => {
  return (
    <div>
      <h3> Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = ({ selectedSong }: StoreState): { song: Song } => {
  return { song: selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
