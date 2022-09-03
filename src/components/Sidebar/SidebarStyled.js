import styled from 'styled-components';

export const SidebarStyled = styled.aside`
  min-width: 320px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-top: 100px solid #364161;
`;

export const SidebarItem = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => (props.i === 0 ? '#FF6B0A' : '#000')};
  margin-top: 10px;
`;
