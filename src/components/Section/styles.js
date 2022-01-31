import styled from "styled-components";
import { SCREEN_SIZES } from "../../utils/screen";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 0;
  position: relative;

  @media (max-width: ${SCREEN_SIZES.sm}) {
    margin-top: 150px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  text-transform: capitalize;
  align-items: center;
  width: 100%;
`;

export const Text = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const Filter = styled.div`
  position: absolute;
  top: 4px;
  right: 180px;
  visibility: hidden;
  @media (max-width: ${SCREEN_SIZES.sm}) {
    right: 110px;
  }
`;
