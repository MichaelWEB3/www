import styled from "styled-components";


export const div = styled.div`
display: flex;
width: 100%;
height: 80px;
z-index: 1;
align-items: center;
justify-content: space-around;
background-color: transparent;
opacity: 0;
:hover{
 opacity: 1;
}

`


export const Span = styled.span`
    color: white;
    font-size: 10px;
    text-align: justify;
    font-size:${props => props.size + "px"};
    font-weight:bold;
`


export const Estrelinhas = styled.span`
cursor: pointer;
color: ${(props) => props.seleacionado || 'white'}  ;

:hover{
width: 70px;
color:#fdcc12;
}

`

