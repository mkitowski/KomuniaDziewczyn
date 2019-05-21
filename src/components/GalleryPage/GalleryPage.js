import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';



const StyledDiv = styled.div`
  width: 100%;
  background-color: black;

  .gallery {
    width: 100%;
    position: absolute;
    margin: 0 auto;
    background-color: black;
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

function GalleryPage({ filesNames }) {

  const files = filesNames || [];
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


export default GalleryPage;