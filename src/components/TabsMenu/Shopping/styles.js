import styled from 'styled-components';

import { SCREEN_SIZES } from '../../../utils/screen';

export const Container = styled.div`
  .CardContainer{
      /* background-color: grey; */
      overflow-y: scroll;
      justify-content: center;
      align-items: center;
      margin: 300px 0 100px 0; 

      width: 800px;
      height:600px;

      @media (max-width: ${SCREEN_SIZES.sm}) {
      margin-left:0px;
      width: 400px;
      height: 300px;
      }
  
    }

`;
