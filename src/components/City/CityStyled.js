import styled from 'styled-components';

export const CityStyled = styled.p`
  background-color: #fff;
  /* width: 180px; */
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 15px; */
  /* &:not(:last-child) {
    margin-right: 30px;
  } */
  flex-basis: calc((100% - 150px) / 3);
  &:not(:nth-child(3n)) {
    margin-right: 30px;
  }
  &:not(:nth-last-child(-n + 3)) {
    margin-bottom: 15px;
  }
`;
