import React from 'react';
import styled from 'styled-components';


const StyledArrow = styled.div`
    position: fixed;
    right: 5%;
    bottom: 5%;
    height: 4rem;
    width: 4rem;
    font-size: 1rem;
    color: black;
    background-color: white;
    border-radius: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    cursor: pointer;
`;

class MoveToTop extends React.Component {
    render(){
        return(
            <StyledArrow onClick={this.props.handler}>
                Do góry
            </StyledArrow>
        )
    }
}

export default MoveToTop