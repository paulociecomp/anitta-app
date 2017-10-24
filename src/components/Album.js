import React, { Component } from 'react';
import AlbumsApi from '../api';
import SpotifyPlayer from 'react-spotify-player';

const size = {
  width: '100%',
  height: 700,
};
const view = 'list'; // or 'coverart'
const theme = 'white'; // or 'white'

export default class Album extends Component{

  constructor(props){
    super(props);
  }

  render(){

    const album = AlbumsApi.get(
      parseInt(this.props.match.params.id, 10)
    );

    if (!album) {
      return <div>Sorry, but the ambum was not found</div>;
    }

    return (
      <div>

        <section className={`hero album-${album.id}`}></section>

        <main className="grid-cont">

          <h1 className="mdc-typography--display2">{album.name}</h1>
          <h2 className="mdc-typography--title">{album.year}</h2>

          <div className="mdc-typography--body1">
            <p dangerouslySetInnerHTML={{__html: album.text}} />
          </div>

          <SpotifyPlayer
            uri={album.spotifyURI}
            size={size}
            view={view}
            theme={theme}
          />
        </main>

      </div>
    );

  }

}
