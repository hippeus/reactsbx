import React, { ReactNode } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Song, selectSong } from "../actions";
import { StoreState } from "../reducers";

type SongProps = ConnectedProps<typeof connector>;
// mapStateToProps is a name 'by convention'
const mapStateToProps = ({
  songs,
  selectedSong,
}: StoreState): { songs: Song[]; selectedSong: Song } => {
  return { songs, selectedSong };
};

const mapDispatchToProps = { selectSong };

const connector = connect(mapStateToProps, mapDispatchToProps);
class _SongList extends React.Component<SongProps> {
  renderList() {
    return this.props.songs.map(
      (it: Song): ReactNode => {
        return (
          <div className='item' key={it.id}>
            <div className='right floated content'>
              <button
                onClick={() => {
                  this.props.selectSong(it);
                }}
                className='ui button primary'
              >
                Select
              </button>
            </div>
            <div className='content'>{it.title}</div>
          </div>
        );
      }
    );
  }

  render() {
    return <div className='ui divided list'> {this.renderList()}</div>;
  }
}

export const SongList = connector(_SongList);
