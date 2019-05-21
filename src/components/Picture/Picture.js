import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
  z-index: 500;
  
  .center{
    position: fixed;
    top: 2.5%;
    left: 5%;
    width: 90%;
    height: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 100%;
      z-index: 503;
    }
  }
  .left{
    position: fixed;
    top: 0;
    left: 0;
    width: 15%;
    height: 100vh;
    :hover {
      background-color: rgba(255,255,255,.2);
      cursor: pointer;
    }
  }
  .right{
    position: fixed;
    top: 0;
    right: 0;
    width: 15%;
    height: 100vh;
    :hover {
      background-color: rgba(255,255,255,.2);
      cursor: pointer;
    }
  }
`;



class Picture extends React.Component{


  componentDidMount() {
    document.body.addEventListener('keyup', this.keyPress);
  }

  keyPress = e => {
    
      switch (e.keyCode) {
        case 39:
          return this.props.next();
        case 37:
          return this.props.prev();
        case 27:
          return this.props.close();
        default:
          return;
      }
    
  }

  componentWillUnmount(){
    document.body.removeEventListener('keyup', this.keyPress);
  }

  render() {

    return (
      <StyledDiv>
        <div className={'center'}><img src={this.props.file} alt={this.props.file} onClick={this.props.close}/></div>
        <div className={'left'} onClick={this.props.prev} ></div>
        <div className={'right'} onClick={this.props.next} ></div>
      </StyledDiv>
    )
  }
} 

export default Picture;