import styled from 'styled-components';

export const TutorStyled = styled.ul`
  display: flex;
  background-color: #fff;
  padding: 24px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const TutorItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
