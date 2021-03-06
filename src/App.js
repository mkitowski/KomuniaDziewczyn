import React from 'react';
import styled from 'styled-components';
import * as firebase from "firebase/app";
import firebaseConfig from "./firebase/config";
import "firebase/storage";

import Hiro from './components/Hiro/Hiro';
import Menu from './components/Menu/Menu';
import GalleryPage from './components/GalleryPage/GalleryPage';
import Movie from './components/Movie/Movie';
import MoveToTop from './components/MoveToTop/MoveToTop';





const StyledDiv = styled.div`

  width: 100%;
  height: 100vh;

  video {
    position: fixed;
    left: 0;
    z-index: -1;

@media screen and (max-aspect-ratio: 1920/1080) {
    min-height: 100%;
    width: auto;
}
@media screen and (min-aspect-ratio: 1920/1080) {

    min-width: 100%;
    height: auto;

} }
  .menu {
    width: 100%;
    height: 100%;
    text-align: center;
    background: rgba(0,0,0,0.3);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    ul {
      display: flex;
      padding: 2rem;
      justify-content: space-between;
      li {
        list-style: none;
        button{
        padding: 1rem 2rem;
        border: 2px solid white;
        border-radius: 6px;
        cursor: pointer;
        transition: transform 0.3s ease-in-out, color .3s ease-in-out, background-color .3s ease-in-out, border .3s ease-in-out;
        background-color: rgba(0,0,0,0.0);
        color: white;
        @media (min-width: 600px){
          :hover {
          transform: translate(4px,-4px);
          color: yellowgreen;
          border: 2px solid yellowgreen;
          background-color: rgba(0,0,0,0.6)
        }
        :active {
          transform: translate(4px,0px);
          color: yellowgreen;
          border: 2px solid yellowgreen;
          background-color: rgba(0,0,0,0.9)
        }
        }
        
        }

      }
    }
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.listenPosition();
  }

  state = {
    MovieVisible: false,
    HiroVisible: true,
    toTopButtonVisible: false,
    GalleryVisible: false
  }

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    const storage = firebase.storage();
    const filesNames = [];
    for (let i = 1; i <= 116; i++) {
      const a = require(`./lib/pics/${i}.jpg`);
      filesNames.push(a);
    }
    this.setState({
      filesNames,
      storage,
      filesLoaded: true
    })
  }

  listenPosition() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset <= 1) {
        this.setState({
          MovieVisible: false,
          GalleryVisible: false,
          toTopButtonVisible: false
        })
      }
      if (window.pageYOffset <= window.innerHeight) {
        this.setState({
          HiroVisible: true
        })
      }
    })
  }

  onMovieClicked = () => {
    this.setState({
      MovieVisible: true,
      GalleryVisible: false
    });
    setTimeout(() => {
      window.scrollTo({
        behavior: "smooth",
        top: window.innerHeight,
        left: 0
      });
    }, 100);
    setTimeout(() => {
      this.setState({
        HiroVisible: false,
        toTopButtonVisible: true
      })
    }, 2600);
  }

  onGalleryClick = () => {
    this.setState({
      MovieVisible: false,
      GalleryVisible: true
    });
    setTimeout(() => {
      window.scrollTo({
        behavior: "smooth",
        top: window.innerHeight,
        left: 0
      });
    }, 100);
    setTimeout(() => {
      this.setState({
        HiroVisible: false,
        toTopButtonVisible: true
      })
    }, 2600);
  }

  onClickToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0
    });

  }

  render() {
    return (
      <div>
        <StyledDiv>
          {this.state.HiroVisible && <Hiro />}
          <Menu movie={this.onMovieClicked} gallery={this.onGalleryClick} />
        </StyledDiv>
        {this.state.MovieVisible && <Movie />}
        {this.state.GalleryVisible && <GalleryPage filesNames={this.state.filesNames} />}
        {this.state.toTopButtonVisible && <MoveToTop handler={this.onClickToTop} />}
      </div>

    );
  }

}

export default App;