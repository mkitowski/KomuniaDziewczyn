import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Picture from '../Picture/Picture';


const StyledDiv = styled.div`
  width: 100%;
  background-color: black;

  .gallery {
    @keyframes opacityBkg {
      0% {
        background-color: rgba(0, 0, 0, 0.3);
      }
      100% {
        background-color: rgba(0, 0, 0, 1);
      }
    }
    animation: 2.5s ease-in-out 1 opacityBkg forwards;
    width: 100%;
    position: absolute;
    margin: 0 auto;
    justify-content: center;
  }
  .photoContainer {
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    margin: 12px;
    padding: 0 !important;
    border-radius: 3px;
    min-width: 300px;
    img {
      width: 100%
      transition: all .4s ease-in-out;
      vertical-align: middle;
      
      :hover {
        transform: scale(1.2);
      }
    }
  }
`;

class GalleryPage extends React.Component {
  state = {
    pictureVisible: false,
    picNumber: 0
  }

  clickHandlePicture = event => {
    this.setState({
      pictureVisible: true,
      picNumber: event.target.alt
    });
  }

  clickClosePicture = () => {
    this.setState({
      pictureVisible: false
    })
  }

  next = () => {
    if(this.state.picNumber === this.props.filesNames.length-1){
      this.setState({
        picNumber: 0
      })
    } else {
      this.setState({
        picNumber: +this.state.picNumber+1
      })
    }
  }

  prev = () => {
    if (this.state.picNumber === 0) {
      this.setState({
        picNumber: this.props.filesNames.length-1
      })
    } else {
      this.setState({
        picNumber: +this.state.picNumber - 1
      })
    }
  }

  pressed = event => {
    console.log(event);
  }

  render(){
    const files = this.props.filesNames || [];
    return (
      <StyledDiv >
        <Grid container spacing={24} className={"gallery"}  >
          {
            files.map((el, i) => {
              return (
                <Grid key={i} item xs={3} className={'photoContainer'} onClick={this.clickHandlePicture}>
                  <img src={el} alt={i} />
                </Grid>
              )
            })
          }
        </Grid>
        {this.state.pictureVisible && 
          <Picture file={files[this.state.picNumber]} 
            close={this.clickClosePicture} 
            next={this.next} 
            prev={this.prev}
          />}
      </StyledDiv>
    );
  }

}


export default GalleryPage;