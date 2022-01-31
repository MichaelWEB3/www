import styled from 'styled-components';

import { SCREEN_SIZES } from '../../utils/screen';

export const Container = styled.div`
  /* width: 100%; */
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  display: flex;
  padding:50px;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${SCREEN_SIZES.sm}) {
    height: auto;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${SCREEN_SIZES.sm}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Back = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  transition: filter 0.2s;
  cursor: pointer;
  font-size: 16px;
  margin-top: 100px;

  &:hover {
      filter: brightness(80%);
    }

  svg {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    margin-right: 8px;
  }

  @media (max-width: ${SCREEN_SIZES.sm}) {
    margin-top: 40px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
  }
`;