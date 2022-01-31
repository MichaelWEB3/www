import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  position: relative;

  .poupUp{
    position: absolute;
    display:flex;
    justify-content:center;
    height:100%;
    width:100%;
    opacity:0.8;
    background-color:black;
    z-index:50;
    
  }
  .poupUpContent{
      display: flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      height:30%;
      width:30%;
      position: absolute;
      background-color: ${({theme})=> theme.palette.background.main};
      opacity:1;
      z-index: 51;
      top: 10%;
      left:25%;
      color: #fff;
      border-radius:10px;

      span{
        font-weight: bold;
          font-size: 18px;
          color: ${({theme})=> theme.palette.primary.main};
          cursor:pointer;
          padding:5px;
      }

      .logos{
        width:50%;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 5px;

        margin-bottom:20px;
      
      }

      .buttonPoupUp{
        display: flex;
        color: black;
        font-weight:bold;
        justify-content:center;
      align-items:center;
        padding:5px;
        border-radius: 5px;
        background-color:${({theme})=> theme.palette.primary.main};
        cursor: pointer;

        .icon{
          margin-right: 10px;
        }
      }
    }

  .player{
    display:flex;
    background-color:${({theme})=> theme.palette.background.main};
    width:100%;
    height:100vh;
  }

  .section{
    display:flex;
    width:100%;
   
  }
`
