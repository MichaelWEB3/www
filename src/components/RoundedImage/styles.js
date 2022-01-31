import styled from "styled-components";



export const Container = styled.div`

display: flex;
cursor: pointer;
margin: 0 20px;
justify-content: center;
align-items: center;
border-radius: 50%;


.Photo{
    background-position: center;
    background-image: url(${({ photo }) => photo});
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 50%;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    /* margin-right: 20px */
}

.Image{
    background-position: center;
    background-image: url(${({ image }) => image});
    background-color: ${({ color }) => color};
    background-repeat: no-repeat;
    background-size: auto;
    border-radius: 50%;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    /* margin-right: 20px */
}

.editPhoto{
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    &:hover {
    font-weight: bold;
    }
    
    
}

.NameAgeBox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
}

.Name{
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 15px;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    
}

.Age{
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1em;
    text-transform: lowercase;

    color: #FFFFFF;
}


`;