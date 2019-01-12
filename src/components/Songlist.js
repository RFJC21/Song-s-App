import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions/actions";
import { selectSong } from "../store/actions";

class SongList extends Component {
  //method to render the list of songs
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    songs: state.songs
  };
};

//const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
