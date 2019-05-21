import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';



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

  render(){
    const files = this.props.filesNames || [];
    return (
      <StyledDiv>
        <Grid container spacing={24} className={"gallery"}>
          {
            files.map((el, i) => {
              return (
                <Grid key={i} item xs={3} className={'photoContainer'}>
                  <img src={el} alt={i} />
                </Grid>
              )
            })
          }
        </Grid>
      </StyledDiv>
    );
  }

}


export default GalleryPage;