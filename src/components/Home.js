import React, { Component } from 'react';

export default class Home extends Component{

  constructor(props){
    super(props);

    this.state = {
      news: []
    }
  }

  componentDidMount(){

    const _this = this;

    fetch('https://fierce-journey-63372.herokuapp.com/news', {
      method: 'GET',
    })
    .then((response) => {
      response.json().then(function(data) {
        _this.setState({ news: data });
      });
    })

  }

  render(){

    const news = this.state.news.map((item) =>
      <a className="news-link" href={item.shortLink}>
        <div className="demo-grid mdc-layout-grid" key={item.pubDate}>
          <div className="mdc-typography--body1">
            <div className="mdc-layout-grid__inner">
              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-2">
                <img width="100" height="100" src={item.thumbnailUrl} alt="thumbnailUrl" />
              </div>
              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-10">
                <h3 className="mdc-typography--headline mdc-typography--adjust-margin">{item.title}</h3>
                <p>{item.description}</p>

                <p>{item.publisher}</p>
                <p>{item.pubDate}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    );

    console.log(news);

    return (

      <div>
        <section className="hero home-cover"></section>

        <main className="grid-cont">
        <h2 className="mdc-typography--display1 animated fadeInUp">Últimas Notícias</h2>

        {news}

        </main>
      </div>

    )
  }
}
