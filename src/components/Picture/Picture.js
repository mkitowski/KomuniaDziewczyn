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
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 90%;
    max-height: 90%;
  }
`;

const Picture = ({file}) =>{
  return(
    <StyledDiv>
      <img src={file} alt={file} />
    </StyledDiv>
  )
}

export default Picture;