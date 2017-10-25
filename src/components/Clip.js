import React, { Component } from 'react';
import YouTube from 'react-youtube';
import ClipsApi from '../clips_api';

export default class Clip extends Component{

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render(){

    const opts = {
      height: '390',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }

    const video = ClipsApi.get(
      this.props.match.params.id
    )

    return (
      <main className="videos-cont grid-cont" style={{paddingTop: '50px'}}>

        <h1 className="mdc-typography--display3 animated fadeInLeft">{video.title}</h1>

        <YouTube
          videoId={video.id}
          opts={opts}
          onReady={this._onReady}
        />
      </main>
    );

  }

}
