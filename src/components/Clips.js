import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClipsApi from '../clips_api';

export default class Clips extends Component{

  render(){

    const videos = ClipsApi.all();
    const items = videos.map((v) =>
      <div className="mdc-layout-grid__cell animated fadeInUp" key={v.id}>

        <Link to={`/video-clips/${v.id}`}>
          <img width="100%" height="260" src={require(`../images/${v.id}.jpg`)}   />
          <h2 className="mdc-typography--subheading1">{v.title}</h2>
        </Link>
      </div>
    );

    return (
      <main className="videos-cont">
          <div className="mdc-layout-grid">
          <h1 className="mdc-typography--display3 animated fadeInLeft">Clips</h1>
            <div className="mdc-layout-grid__inner">
              {items}
            </div>
          </div>
      </main>
    );

  }

}
