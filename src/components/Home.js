import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class Home extends Component{

  constructor(props){
    super(props);

    this.state = {
      news: [],
      open: false,
      message: 'carregando conteúdo...'
    }
  }

  componentDidMount = () => {

    this.setState({ open: true })

    fetch('https://fierce-journey-63372.herokuapp.com/news', {
      method: 'GET',
    })
    .then((response) => {
      response.json().then((data) => {
        data.shift();
        this.setState({ news: data, open: false });
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
                <p>{item.publisher}</p>
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

        <Snackbar
          open={this.state.open}
          message={this.state.message}
        />
      </div>

    )
  }
}
