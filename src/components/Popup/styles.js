import styled from 'styled-components';

import { SCREEN_SIZES } from '../../utils/screen';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #090011;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
 

  @media (max-width: ${SCREEN_SIZES.md}) {
   height: 160%;
  }

  h1 {
    color: #fff;
  }

  svg.close {
    position: absolute;
    font-size: 30px;
    right: 23px;
    top: 23px;
    color: #fff;
    cursor: pointer;
    transition: opacity 0.2s;
    z-index: 1;

    &:hover{
      opacity: 50%;
    }
  }
`;