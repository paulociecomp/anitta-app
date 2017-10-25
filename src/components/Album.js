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

  render(){

    const album = AlbumsApi.get(
      parseInt(this.props.match.params.id, 10)
    );

    if (!album) {
      return <div>Sorry, but the ambum was not found</div>;
    }

    return (
      <div>

        <section className={`hero album-${album.id}`}>
          <h1 className="mdc-typography--display3 animated fadeInLeft">
            Discografia
          </h1>
        </section>

        <main className="grid-cont">

          <h2 className="mdc-typography--display1 animated fadeInUp">{album.name}</h2>
          <h3 className="mdc-typography--title animated fadeInUp">{album.year}</h3>

          <div className="mdc-typography--body1 animated fadeInUp">
            <p dangerouslySetInnerHTML={{__html: album.text}} />
          </div>

          <h2 className="mdc-typography--title">Músicas</h2>

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
